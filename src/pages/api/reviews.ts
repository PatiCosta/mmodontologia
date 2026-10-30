import type { NextApiRequest, NextApiResponse } from 'next'
import { feedbackslist } from '@/components/helpers/feedbacks'

// Formato normalizado consumido pelo componente Feedbacks
export type Review = {
  id: string
  rating: number
  author: string
  authorPhotoUrl: string
  text: string
  relativeTime: string
  timestamp: number
  procedure?: string
}

export type ReviewsResponse = {
  reviews: Review[]
  overallRating?: number
  totalRatings?: number
  source: 'google' | 'fallback'
  googleMapsUrl?: string
}

type GooglePlaceReview = {
  author_name: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

type GooglePlaceDetailsResponse = {
  result?: {
    reviews?: GooglePlaceReview[]
    rating?: number
    user_ratings_total?: number
    url?: string
  }
  status: string
  error_message?: string
}

// Converte a lista local pro formato normalizado — usada quando a API falha ou não está configurada
function buildFallback(): ReviewsResponse {
  return {
    reviews: feedbackslist.map((f) => ({
      id: String(f.id),
      rating: f.rating,
      author: f.patient,
      authorPhotoUrl: f.imageURL,
      text: f.feedback,
      relativeTime: '',
      timestamp: 0,
      procedure: f.procedure,
    })),
    source: 'fallback',
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReviewsResponse>,
) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  // Cache borda: 24h + revalidação em background por mais 1h.
  // TOS do Google Places permite cachear por até 30 dias — 24h é conservador e mantém frescor.
  res.setHeader(
    'Cache-Control',
    's-maxage=86400, stale-while-revalidate=3600',
  )

  if (!apiKey || !placeId) {
    // Sem env configurado → devolve fallback silencioso pra não quebrar o site em preview/dev
    return res.status(200).json(buildFallback())
  }

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
    url.searchParams.set('place_id', placeId)
    url.searchParams.set('fields', 'reviews,rating,user_ratings_total,url')
    url.searchParams.set('language', 'pt-BR')
    url.searchParams.set('reviews_sort', 'most_relevant')
    url.searchParams.set('key', apiKey)

    const upstream = await fetch(url.toString(), { method: 'GET' })
    const data = (await upstream.json()) as GooglePlaceDetailsResponse

    if (data.status !== 'OK' || !data.result?.reviews) {
      // Ex: status OVER_QUERY_LIMIT, REQUEST_DENIED, ZERO_RESULTS
      console.error('[api/reviews] Google Places status', data.status, data.error_message)
      return res.status(200).json(buildFallback())
    }

    const reviews: Review[] = data.result.reviews
      .filter((r) => r.rating >= 4 && r.text?.trim().length > 20)
      .map((r) => ({
        id: `${r.author_name}-${r.time}`,
        rating: r.rating,
        author: r.author_name,
        authorPhotoUrl: r.profile_photo_url,
        text: r.text,
        relativeTime: r.relative_time_description,
        timestamp: r.time,
      }))
      .sort((a, b) => b.timestamp - a.timestamp)

    return res.status(200).json({
      reviews,
      overallRating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
      source: 'google',
      googleMapsUrl: data.result.url,
    })
  } catch (err) {
    console.error('[api/reviews] fetch failed', err)
    return res.status(200).json(buildFallback())
  }
}

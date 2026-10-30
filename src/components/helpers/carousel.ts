
// Entradas podem ser string (fit=cover padrão, centralizada) ou objeto com:
// - fit=contain quando a imagem ficaria com corte ruim em cover
// - position (object-position) pra escolher o que fica dentro do quadro 1:1 do carrossel
export type CarouselImage = string | { src: string; fit?: 'cover' | 'contain'; position?: string }
export type ResolvedCarouselImage = { src: string; fit: 'cover' | 'contain'; position: string }

export const carouselPics: CarouselImage[] = [
    "/assets/carousel/carousel-1.png",
    "/assets/carousel/carousel-2b.jpeg", // substitui "/assets/carousel/carousel-2.png"
    { src: "/assets/carousel/carousel-3.png", position: '75% center' }, // antes: "/assets/carousel/carousel-3.png" (no corte central o logo saía pela metade)
    "/assets/carousel/carousel-4.png",
    "/assets/carousel/carousel-5b.jpeg", // substitui "/assets/carousel/carousel-5.png"
    "/assets/carousel/carousel-6.png",
    "/assets/carousel/carousel-7.png",
    "/assets/carousel/carousel-8.png",
    "/assets/carousel/carousel-9.png",
    "/assets/carousel/carousel-10.png",
]

// ordem de envio da Marina (pela data de upload dos arquivos)
export const beforeAfterPics: CarouselImage[] = [
    "/assets/carousel/IMG_0357.JPG.jpeg",
    "/assets/carousel/IMG_1364.JPG.jpeg",
    "/assets/carousel/5A5069DC-47DF-4ADF-BF78-FC8A18D04696.JPG.jpeg",
    "/assets/carousel/IMG_8819.PNG",
    "/assets/carousel/IMG_9800.JPG.jpeg",
    "/assets/carousel/IMG_6505.JPG.jpeg",
]

export function resolveCarouselImage(img: CarouselImage): ResolvedCarouselImage {
    return typeof img === 'string'
        ? { src: img, fit: 'cover', position: 'center' }
        : { src: img.src, fit: img.fit ?? 'cover', position: img.position ?? 'center' }
}
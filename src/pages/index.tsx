import { About } from '@/components/About'
import { ArquiteturaFacial360 } from '@/components/ArquiteturaFacial360'
import { Data } from '@/components/Data'
import { FAQ } from '@/components/FAQ'
import { Feedbacks } from '@/components/Feedbacks'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Header } from '@/components/Header'
import { Location } from '@/components/Location'
import { Main } from '@/components/Main'
import { MainAlternativa } from '@/components/MainAlternativa'
import { Me } from '@/components/Me'
import { Specialties } from '@/components/Specialties'
import WhatsButton from '@/components/WhatsButton'
import { beforeAfterPics } from '@/components/helpers/carousel'
import { Flex, useBreakpointValue } from '@chakra-ui/react'

export default function Home() {


  return (
    <>
      <Header />
      <Main />
      {/* <MainAlternativa /> */}
      <About />
      <ArquiteturaFacial360 />
      <Data />
      <Specialties />
      <Gallery />
      <Me />
      <Gallery
        id="#antes-e-depois"
        kicker="ANTES E DEPOIS"
        title="Resultados reais das minhas pacientes"
        highlightedText={['Resultados reais', 'minhas pacientes']}
        images={beforeAfterPics}
        mt={0}
        showBrandMark={false}
        compactTop
      />
      <Feedbacks />
      <FAQ />
      <Location />
      <Footer />
      <WhatsButton />
    </>
  )
}

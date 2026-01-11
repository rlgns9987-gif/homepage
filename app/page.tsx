import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Achievement from '@/components/Achievement'
import Reviews from '@/components/Reviews'
import Slider from '@/components/Slider'
import Process from '@/components/Process'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Achievement />
        <Reviews />
        <Slider />
        <Process />
        <ContactForm />
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

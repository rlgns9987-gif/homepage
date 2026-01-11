import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* 상담 아이콘 섹션 */}
        <section className="contact-icon-section">
          <div className="container">
            <div className="contact-main-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="120">
                <circle cx="45" cy="45" r="30" fill="#0066cc"/>
                <circle cx="105" cy="105" r="30" fill="#333"/>
                <text x="45" y="58" fontSize="36" fill="white" textAnchor="middle" fontWeight="bold">?</text>
                <rect x="90" y="90" width="40" height="30" fill="#333" rx="5"/>
                <rect x="95" y="98" width="30" height="3" fill="white"/>
                <rect x="95" y="107" width="22" height="3" fill="white"/>
              </svg>
            </div>
            <h1 className="contact-main-title">학점은행제 <strong className="blue-text">무료상담</strong></h1>
          </div>
        </section>

        {/* 상담 폼 섹션 */}
        <ContactForm />
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

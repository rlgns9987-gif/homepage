export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title">착한학점연구소는 <span className="highlight">다릅니다</span></h2>
          <p className="hero-subtitle">목표 과정을 달성할 수 있도록 1:1 관리를 제공합니다.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                  <rect x="20" y="30" width="60" height="40" rx="5"/>
                  <line x1="30" y1="45" x2="70" y2="45"/>
                  <line x1="30" y1="55" x2="70" y2="55"/>
                  <circle cx="50" cy="20" r="8"/>
                </svg>
              </div>
              <h3>교육컨설팅</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="50" cy="50" r="30"/>
                  <path d="M50 30 L50 50 L65 50"/>
                  <circle cx="50" cy="50" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3>장학혜택</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M30 50 Q50 30 70 50 Q50 70 30 50"/>
                  <circle cx="50" cy="50" r="8"/>
                </svg>
              </div>
              <h3>1:1담당자</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                  <rect x="25" y="30" width="50" height="50" rx="5"/>
                  <line x1="35" y1="45" x2="65" y2="45"/>
                  <line x1="35" y1="55" x2="65" y2="55"/>
                  <line x1="35" y1="65" x2="55" y2="65"/>
                  <circle cx="75" cy="25" r="8"/>
                </svg>
              </div>
              <h3>체계적관리</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

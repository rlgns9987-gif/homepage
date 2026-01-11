import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'

export default function CurriculumInfoPage() {
  return (
    <>
      <Header />
      <main>
        {/* 히어로 섹션 */}
        <section className="curriculum-hero">
          <div className="curriculum-hero-overlay"></div>
          <div className="container">
            <div className="curriculum-hero-content">
              <h1>착한학점연구소 커리큘럼</h1>
              <p>보다 더 효율적이고 현실적인 과정으로 안내합니다.</p>
            </div>
          </div>
        </section>

        {/* 소개 섹션 */}
        <section className="curriculum-intro">
          <div className="container">
            <div className="intro-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="150">
                <circle cx="100" cy="120" r="50" fill="#4A90E2"/>
                <ellipse cx="100" cy="120" rx="40" ry="35" fill="#63B3ED"/>
                <circle cx="85" cy="115" r="6" fill="white"/>
                <circle cx="115" cy="115" r="6" fill="white"/>
                <path d="M60,60 L75,90 L60,90 Z M140,60 L125,90 L140,90 Z M75,45 L125,45 L100,75 Z" fill="#333"/>
              </svg>
            </div>
            
            <h2>착한학점연구소는</h2>
            
            <div className="intro-text">
              <p>2017년부터 학습자분들과 함께하며</p>
              <p>보다 더 효율적이고 현실적인 이수과정으로</p>
              <br/>
              <p>원하는 목표를 이룰 수 있도록</p>
              <p>최선을 다하여 도와드리고 있습니다.</p>
              <br/>
              <p className="highlight-text">무분별한 광고와 무책임한 담당자를 사이에서</p>
              <p className="highlight-text">체계적이고 정확한 플랜으로 함께하겠습니다.</p>
            </div>
          </div>
        </section>

        {/* 4가지 특징 */}
        <section className="curriculum-features">
          <div className="container">
            <div className="features-grid-4">
              <div className="feature-box">
                <div className="feature-icon-large">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="20" y="30" width="60" height="50" fill="#0066cc" rx="5"/>
                    <rect x="30" y="45" width="40" height="3" fill="white"/>
                    <rect x="30" y="55" width="30" height="3" fill="white"/>
                  </svg>
                </div>
                <h3>한리적인 비용</h3>
                <div className="feature-divider"></div>
                <p>무수히 많은 평생교육원 안에서</p>
                <p>적합한 비용을 찾기란 쉽지 않습니다.</p>
                <br/>
                <p>착한학점연구소는 수강료를 제외한</p>
                <p>상담비용, 대행료 등을 절대 받지 않으며</p>
                <br/>
                <p>합리적인 비용으로 강의를 수강할</p>
                <p>수 있게 도와드리고 있습니다.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon-large">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <path d="M30 70 L50 30 L70 70" fill="none" stroke="#0066cc" strokeWidth="5"/>
                    <rect x="40" y="50" width="20" height="20" fill="#0066cc"/>
                  </svg>
                </div>
                <h3>믿을 수 있는 담당자</h3>
                <div className="feature-divider"></div>
                <p>가장 빈번하게 일어나는 담당자의</p>
                <p>무분별한 변경과 연락두절</p>
                <p>많은 학습자분들이 피해를 받고 있습니다.</p>
                <br/>
                <p>착한학점연구소는 7년 이상의</p>
                <p>믿을 수 있는 담당자로 구성되어 있어</p>
                <br/>
                <p>갑작두절이나 변경을</p>
                <p>절대 걱정하지 않으셔도 됩니다.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon-large">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <circle cx="40" cy="40" r="15" fill="#0066cc"/>
                    <circle cx="60" cy="60" r="15" fill="#0066cc"/>
                  </svg>
                </div>
                <h3>정식인가 교육원</h3>
                <div className="feature-divider"></div>
                <p>학점은행제는 국가평생교육진흥원에</p>
                <p>정식으로 인가받은</p>
                <p>교육기관에서 수강해야 합니다.</p>
                <br/>
                <p>정식으로 인가받지 않은 교육원이라면</p>
                <p>나중에 학점으로 인정받을 수 없고</p>
                <br/>
                <p>차후 문제가 생기더라도</p>
                <p>보상받을 수 있는 길이 없습니다.</p>
              </div>

              <div className="feature-box">
                <div className="feature-icon-large">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <circle cx="50" cy="50" r="25" fill="#0066cc"/>
                    <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="5" fill="none"/>
                  </svg>
                </div>
                <h3>효율적인 과정</h3>
                <div className="feature-divider"></div>
                <p>과정에 있어 스므로 목표를 세우고</p>
                <p>끝날 때 까지 학습하기란 쉽지 않습니다.</p>
                <br/>
                <p>내게 맞는 효율적인 과정을 찾고</p>
                <p>조금이나마 쉽고 빠른 방향을 탐구하여</p>
                <br/>
                <p>원하는 목표를 수월하게 이룰 수 있도록</p>
                <p>최선을 다하여 도와드리고 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 교육상담 섹션 */}
        <section className="curriculum-consultation">
          <div className="container">
            <h2 className="section-title">착한학점연구소 <strong className="blue-text">교육상담</strong></h2>
            
            <div className="consultation-intro">
              <p>학점은행제는</p>
              <p>온라인수업, 자격증, 독학학위제, 전적대 학점 등</p>
              <p>다양한 방법을 통하여 학점을 취득할 수 있기에</p>
              <br/>
              <p>꼭! 정확한 상담을 통하여 계획을 세우고 진행해야 합니다.</p>
              <br/>
              <p>계획을 세우고 진행하지 않는다면</p>
              <p>차후 문제가 발생 할 수 있습니다.</p>
              <br/>
              <p className="warning-text">*** 중복과목, 연간제한이수학점, 학위신청 탈락 등</p>
              <br/>
              <p>학습자분들의 최종학력과 보유학점, 목표과정 등 현재 상황을 고려하여</p>
              <p>가장 효율적이고 현실적인 이수과정으로 안내해드리겠습니다.</p>
            </div>

            <div className="sample-plan">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23f0f0f0' width='1200' height='800'/%3E%3Ctext x='50%25' y='50%25' font-size='48' text-anchor='middle' fill='%23666'%3E이수계획표 예시%3C/text%3E%3C/svg%3E" alt="이수계획표 예시" />
              <p className="sample-caption">&lt;이수계획표 예시&gt;</p>
            </div>
          </div>
        </section>

        {/* 학습관리 섹션 */}
        <section className="curriculum-management">
          <div className="container">
            <h2 className="section-title">착한학점연구소 <strong className="blue-text">학습관리</strong></h2>
            
            <p className="management-intro">최소한의 시간투자로 최대한의 효율을 내기 위해</p>
            <p className="management-intro">다양한 방법의 체계적인 학습관리를 실행하고 있습니다.</p>

            <div className="management-grid">
              <div className="management-card">
                <div className="management-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="30" y="35" width="40" height="50" fill="#4A90E2" rx="5"/>
                    <circle cx="50" cy="25" r="8" fill="#FFD93D"/>
                    <rect x="38" y="50" width="24" height="3" fill="white"/>
                    <rect x="38" y="60" width="18" height="3" fill="white"/>
                  </svg>
                </div>
                <h3>가이드북 및 요점자료 제공</h3>
                <p>학점은행제 온라인수업에 대한</p>
                <p>시험, 과제, 퀴즈, 토론에 대한</p>
                <p>가이드북과 요점자료를 제공하고</p>
                <br/>
                <p>자격증, 독학사, 시험일정과</p>
                <p>교재추천, 준비방법에 대한 내용까지</p>
                <br/>
                <p>수 년간 쌓인 데이터로</p>
                <p>쉽고 빠르게 해결할 수 있습니다.</p>
              </div>

              <div className="management-card">
                <div className="management-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="25" y="40" width="50" height="35" fill="#4A90E2" rx="5"/>
                    <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="4" fill="none"/>
                    <text x="50" y="30" fontSize="24" fill="#FFD93D" textAnchor="middle">SMS</text>
                  </svg>
                </div>
                <h3>문자 및 카톡 알림</h3>
                <p>단, 하나라도 놓치지 않도록</p>
                <p>교육원 알림 & 담당자 알림</p>
                <p>이중 알림을 실행하고 있습니다.</p>
              </div>

              <div className="management-card">
                <div className="management-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <circle cx="35" cy="45" r="12" fill="#FFD93D"/>
                    <circle cx="65" cy="45" r="12" fill="#4A90E2"/>
                    <rect x="30" y="60" width="40" height="25" fill="#4ECDC4" rx="5"/>
                    <circle cx="45" cy="72" r="3" fill="white"/>
                    <circle cx="55" cy="72" r="3" fill="white"/>
                  </svg>
                </div>
                <h3>1:1 전담 멘토링</h3>
                <p>궁금한 부분이 있다면</p>
                <p>기다리지 말고 물어보세요</p>
                <br/>
                <p>교육상담을 진행했던 담당자가</p>
                <p>모든 과정이 끝날때 까지 1:1담당자로 배정됩니다.</p>
                <br/>
                <p>단순, 텔레마케팅, 상담원이 아닌</p>
                <p>정식교육을 받은 평생교육 전문가로서</p>
                <br/>
                <p>다양한 입시과정과 학위 및 자격증에 있어</p>
                <p>목표를 이루실 때 까지</p>
                <p>최선을 다하여 도와드리고 있습니다.</p>
              </div>
            </div>

            <div className="quarterly-check">
              <div className="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
                  <circle cx="50" cy="50" r="35" fill="#4A90E2"/>
                  <path d="M30 50 L45 65 L70 35" stroke="white" strokeWidth="6" fill="none"/>
                </svg>
              </div>
              <h3>분기별 이수계획 점검</h3>
              <p>한 분, 한 분 잘못된 과정은 없는지</p>
              <p>분기별로 진행과정을 점검하여</p>
              <p>차후 일어날 수 있는 학점 부족, 학위 탈락에</p>
              <p>철저히게 대비하고 있습니다.</p>
            </div>
          </div>
        </section>

        {/* 행정절차 섹션 */}
        <section className="curriculum-admin">
          <div className="container">
            <h2 className="section-title">착한학점연구소 <strong className="blue-text">행정절차</strong></h2>
            
            <p className="admin-intro">학습자등록 및 학점인정신청, 학위신청까지</p>
            <p className="admin-intro">매 분기마다 놓치지 않도록 안내해드리고 있습니다.</p>
            <br/>
            <p className="admin-highlight">매번 분기마다 잘못된 신청과 미비된 서류제출 등</p>
            <p className="admin-highlight">다양한 이유로 학습자분들이 불편을 겪고 있습니다.</p>
            <br/>
            <p className="admin-detail">분기마다 자세한 안내문과 이수계획표로</p>
            <p className="admin-detail">놓치지 않도록 안내해드리고 있으며</p>
            <br/>
            <p className="admin-detail">분기별 사후점검을 통하여</p>
            <p className="admin-detail">잘못된 부분은 없는지 더욱 더 세밀하게</p>
            <p className="admin-detail">신경쓰고 다시 점검하고 있습니다.</p>
          </div>
        </section>

        {/* 무료상담 CTA */}
        <section className="curriculum-cta">
          <div className="container">
            <div className="cta-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
                <circle cx="35" cy="35" r="20" fill="#0066cc"/>
                <circle cx="65" cy="65" r="20" fill="#0066cc"/>
                <text x="35" y="43" fontSize="24" fill="white" textAnchor="middle">?</text>
                <rect x="50" y="50" width="30" height="20" fill="#333" rx="3"/>
                <rect x="55" y="55" width="20" height="2" fill="white"/>
                <rect x="55" y="60" width="15" height="2" fill="white"/>
              </svg>
            </div>
            <h2>학점은행제 <strong className="blue-text">무료상담</strong></h2>
          </div>
        </section>
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

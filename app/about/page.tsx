import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* 히어로 섹션 */}
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <div className="container">
            <div className="about-hero-content">
              <h1>&quot;학점은행제&quot; 어떤 제도일까요?</h1>
            </div>
          </div>
        </section>

        {/* 학점은행제 소개 */}
        <section className="about-intro">
          <div className="container">
            <div className="bank-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="200">
                <rect x="50" y="50" width="100" height="100" fill="#FF6B6B" rx="10"/>
                <rect x="150" y="50" width="100" height="100" fill="#4ECDC4" rx="10"/>
                <rect x="50" y="50" width="100" height="20" fill="#FFD93D"/>
                <rect x="50" y="80" width="100" height="20" fill="#FFA07A"/>
                <rect x="50" y="110" width="100" height="20" fill="#FF8C42"/>
                <rect x="150" y="50" width="100" height="20" fill="#6BCB77"/>
                <rect x="150" y="80" width="100" height="20" fill="#4D96FF"/>
                <rect x="150" y="110" width="100" height="20" fill="#9B59B6"/>
              </svg>
            </div>
            
            <div className="about-description">
              <h2>학점은행제는 &apos;학점인정 등에 관한 법률&apos;에 의거하여</h2>
              <p>다양한 형태의 학습 및 자격을 학점으로 인정받을 수 있도록 하고</p>
              <p>학점이 누적되어 일정 기준을 충족하면 학위를 취득할 수 있는 제도입니다.</p>
              
              <div className="highlight-box">
                <p>학점은행제는 <strong className="blue-text">&quot;고등학교 졸업 혹은 동등 이상의 학력&quot;</strong> 을 가진 사람은</p>
                <p>누구나 평생교육센터 · 학원 · 온라인!</p>
              </div>
            </div>
          </div>
        </section>

        {/* 학점은행제 소개 상세 */}
        <section className="about-detail">
          <div className="container">
            <p className="detail-intro">
              고등학교 졸업(검정고시), 대학(교) 중퇴 및 재적, 졸업 등<br/>
              고등학교 졸업 이상의 학력만 있다면 <strong className="blue-text">바로 시작할 수 있습니다.</strong>
            </p>
          </div>
        </section>

        {/* 학점취득방법 */}
        <section className="acquisition-methods">
          <div className="container">
            <h2 className="section-title">학점은행제 <strong className="blue-text">&quot;학점취득방법&quot;</strong></h2>
            
            <div className="methods-grid">
              <div className="method-card">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
                    <rect x="20" y="30" width="60" height="40" fill="#3498db" rx="5"/>
                    <rect x="30" y="45" width="40" height="3" fill="white"/>
                    <rect x="30" y="55" width="30" height="3" fill="white"/>
                  </svg>
                </div>
                <h3>온라인 강의</h3>
                <p className="method-subtitle">수업을 통한 학점취득 방법으로</p>
                <p>한 학기 15주 과정으로 이루어져 있습니다.</p>
                <div className="method-detail">
                  <p>연간제한이 수학점으로</p>
                  <p>1년 14과목(42학점) | 한학기 8과목(24학점)</p>
                  <p>까지 인정받을 수 있으며</p>
                  <p>과목당 3학점으로 인정받을 수 있는</p>
                  <p>가장 보편적인 학점취득방법입니다.</p>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
                    <circle cx="50" cy="40" r="15" fill="#3498db"/>
                    <path d="M30 70 Q50 55 70 70" fill="#3498db"/>
                    <circle cx="50" cy="40" r="8" fill="white"/>
                  </svg>
                </div>
                <h3>자격증 취득</h3>
                <p className="method-subtitle">교육부 장관의 승인을 받아</p>
                <p>국가평생교육진흥원이 고시한 자격증이라면</p>
                <p>학점으로 인정받을 수 있습니다.</p>
                <div className="method-detail">
                  <p>학점은행제 시작 전에 취득하거나</p>
                  <p>시작 이후에 취득한 자격증도 인정가능하며</p>
                  <p>연도에 따라 학점인정은 달라질 수 있습니다.</p>
                  <p>EX) 컴퓨터활용능력, 산업기사, 기사 등</p>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
                    <rect x="25" y="25" width="50" height="50" fill="#3498db" rx="5"/>
                    <path d="M35 45 L45 55 L65 35" stroke="white" strokeWidth="4" fill="none"/>
                  </svg>
                </div>
                <h3>독학학위제</h3>
                <p className="method-subtitle">시험을 통한 학점취득방법으로</p>
                <p>각 단계별 필요한 과목을 시험볼 수 있고</p>
                <div className="method-detail">
                  <p>합격한 과목에 한하여</p>
                  <p>학점으로 인정받을 수 있습니다.</p>
                  <p>1단계는 과목당 4학점</p>
                  <p>2~4단계는 과목당 5학점으로</p>
                  <p>인정받을 수 있습니다.</p>
                </div>
              </div>

              <div className="method-card">
                <div className="method-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
                    <path d="M30 70 L50 30 L70 70" fill="none" stroke="#3498db" strokeWidth="5"/>
                    <rect x="40" y="50" width="20" height="20" fill="#3498db"/>
                  </svg>
                </div>
                <h3>학점인정대상학교</h3>
                <p className="method-subtitle">전적대학교라고도 하며</p>
                <p>전문대학 혹은 4년제 대학을 다니면서</p>
                <p>이수한 학점이 있다면</p>
                <div className="method-detail">
                  <p>합격한 과목에 한하여</p>
                  <p>학점으로 인정받을 수 있습니다.</p>
                  <p>2년제 졸업 | 중퇴 - 최대 80학점</p>
                  <p>3년제 졸업 | 중퇴 - 최대 120학점</p>
                  <p>4년제 중퇴 - 최대 140학점</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 학위의 종류 */}
        <section className="degree-types">
          <div className="container">
            <h2 className="section-title">학점은행제 <strong className="blue-text">&quot;학위의 종류&quot;</strong></h2>
            
            <p className="degree-intro">학점은행제는 기본적으로 <strong>&quot;학위&quot;</strong>를 취득하는 제도이지만</p>
            <p className="degree-intro">자격증취득, 편입학, 대학원진학 등 다양한 방면에서 활용할 수 있습니다.</p>

            <div className="degree-grid">
              <div className="degree-card">
                <div className="check-icon">✓</div>
                <h3>학점은행제</h3>
                <h2 className="degree-title">전문학사</h2>
                <p className="degree-subtitle">= 전문대학교 졸업</p>
                
                <table className="degree-table">
                  <tbody>
                    <tr>
                      <td>전공</td>
                      <td>45학점</td>
                      <td>일반</td>
                      <td>15학점</td>
                    </tr>
                    <tr>
                      <td>교양</td>
                      <td>15학점</td>
                      <td className="total">총</td>
                      <td className="total">80학점</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="degree-card">
                <div className="check-icon">✓</div>
                <h3>학점은행제</h3>
                <h2 className="degree-title">학사학위</h2>
                <p className="degree-subtitle">= 4년제 대학교 졸업</p>
                
                <table className="degree-table">
                  <tbody>
                    <tr>
                      <td>전공</td>
                      <td>60학점</td>
                      <td>일반</td>
                      <td>50학점</td>
                    </tr>
                    <tr>
                      <td>교양</td>
                      <td>30학점</td>
                      <td className="total">총</td>
                      <td className="total">140학점</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="degree-card">
                <div className="check-icon">✓</div>
                <h3>학점은행제</h3>
                <h2 className="degree-title">타전공</h2>
                <p className="degree-subtitle">= 복수전공&부전공</p>
                
                <table className="degree-table">
                  <tbody>
                    <tr>
                      <td>전문</td>
                      <td rowSpan={2}>36학점</td>
                      <td>학사</td>
                      <td rowSpan={2}>48학점</td>
                    </tr>
                    <tr>
                      <td>학사</td>
                      <td>학위</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 소요기간 */}
        <section className="duration">
          <div className="container">
            <div className="duration-grid">
              <div className="duration-card">
                <h3 className="duration-title">소요기간</h3>
                <p>2~3학기[7개월 이상]</p>
              </div>

              <div className="duration-card">
                <h3 className="duration-title">소요기간</h3>
                <p>3~5학기[10개월 이상]</p>
              </div>

              <div className="duration-card">
                <h3 className="duration-title">소요기간</h3>
                <p>1~2학기[3개월 이상]</p>
              </div>
            </div>

            <div className="duration-notice">
              <p>***</p>
              <p>각 학위취득에 필요 한 소요기간은 학습자분들의 <strong className="blue-text">최종학력, 보유학점, 목표하는 시기와 방법</strong>에 따라 달라질 수 있습니다.</p>
            </div>
          </div>
        </section>

        {/* 활용 방안 */}
        <section className="utilization">
          <div className="container">
            <h2 className="section-title">학점은행제 <strong className="blue-text">&quot;활용 방안&quot;</strong></h2>
            
            <div className="utilization-grid">
              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <circle cx="50" cy="35" r="20" fill="#FFD93D"/>
                    <path d="M30 80 Q50 65 70 80" fill="#FFD93D"/>
                    <rect x="40" y="55" width="20" height="5" fill="#FF6B6B"/>
                  </svg>
                </div>
                <h3>학위취득</h3>
                <p>전문학사 학사학위</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="30" y="30" width="40" height="40" fill="#4ECDC4" rx="5"/>
                    <circle cx="40" cy="40" r="5" fill="#FFD93D"/>
                    <circle cx="60" cy="60" r="5" fill="#FF6B6B"/>
                  </svg>
                </div>
                <h3>산업기사</h3>
                <p>응시자격 비전공자</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="30" y="40" width="40" height="30" fill="#FF6B6B" rx="3"/>
                    <path d="M35 45 L45 55 L65 35" stroke="white" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
                <h3>편입학</h3>
                <p>일반편입 학사편입</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <path d="M30 70 L50 30 L70 70 Z" fill="#9B59B6"/>
                    <rect x="40" y="50" width="20" height="5" fill="#FFD93D"/>
                  </svg>
                </div>
                <h3>대학원</h3>
                <p>일반 교육 특수</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <circle cx="50" cy="50" r="30" fill="#FF6B6B"/>
                    <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="5" fill="none"/>
                  </svg>
                </div>
                <h3>사회복지사</h3>
                <p>1급 2급 취득과정</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="35" y="35" width="30" height="30" fill="#4ECDC4" rx="3"/>
                    <text x="50" y="55" fontSize="20" fill="white" textAnchor="middle">A</text>
                  </svg>
                </div>
                <h3>보육교사</h3>
                <p>2급 유치원정교사 등</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <circle cx="40" cy="40" r="15" fill="#FFD93D"/>
                    <circle cx="60" cy="60" r="15" fill="#4ECDC4"/>
                  </svg>
                </div>
                <h3>대졸자전형</h3>
                <p>간호 및 보건계열</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="30" y="40" width="40" height="30" fill="#3498db" rx="5"/>
                    <circle cx="50" cy="55" r="8" fill="white"/>
                  </svg>
                </div>
                <h3>타전공</h3>
                <p>복수전공 부전공</p>
              </div>

              <div className="util-card">
                <div className="util-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80">
                    <rect x="30" y="35" width="40" height="30" fill="#9B59B6" rx="5"/>
                    <path d="M40 50 L50 60 L60 40" stroke="white" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
                <h3>그 외 활용방법</h3>
                <p>알아보기&gt;</p>
              </div>
            </div>
          </div>
        </section>

        {/* 무료상담 섹션 */}
        <section className="about-contact">
          <div className="container">
            <div className="about-contact-icon">💬</div>
            <h2 className="section-title">학점은행제 무료상담</h2>
            <p className="contact-cta">상담받으러 가기 →</p>
          </div>
        </section>
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

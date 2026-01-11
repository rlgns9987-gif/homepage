import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'
import Link from 'next/link'

export default function CurriculumDetailPage() {
  return (
    <>
      <Header />
      <main>
        <section className="post-detail">
          <div className="container-detail">
            <div className="post-header">
              <h1>일반편입 학사편입 차이조건을 학점은행제로 갖추는 방법</h1>
              <div className="post-info">
                <div className="author-info">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='40' r='15' fill='%234A90E2'/%3E%3C/svg%3E" alt="프로필" className="profile-img" />
                  <span className="author-name">착한학점연구소</span>
                </div>
                <div className="post-meta-info">
                  <span>교육과정 2026-01-04 조회수 15</span>
                </div>
              </div>
            </div>

            <div className="post-content-detail">
              <div className="post-thumbnail-large">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Crect fill='%23f0f0f0' width='800' height='400'/%3E%3Ctext x='50%25' y='35%25' font-size='48' font-weight='bold' text-anchor='middle' fill='%23333'%3E일반편입%3C/text%3E%3Ctext x='50%25' y='50%25' font-size='48' font-weight='bold' text-anchor='middle' fill='%23333'%3Evs%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='48' font-weight='bold' text-anchor='middle' fill='%23333'%3E학사편입%3C/text%3E%3C/svg%3E" alt="일반편입 학사편입" />
              </div>

              <div className="article-content">
                <p className="intro">안녕하세요.</p>
                <p className="intro">착한학점연구소 교육담당자 <strong>😊설하쌤😊</strong> 입니다.</p>
                
                <p>오늘 대학 간판을 바꾸고 싶어서<br />
                혹은 더 공부하고 싶은 전공이 생겨서 편입 상담 요청이 정말 많아요.</p>
                
                <p>오늘은 인터넷에 떠도는 번만 광고 글 말고<br />
                여러분이 진짜 공급해하는 현실적인 편입 자격조건 전략을 말씀드리겠습니다.</p>

                <h2 className="section-heading">목차.</h2>
                <ol className="table-of-contents">
                  <li><strong>1. 일반편입 vs 학사편입 차이는?</strong></li>
                  <li><strong>2. 학점은행제로 자격 갖추기</strong></li>
                  <li><strong>3. &quot;남들보다 빠르게&quot; 기간 단축하는 3가지</strong></li>
                  <li><strong>4. 주의사항</strong></li>
                </ol>

                <h2 className="section-heading">1. 일반편입 vs 학사편입 차이는?</h2>
                
                <p>우선 내가 어느 길로 갈지 정해야겠죠? 간단하게 정리해 드릴게요.</p>

                <ul className="comparison-list">
                  <li>
                    <strong className="highlight-text">일반편입</strong>: 2년제 졸업(예정)자나 4년제 중 2년넘을 마친 분들이 지원합니다.<br />
                    <span className="sub-text">상점은 &quot;빠르다&quot;. 하지만 그만큼 상위권 대학은 <span className="highlight-text red">경쟁이 지영하고 커트라인이 높아요</span>.</span>
                  </li>
                  <li>
                    <strong className="highlight-text">학사편입</strong>: 4년제 졸업(예정)자가 지원합니다.<br />
                    <span className="sub-text">준비 기간은 더 걸리지만, <span className="highlight-text blue">합격 문턱이 훨씬 낮아요</span>.</span><br />
                    <span className="sub-text">인서율 상위권 대학을 노린다면 전략적으로 학사편입을 준비하는 논들이 많죠.</span>
                  </li>
                </ul>

                <h2 className="section-heading">2. 학점은행제로 자격 갖추기</h2>
                
                <p>학점은행제는 학교가 아니라 <span className="highlight-text">학점을 방는 제도예요</span>.<br />
                일정 점수만 채우면 <span className="highlight-text blue">교육부 장관 명의의 학위</span>를 받게 되는데<br />
                <strong>편입할 때 정규 대학 졸업장과 똑같이 인정받습니다.</strong></p>

                <div className="info-card">
                  <h3>📌 착한학점연구소<br />
                  EDUCATIONAL INSTUTUTE</h3>
                  <h2 className="info-title">교육담당자 설하쌤</h2>
                </div>

                <p>이렇게 일반편입 학사편입 차이조건을 학점은행제로 갖추는 방법에 대해 알아보았습니다.</p>
              </div>

              <div className="comments-section">
                <h3>댓글</h3>
                <div className="comment-form">
                  <textarea placeholder="로그인이 필요합니다."></textarea>
                  <button className="btn-comment">작성</button>
                </div>

                <div className="related-posts">
                  <div className="related-item">
                    <span className="related-icon">▲</span>
                    <a href="#">우아교육대학원 양성과정, 학점은행제 준비하는 이유 (미영)</a>
                  </div>
                  <div className="related-item">
                    <span className="related-icon">▼</span>
                    <a href="#">학점은행제 사회복지사 자격증 취득 과정 효율적으로 진행하는 방법</a>
                  </div>
                </div>

                <div className="nav-buttons">
                  <Link href="/curriculum" className="btn-list">목록</Link>
                  <Link href="/curriculum" className="btn-list-alt">글쓰기</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

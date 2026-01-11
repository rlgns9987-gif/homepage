import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'

export default function ReviewsPage() {
  const reviews = [
    {
      title: "청소년상담사3급 응시자격, 학점은행제로 준비한 방법",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 심리학 다전공 학사학위", "학습자 · 40대 직장인"],
      author: "연제 성과 · 48학점 취득 완료 후 학위 신청"
    },
    {
      title: "전문대졸 30대 직장인 경영 학사학위 취득 후기",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 경영학 학사학위", "학습자 · 30대 직장인"],
      author: "연제 성과 · 학위 신청 완료"
    },
    // ... 더 많은 후기 데이터
  ]

  // 총 25개의 샘플 후기 생성
  const allReviews = [
    {
      title: "청소년상담사3급 응시자격, 학점은행제로 준비한 방법",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 심리학 다전공 학사학위", "학습자 · 40대 직장인", "연제 성과 · 48학점 취득 완료 후 학위 신청"],
      date: "2026-01-01",
      views: 1
    },
    {
      title: "전문대졸 30대 직장인 경영 학사학위 취득 후기",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 경영학 학사학위", "학습자 · 30대 직장인", "연제 성과 · 학위 신청 완료"],
      date: "2026-01-02",
      views: 2
    },
    {
      title: "직장인 사회복지사2급 자격증 취득 후기",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 사회복지학 2급 자격증", "학습자 · 40대 직장인", "연제 성과 · 사회복지사 2급 자격증 취득"],
      date: "2026-01-06",
      views: 6
    },
    {
      title: "학점은행제 경영학사 학위취득 과정(고졸 30대 직장인)",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 경영학 학사학위", "학습자 · 30대 직장인", "연제 성과 · 학위 신청중"],
      date: "2026-01-08",
      views: 8
    },
    {
      title: "전문대졸 보육교사 학점은행제로 야간대학사 취득 후기 (유아교육대학원 양성과정 진학)",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 아동학 학사학위", "학습자 · 전문대졸/전적 보육교사", "연제 성과 · 건국 평생 4.4점 미우리"],
      date: "2026-01-10",
      views: 10
    },
    {
      title: "고졸 육아맘 학점은행제의 보육교사2급 자격증 취득 과정",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 전문학사 보육교사2급자격증", "학습자 · 고졸 / 육아맘", "연제 성과 · 수강중"],
      date: "2026-01-07",
      views: 7
    },
    {
      title: "산림기사 응시자격 8개월 중족과정 (4년제 비전공자/직장인)",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 국가기술자격증 산림기사 응시자격 중족", "학습자 · 30대 후반 직장인 / 4년제 비전공자", "연제 성과 · 타전공 학사학위 과정(4.8명점 중족) 중 미지막 학기 진행 중"],
      date: "2026-01-08",
      views: 11
    },
    {
      title: "소방경채 응시자격 진짜 후기, 행정 절차 도움",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 소방학 학사학위", "학습자 · 30대 직장인", "진짜 사람 · 지정 진형중, 학습지동중 완"],
      date: "2026-01-07",
      views: 15
    },
    {
      title: "3Q대 육아맘 보육교사2급 자격증 학점은행제로 취득",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 전문학사 중하 / 30대 육아맘", "학습자 · 전문학사 중하 / 30대 육아맘", "연제 성과 · 건국 평생 4.4점 미우리, 보육교사2급 3학기까지 취득"],
      date: "2026-01-06",
      views: 13
    },
    {
      title: "경영학 학사학위 인터넷강의들 통해 취득하는 방법",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 경영학 학사학위", "학습자 · 고졸 20대 직장인", "연제 성과 · 학위 신청 4.1 고득점 달성"],
      date: "2026-01-06",
      views: 17
    },
    {
      title: "명지대학교 편입을 위한 경영진문 학사 취득 과정",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 경영진문학사", "학습자 · 20대 직장인", "연제 성과 · 명지대학교 편입 진경"],
      date: "2026-01-05",
      views: 19
    },
    {
      title: "전문대 졸업자 건축기사 응시자격 과정 진짜 후기",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 건축기사 응시자격 산전", "학습자 · 40대 직장인", "연제 성과 · 미지막 학기 진형중"],
      date: "2026-01-05",
      views: 21
    },
    {
      title: "기계공학 학사학위 취득 과정 중 과제 관련1로 못 안내",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 기계공학 학사학위 취득", "학습자 · 30대 직장인", "연제 성과 · 건국 진형중, 140명점 취득 완료"],
      date: "2026-01-05",
      views: 19
    },
    {
      title: "간호학과 편입, 고등 학점은행제로 준비한 과정",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 간호학과 편입", "학습자 · 고졸 20대 중반 직장인", "연제 성과 · 편입 원서수 건국"],
      date: "2026-01-05",
      views: 20
    },
    {
      title: "컴퓨터공학 학사학위 취득하고 컴퓨터 코와대학원 지원 시작 중죽!",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 컴퓨터공학 학사학위", "학습자 · 30대 직장인", "연제 성과 · 건국 평생 4.4점 미우리"],
      date: "2026-01-05",
      views: 19
    },
    {
      title: "학점은행제 교양 재우고 4년제 학사학위 취득",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 학점 응용 전문/ 4년제 학사학위 취득", "학습자 · 34대 졸업 직장인 / 4년제 졸업", "연제 성과 · 취학 방법안 워입성으로 연력 재석 진행중"],
      date: "2026-01-05",
      views: 18
    },
    {
      title: "간호학과 대졸자진영 학점은행제로 진학 준비하기",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 학점은행제 경영 진공 진문학사 입학", "학습자 · 전문대졸 보육교사 학위", "연제 성과 · 건국 평생 4.1년 마우리"],
      date: "2026-01-05",
      views: 18
    },
    {
      title: "인서울 간호학과 편입을 위한 진문 학사 취득 3학기 과정(고졸 직장인)",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 간호학과 편입을 위한 전문학사", "학습자 · 고졸 20대 후반 직장인", "연제 성과 · 평균 4.1 고득점 성적 달성"],
      date: "2026-01-02",
      views: 23
    },
    {
      title: "학점은행제 교양 재우고 4년제 학사학위 취득",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 학점은행제 직전", "학습자 · 34대 졸업 직장인", "연제 성과 · 워석 학위로 연력 재석 진행중"],
      date: "2026-01-05",
      views: 18
    },
    {
      title: "학점은행제 재육학 학위로 교육대 학위 진학 준비한 후기",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 재육학 학사학위", "학습자 · 20대 직장인", "연제 성과 · 140명점 취득 완료"],
      date: "2026-01-04",
      views: 19
    },
    {
      title: "학점은행제로 학사학위 취득하여 대학원 준비",
      category: "학습자 포토플리오",
      tags: ["특별 과정 · 경영학 학사학위", "학습자 · 20대 직장인", "연제 성과 · 4.4 고득점"],
      date: "2026-01-04",
      views: 23
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* 히어로 섹션 */}
        <section className="reviews-hero">
          <div className="reviews-hero-overlay"></div>
          <div className="container">
            <div className="reviews-hero-content">
              <h1>착한학점연구소 수강후기</h1>
              <p>실제로 저희와 함께하셨던 학습자분들의 소중한 후기입니다.</p>
            </div>
          </div>
        </section>

        {/* 후기 그리드 */}
        <section className="reviews-grid-section">
          <div className="container">
            <div className="reviews-masonry">
              {allReviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="review-thumbnail-kakao">
                    <img src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23${index % 3 === 0 ? 'FFE066' : index % 3 === 1 ? 'B4E7FF' : 'E5E5E5'}' width='400' height='500'/%3E%3Ctext x='50%25' y='30%25' font-size='16' text-anchor='middle' fill='%23333'%3E착한학점연구소%3C/text%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' fill='%23666'%3E${review.title.substring(0, 15)}...%3C/text%3E%3C/svg%3E`} alt={review.title} />
                  </div>
                  <div className="review-content-item">
                    <h3>{review.title}</h3>
                    <span className="review-badge">{review.category}</span>
                    <div className="review-tags">
                      {review.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="review-tag-item">
                          <span className="tag-icon">📌</span>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="review-footer">
                      <div className="review-author-small">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30">
                          <circle cx="20" cy="25" r="12" fill="#4A90E2"/>
                        </svg>
                        <span>착한학점연구소</span>
                      </div>
                      <span className="review-date">{review.date.substring(5)} 조회 {review.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="pagination">
              <a href="#" className="page-prev">&lt;</a>
              <a href="#" className="page-num active">1</a>
              <a href="#" className="page-num">2</a>
              <a href="#" className="page-num">3</a>
              <a href="#" className="page-num">4</a>
              <a href="#" className="page-num">5</a>
              <a href="#" className="page-num">6</a>
              <a href="#" className="page-num">7</a>
              <a href="#" className="page-num">8</a>
              <a href="#" className="page-num">9</a>
              <a href="#" className="page-next">&gt;</a>
            </div>

            {/* 검색 */}
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button className="btn-search">🔍</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

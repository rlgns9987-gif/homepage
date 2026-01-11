import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'
import Link from 'next/link'

export default function CurriculumPage() {
  const posts = [
    { id: 1, title: "학점은행제 건축공학", locked: false, views: 11 },
    { id: 2, title: "서울예대 대졸자신형", locked: false, views: 5 },
    { id: 3, title: "기상기사 응시자격", locked: false, views: 9 },
    { id: 4, title: "학점은행제 학사 편입", locked: true, views: 8 },
    { id: 5, title: "오선플리텍 지원자격", locked: false, views: 11 },
    { id: 6, title: "학점은행제 일반편입", locked: true, views: 15 },
    { id: 7, title: "학점은행제 시각디자인", locked: true, views: 8 },
    { id: 8, title: "학점은행제 신청기간", locked: false, views: 9 },
    { id: 9, title: "간호학과 편입과정", locked: false, views: 11 },
    { id: 10, title: "산업안전기사 응시자격", locked: false, views: 12 },
    { id: 11, title: "학점은행제 복수전공", locked: false, views: 13 },
    { id: 12, title: "산업안전기사 응시자격", locked: false, views: 28 },
    { id: 13, title: "학점은행제 학사학위", locked: false, views: 23 },
    { id: 14, title: "전기기사 응시자격", locked: false, views: 18 },
    { id: 15, title: "소방설비기사 응시자격", locked: false, views: 21 },
    { id: 16, title: "지적직 공무원 자격요건", locked: false, views: 17 },
    { id: 17, title: "학점은행제 시작하는법", locked: false, views: 26 },
    { id: 18, title: "학점은행제 자격증", locked: false, views: 24 }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="page-header">
          <div className="page-header-overlay"></div>
          <div className="container">
            <h2>착한학점연구소 교육과정</h2>
            <p>학점은행제를 활용 할 수 있는 다양한 교육과정입니다.</p>
          </div>
        </section>

        <section className="post-grid-section">
          <div className="container">
            <div className="posts-grid">
              {posts.map((post) => (
                post.locked ? (
                  <div key={post.id} className="post-card locked">
                    <div className="post-thumbnail">
                      <div className="lock-icon">🔒</div>
                    </div>
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <div className="post-meta">
                        <span className="post-author">착한학점연구소</span>
                        <span className="post-date">조회 {post.views}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href="/curriculum/detail" key={post.id} className="post-card featured">
                    <div className="post-thumbnail">
                      <img src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23333' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='28' font-weight='bold' text-anchor='middle' fill='white'%3E${post.title}%3C/text%3E%3C/svg%3E`} alt={post.title} />
                    </div>
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <div className="post-excerpt">
                        <p>안녕하세요. 착한학점연구소 담당자입니다. 오늘은 {post.title}에 대해 알려드리겠습니다.</p>
                      </div>
                      <div className="post-meta">
                        <span className="post-author">착한학점연구소</span>
                        <span className="post-date">조회 {post.views}</span>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>

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

            <div className="search-box">
              <input type="text" placeholder="Search" />
              <button className="btn-search">🔍 글쓰기</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

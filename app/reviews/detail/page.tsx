import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatButton from '@/components/ChatButton'
import Link from 'next/link'

export default function ReviewDetailPage() {
  return (
    <>
      <Header />
      <main>
        {/* 카테고리 헤더 */}
        <section className="review-detail-header">
          <div className="container">
            <div className="review-category">연구소후기</div>
            <h1 className="review-detail-title">산림기사 응시자격 8개월 중족과정(4년제 비전공자/직장인)</h1>
          </div>
        </section>

        {/* 게시글 메타 정보 */}
        <section className="review-detail-meta">
          <div className="container">
            <div className="meta-info">
              <div className="author-info-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40">
                  <circle cx="20" cy="25" r="15" fill="#4A90E2"/>
                </svg>
                <div>
                  <span className="author-name">착한학점연구소</span>
                  <span className="post-date">2026-01-08 조회수 11</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 게시글 본문 */}
        <section className="review-detail-content">
          <div className="container">
            <div className="content-box-detail">
              <div className="info-box-blue">
                <div className="info-item">
                  <span className="info-icon">📋</span>
                  <span className="info-label">학습자 포토플리오</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span className="info-label">특표 과정 : 국가기술자격증 산림기사 응시자격 중족</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span className="info-label">학습자 : 30대 후반 직장인 / 4년제 비전공자</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">🏆</span>
                  <span className="info-label info-highlight">연제 성과 : 타전공 학사학위 과정(4.8명점 중족) 중 미지막 학기 진행 중</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📚</span>
                  <span className="info-label info-link">담당 멘토 : 착한학점연구소 교육 담당자 정석별</span>
                </div>
              </div>

              <div className="content-section">
                <h2>1. 진행 배경 및 목표</h2>
                <p>학습자님은 4년제 대학을 졸업하고 일반 사무직에 종사하시면 중, 노후 대비와 평소 관심 있던 조경/임업 분야로의 이직을 위해 산림기사 자격증을 목표하게 되었습니다.</p>
                <p>하지만 비전공자라 응시 불가 만점을 받으셨고, 다시 대학을 가기에는 직장을 다니고 있어 불가능한 상황이었습니다.</p>
                <p>이미 4년제 학사학위가 있으시기 때문에 오부터 다시 시작하는 것이 아니라 학점은행제 타전공 제도를 활용하여 전공 48학점만 이수하면 새로운 학위를 받을 수 있다는 점을 안내해 드렸습니다.</p>
                <p>직장 업무 강도가 높아 온라인 강의 외에 자격증 시험 전 미지막 학기를 수강하고 계신 상태입니다.</p>
                <p>현재 1학기를 우수한 성적으로 마치시고, 드디어 자격증 시험 전 미지막 학기를 수강하고 계십니다.</p>
              </div>

              <div className="content-section">
                <h2>2. 주요 컨설팅 내용</h2>
                <ul>
                  <li>불필요한 교양 과목 없이 전공 48학점만 이수하는 최적 플랜 제공</li>
                  <li>야근이 잦은 상황을 고려하여 과제 및 토론 참고자료 지원 및 일정 알림</li>
                  <li>행정절차 안내 : 학습자등록 및 학점인정신청 등 복잡한 행정절차 시기별 밀착케어</li>
                </ul>
              </div>

              <div className="content-section">
                <h2>3. 실제 결과 인증</h2>
                <div className="kakao-chat-image">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect fill='%23B2CCDC' width='800' height='1000'/%3E%3Ctext x='50%25' y='15%25' font-size='24' text-anchor='middle' fill='%23333' font-weight='bold'%3E착한학점연구소%3C/text%3E%3Crect x='100' y='200' width='600' height='150' fill='white' rx='15'/%3E%3Ctext x='120' y='240' font-size='18' fill='%23333'%3E선생님 혹시 전에 들었던 과목은 성적%3C/text%3E%3Ctext x='120' y='270' font-size='18' fill='%23333'%3E확인 따로 안 해도 괜찮으?? 졸업 못하%3C/text%3E%3Ctext x='120' y='300' font-size='18' fill='%23333'%3E는 거 아니겠죠? π—π%3C/text%3E%3Crect x='100' y='380' width='600' height='80' fill='%23FFE066' rx='15'/%3E%3Ctext x='120' y='420' font-size='18' fill='%23333' font-weight='bold'%3E잘시만요 제가 성적 확인 해드릴게요!!%3C/text%3E%3Crect x='100' y='490' width='300' height='60' fill='white' rx='15'/%3E%3Ctext x='120' y='530' font-size='18' fill='%23333'%3E네!!%3C/text%3E%3Crect x='100' y='580' width='600' height='150' fill='%23FFE066' rx='15'/%3E%3Ctext x='120' y='620' font-size='18' fill='%23333' font-weight='bold'%3E성적 잘 나오셔서 걱정 안 하셔도 될 것 같%3C/text%3E%3Ctext x='120' y='650' font-size='18' fill='%23333' font-weight='bold'%3E아요!%3C/text%3E%3Crect x='100' y='760' width='300' height='60' fill='white' rx='15'/%3E%3Ctext x='120' y='800' font-size='18' fill='%23333'%3E감사합니다 ㅎㅎ%3C/text%3E%3C/svg%3E" alt="카카오톡 대화 내용" />
                </div>
              </div>

              <div className="mentor-note">
                <span className="note-icon">💡</span>
                <span className="note-text">멘토의 한마디: (미지막까지 최선을 다해 도와드리겠습니다!)</span>
              </div>

              <div className="cta-button-large">
                <button className="btn-primary-large">
                  👉 나에게 맞는 학습설계 무료받기 (클릭!)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 댓글 섹션 */}
        <section className="review-comment-section">
          <div className="container">
            <div className="comment-form">
              <div className="comment-inputs">
                <input type="text" placeholder="이름" className="comment-input-small" />
                <input type="password" placeholder="비밀번호" className="comment-input-small" />
              </div>
              <textarea placeholder="댓글을 남겨주세요" className="comment-textarea"></textarea>
              <div className="comment-footer">
                <label className="file-upload-label">
                  <span>🖼️</span>
                </label>
                <button className="btn-submit-comment">작성</button>
              </div>
            </div>

            {/* 관련 글 */}
            <div className="related-posts">
              <div className="related-post-item">
                <span className="related-icon">⌃</span>
                <span>고졸 육아맘 학습자분의 보육교사2급 자격증 취득 과정</span>
              </div>
              <div className="related-post-item">
                <span className="related-icon">⌄</span>
                <span>소방경채 응시자격 진짜 후기, 행정절차 도움</span>
              </div>
            </div>

            {/* 목록 버튼 */}
            <div className="back-to-list">
              <Link href="/reviews">
                <button className="btn-list">목록</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatButton />
    </>
  )
}

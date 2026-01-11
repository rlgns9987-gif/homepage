export default function Reviews() {
  const reviews = [
    { author: "착한학점연구소", date: "5개월 전 조회 1" },
    { author: "착한학점연구소", date: "1개월 전 조회 2" },
    { author: "착한학점연구소", date: "1개월 전 조회 6" },
    { author: "착한학점연구소", date: "2개월 전 조회 8" },
    { author: "착한학점연구소", date: "2개월 전 조회 10" },
    { author: "착한학점연구소", date: "2개월 전 조회 22" }
  ]

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="section-title-blue">&quot;착한학점연구소와 함께 한다면?&quot;</h2>
        
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-image">
                <img src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%23FFF9C4' width='300' height='300'/%3E%3Ctext x='50%25' y='40%25' font-size='16' text-anchor='middle' fill='%23333'%3E후기 ${i+1}%3C/text%3E%3C/svg%3E`} alt={`후기${i+1}`} />
              </div>
              <div className="review-meta">
                <p className="review-author">{review.author}</p>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

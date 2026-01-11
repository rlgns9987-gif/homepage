export default function Achievement() {
  const strengths = [
    { title: "컨설팅\n연말강화", desc: "주기적으로 담당자 평가를 통하여 컨설팅의 질을 높이고 있습니다." },
    { title: "정보\n관리시스템", desc: "부 담당자를 배정하여 학습자의 만족도를 높이고 있습니다." },
    { title: "2차 사고\n방지 시스템", desc: "자사의 교육설계 소프트웨어를 활하여 2차 사고까지 방지하고 있습니다." },
    { title: "분기별\n사후관리", desc: "분기별로 학습자 만족도를 확인 이수율을 최대한 높이고 있습니다." },
    { title: "최적의\n설계 및 관리", desc: "품질 정책을 적극 도입하여 잘 좋은 서비스를 제공하고 있습니다." }
  ]

  return (
    <section className="achievement">
      <div className="container">
        <h2 className="section-title">학점은행제 <span className="highlight-blue">이수율 98% 달성</span></h2>
        <p className="section-subtitle">왜 착한학점연구소를 선택 해야할까?</p>
        
        <div className="strength-grid">
          {strengths.map((item, i) => (
            <div key={i} className="strength-item">
              <div className="strength-image">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23e0e0e0' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' fill='%23666'%3E특징 {i+1}%3C/text%3E%3C/svg%3E" alt={`특징${i+1}`} />
              </div>
              <h3 dangerouslySetInnerHTML={{ __html: item.title.replace(/\n/g, '<br>') }} />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

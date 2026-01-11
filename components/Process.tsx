export default function Process() {
  const steps = [
    {
      num: "①",
      title: "학습자등록",
      period: "[1월 / 4월 / 7월 / 10월]",
      desc1: "학위과정, 최종학력, 및 전공을 선택하는 과정으로 최소 1번만 신청해주시면 됩니다.",
      desc2: "학점인정신청과 동시에 가능하며 학습자등록 이전에 과목을 먼저 수강할 수 있습니다."
    },
    {
      num: "②",
      title: "학점취득",
      period: "[항시가능]",
      desc1: "온라인수업, 자격증, 독학사",
      desc2: "학점인정대상학교 등 안내드린 학점을 취득할 수 있으며 한번 취득한 학점은 사라지지 않습니다."
    },
    {
      num: "③",
      title: "학점인정신청",
      period: "[1월 / 4월 / 7월 / 10월]",
      desc1: "온라인수업, 자격증, 독학사",
      desc2: "학점인정대상학교를 모두 신청해야 하며 취득학점이 있을때 마다 수시로 신청하게끔 좋습니다."
    },
    {
      num: "④",
      title: "학위신청",
      period: "[1월 / 7월]",
      desc1: "학위 취득에 필요한 학점을 모두 취득한 경우 학위취득이 의사를 표명하는 절차입니다.",
      desc2: "학위신청 마감일까지 모든 학점인정신청이 안료되어야 하며 매년 2번 신청이 가능합니다."
    },
    {
      num: "⑤",
      title: "학위수여",
      period: "[2월 / 8월]",
      desc1: "정상적으로 학위신청이 완료됐다면 매년 2월과 8월에 학위증이 발급됩니다.",
      desc2: "학위 수여일 이후 학위증명 및 학위증명서 발급이 가능합니다."
    }
  ]

  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title-white">학점은행제 진행절차</h2>
        <p className="section-subtitle-white">&quot;학습자들록 이전에도 수업을 시작할 수 있습니다.&quot;</p>
        
        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-card">
              <div className="process-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p className="process-period">{step.period}</p>
              <p className="process-desc">{step.desc1}</p>
              <p className="process-desc">{step.desc2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

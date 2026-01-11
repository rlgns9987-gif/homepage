'use client'

import { useState } from 'react'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider">
          <div className="slide active">
            <h2 className="slide-title">&quot;과락, 재수강이 걱정되시나요?&quot;</h2>
            <p className="slide-subtitle">직장이나 다른 공부를 병행 하더라도 가능합니다.</p>
            <div className="slide-icon">⭐</div>
            <p className="slide-text">다양한 참고자료와 요점자료, 가이드라인을 통한 전문적인 관리가 함께합니다.</p>
          </div>
        </div>
        <div className="slider-dots">
          <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}></span>
          <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></span>
          <span className={`dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}></span>
        </div>
      </div>
    </section>
  )
}

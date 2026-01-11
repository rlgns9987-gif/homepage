'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone1: '',
    phone2: '',
    phone3: '',
    time: '',
    education: '',
    message: '',
    privacyAgree: false
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.name) {
      alert('성함을 입력해주세요.')
      return
    }
    
    if (!formData.phone1 || !formData.phone2 || !formData.phone3) {
      alert('연락처를 입력해주세요.')
      return
    }
    
    if (!formData.privacyAgree) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return
    }
    
    alert('상담 신청이 완료되었습니다.\n담당자가 곧 연락드리겠습니다.')
    setFormData({
      name: '',
      phone1: '',
      phone2: '',
      phone3: '',
      time: '',
      education: '',
      message: '',
      privacyAgree: false
    })
  }

  return (
    <section className="contact-form" id="contact">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-info">
            <p className="form-notice">* 모든 상담은 무료로 진행되며 수강료를 제외한 수수료를 절대 받지 않습니다</p>
            <div className="form-logo">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='120' r='50' fill='%234A90E2'/%3E%3Cellipse cx='100' cy='120' rx='40' ry='35' fill='%2363B3ED'/%3E%3Ccircle cx='85' cy='115' r='6' fill='white'/%3E%3Ccircle cx='115' cy='115' r='6' fill='white'/%3E%3Cpath d='M60,60 L75,90 L60,90 Z M140,60 L125,90 L140,90 Z M75,45 L125,45 L100,75 Z' fill='%23333'/%3E%3C/svg%3E" alt="로고" />
              <h3>착한학점연구소는</h3>
              <p className="form-highlight">전문적으로 도와드리고 있으며</p>
              <p>원하는 목표를 이루실때까지 최선을 다하겠습니다.</p>
            </div>
            <div className="form-benefits">
              <p>학습자분의 상황과 목표를 자세히 적어주실수록</p>
              <p>보다 정확하고 자세한 상담이 가능합니다.</p>
            </div>
          </div>
          <div className="form-container">
            <h2>학점은행제 무료상담</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>성함 <span className="required">*</span></label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <label>상담받으실 연락을 기입해주세요. <span className="required">*</span></label>
                <div className="phone-input">
                  <input 
                    type="text" 
                    maxLength={3} 
                    placeholder="010"
                    value={formData.phone1}
                    onChange={(e) => setFormData({...formData, phone1: e.target.value.replace(/[^0-9]/g, '')})}
                  />
                  <span>-</span>
                  <input 
                    type="text" 
                    maxLength={4}
                    value={formData.phone2}
                    onChange={(e) => setFormData({...formData, phone2: e.target.value.replace(/[^0-9]/g, '')})}
                  />
                  <span>-</span>
                  <input 
                    type="text" 
                    maxLength={4}
                    value={formData.phone3}
                    onChange={(e) => setFormData({...formData, phone3: e.target.value.replace(/[^0-9]/g, '')})}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>상담을 희망하시는 시간대를 입력해주세요.</label>
                <select value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})}>
                  <option>년/월/일</option>
                  <option>오전</option>
                  <option>오후</option>
                  <option>저녁</option>
                </select>
              </div>
              <div className="form-group">
                <label>최종학력 및 보유학점</label>
                <textarea 
                  rows={4}
                  value={formData.education}
                  onChange={(e) => setFormData({...formData, education: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>문의내용</label>
                <textarea 
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>개인정보 수집 및 이용 등의 <span className="required">*</span></label>
                <div className="privacy-box">
                  <p>착한학점연구소(이하 &apos;회사&apos;라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</p>
                </div>
                <select required>
                  <option value="">회사는 다음의 목적을 위하여 개인정보를 처리합니다.</option>
                </select>
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="privacy-agree"
                    checked={formData.privacyAgree}
                    onChange={(e) => setFormData({...formData, privacyAgree: e.target.checked})}
                    required 
                  />
                  <label htmlFor="privacy-agree">개인정보 수집 및 이용에 동의합니다.</label>
                </div>
              </div>
              <button type="submit" className="btn-submit">작성</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

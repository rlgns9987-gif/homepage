'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isWhite = pathname !== '/'

  return (
    <header className={`header ${isWhite ? 'header-white' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='40' r='15' fill='%234A90E2'/%3E%3Cellipse cx='30' cy='40' rx='12' ry='10' fill='%2363B3ED'/%3E%3Ccircle cx='25' cy='38' r='2' fill='white'/%3E%3Ccircle cx='35' cy='38' r='2' fill='white'/%3E%3Cpath d='M20,20 L25,30 L20,30 Z M40,20 L35,30 L40,30 Z M25,15 L35,15 L30,25 Z' fill='%23333'/%3E%3C/svg%3E" alt="로고" />
            <div className="logo-text">
              <h1>착한학점연구소</h1>
              <p>EDUCATIONAL INSTUTUTE</p>
            </div>
          </Link>
          <nav className="nav">
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>학점은행제란</Link>
            <Link href="/curriculum-info" className={pathname === '/curriculum-info' ? 'active' : ''}>커리큘럼</Link>
            <Link href="/reviews" className={pathname === '/reviews' ? 'active' : ''}>연구소후기</Link>
            <Link href="/curriculum" className={pathname === '/curriculum' ? 'active' : ''}>교육과정</Link>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>상담신청</Link>
          </nav>
          <div className="auth-buttons">
            <a href="#" className="btn-login">로그인</a>
            <a href="#" className="btn-join">회원가입</a>
          </div>
        </div>
      </div>
    </header>
  )
}

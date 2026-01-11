import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '착한학점연구소 - Educational Institute',
  description: '학점은행제를 활용 할 수 있는 다양한 교육과정입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

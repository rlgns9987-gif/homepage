'use client'

export default function ChatButton() {
  const handleClick = () => {
    alert('채팅 상담 기능')
  }

  return (
    <button className="chat-button" onClick={handleClick}>
      💬 문의
    </button>
  )
}

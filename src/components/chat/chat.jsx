import { useEffect } from 'react'
import './chat.css'

const Chat = ({isOpenChat, closeChat}) => {
    useEffect(() => {
        const keyup = (e) => {
          if (e.key === 'Escape') {
            closeChat()
          }
        }
        if (isOpenChat) {
          document.addEventListener('keyup', keyup)
        } else {
          document.removeEventListener('keyup', keyup)
        }
        return () => {
          document.removeEventListener('keyup', keyup)
        }
      }, [isOpenChat, closeChat])

      if (!isOpenChat) return null

  return (
        <div className="chat-content">
        <div className='chat-header'>
            <br />
            <h2>Chat</h2>
            <div className='modal-close' onClick={closeChat}> X </div>
        </div>
        <ul className='chat-body'>
            <li className='chat incoming'>
                <p>Hi</p>
            </li>
            <li className='chat outgoing'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
        </ul>
        <div className="chat-input">
            <textarea placeholder='Enviar mensaje'></textarea>
            <i className="fas fa-arrow-right"></i>
        </div>
        </div>
  )
}

export default Chat
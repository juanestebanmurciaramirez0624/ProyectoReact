import './chat.css'

// eslint-disable-next-line react/prop-types
const Chat = ({isOpenChat, closeChat}) => {
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
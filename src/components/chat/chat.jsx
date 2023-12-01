import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import './chat.css'

const socket = io('http://localhost:3001')

const Chat = ({ isOpenChat, closeChat }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const url = location.pathname.split('/')[1]
  const [isConnected, setIsConnected] = useState()
  const [newMsg, setNewMsg] = useState('')
  const [messages, setMessages] = useState([])
  const [currentSocketId] = useState(socket.id)

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true))
    socket.on('chat_message', (data) => {
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, data])
    })

    return () => {
      socket.off('connect')
      socket.off('chat_message')
    }
  }, [])

  const sendMsg = () => {
    socket.emit('chat_message', {
      user: socket.id,
      message: newMsg,
    })
    setNewMsg('')
  }

  function cleanInputs() {
    if (url === 'ticket') {
      navigate('/ticket')
    }
  }

  function buttonCloseModal() {
    cleanInputs()
    closeChat()
  }

  if (!isOpenChat) return null

  return (
    <div className="chat-content">
      <h2 className='text-center'>{isConnected ? 'Conectado' : 'No conectado'}</h2>
      <div className="chat-header">
        <br />
        <h2>Chat</h2>
        <div className="modal-close" onClick={buttonCloseModal}>
          X
        </div>
      </div>
      <ul className="chat-body">
        {messages.map((msg) => (
          <li
            key={msg.id}
            className={`chat ${msg.user === currentSocketId ? '' : 'outgoing'}`}
          >
            <p>{msg.message}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea placeholder="Enviar mensaje" onChange={(e) => setNewMsg(e.target.value)}></textarea>
        <button className="fas fa-arrow-right send" onClick={sendMsg}></button>
      </div>
    </div>
  )
}

export default Chat

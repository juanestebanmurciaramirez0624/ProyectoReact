import { useEffect } from 'react'
import './modal.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Modal = ({ isOpen, closeModal, children, title }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const url = location.pathname.split('/')[1]

  function cleanInputs () {
    if (url === 'ticket') {
      navigate('/ticket')
    } else if (url === 'user') {
      navigate('/user')
    }
  }

  useEffect(() => {
    const keyup = (e) => {
      if (e.key === 'Escape') {
        cleanInputs()
        closeModal()
      }
    }
    if (isOpen) {
      document.addEventListener('keyup', keyup)
    } else {
      document.removeEventListener('keyup', keyup)
    }
    return () => {
      document.removeEventListener('keyup', keyup)
    }
  }, [isOpen, closeModal])

  function buttonCloseModal () {
    cleanInputs()
    closeModal()
  }

  if (!isOpen) return null

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <header className='modal-header'>
          <br />
          <h2>{title}</h2>
          <div className='modal-close' onClick={buttonCloseModal}>
            X
          </div>
        </header>
          {children}
      </div>
    </div>
  )
}

export default Modal
import { useEffect } from 'react'
import './modal.css'

// eslint-disable-next-line react/prop-types
const Modal = ({isOpen, closeModal, children, title}) => {
  useEffect(() => {
    const keyup = (e) => {
      if (e.key === 'Escape') {
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

  if (!isOpen) return null

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <header className='modal-header'>
          <br />
          <h2>{title}</h2>
          <div className='modal-close' onClick={closeModal}>
            X
          </div>
        </header>
          {children}
      </div>
    </div>
  )
}

export default Modal
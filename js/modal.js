export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  messege: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
  Modal.wrapper.classList.add('open')
  },
  close() {
  Modal.wrapper.classList.remove('open')
  }
}

/* função para fechar o modal */ 

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if(event.key === 'Escape')
  Modal.close()
}
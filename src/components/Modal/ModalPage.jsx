import { useState } from 'react';
import './Modal.css';
import Modal from './Modal';
function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(null);
  // isModalOpen изачально null, потом нажимаем на кнопку null === 1 → ложь.
  // в isModalOpen записывается 1
  // выполняется setIsModalOpen(1) -> теперь isModalOpen = 1. Окно 1 открыватся. И так далее.

  // console.log(isModalOpen);
  const toggleModal = (modalNumber) => {
    // если текущее открытое модальное окно совпадает с modalNumber, то оно закрывается (null).
    // В противном случае открывается новое модальное окно с номером modalNumber.
    setIsModalOpen(isModalOpen === modalNumber ? null : modalNumber);
    console.log(isModalOpen);
  };
  return (
    <div className="modal-page">
      <button className="open-button" onClick={() => toggleModal(1)}>
        Открыть модальное окно 1
      </button>

      <button className="open-button" onClick={() => toggleModal(2)}>
        Открыть модальное окно 2
      </button>

      <button className="open-button" onClick={() => toggleModal(3)}>
        Открыть модальное окно 3
      </button>

      {isModalOpen === 1 && (
        <Modal onClose={() => toggleModal(1)}>
          <h2>Заголовок модального окна 1</h2>
          <p>Это текст модального окна 1</p>
        </Modal>
      )}

      {isModalOpen === 2 && (
        <Modal onClose={() => toggleModal(2)}>
          <h2>Заголовок модального окна 2</h2>
          <p>Это текст модального окна </p>
        </Modal>
      )}

      {isModalOpen === 3 && (
        <Modal onClose={() => toggleModal(3)}>
          <h2>Заголовок модального окна 3</h2>
          <p>Это текст модального окна 3</p>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;

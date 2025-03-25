function Modal({ children, onClose }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Закрываем только при клике на overlay
    }
  };
  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;

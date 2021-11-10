import Modal from "react-modal";

export default function GifModal({modalIsOpen, selectedGif, onRequestClose}) {

  if (!selectedGif) return <div></div>;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => onRequestClose()}
    >
      <div className="gif-modal">
        <img src={ selectedGif.images.original.url } alt={selectedGif.title} />
        <p><strong>Source:</strong> <a href={ selectedGif.source }>{ selectedGif.source }</a></p>
        <p><strong>Rating:</strong> { selectedGif.rating }</p>

        <button onClick={() => onRequestClose()}>close</button>
      </div>
    </Modal>
  )
}
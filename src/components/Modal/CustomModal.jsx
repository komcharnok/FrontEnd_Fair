/* eslint-disable react/prop-types */
import Modal from 'react-modal';

// Make sure to set appElement for accessibility
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal, children, title }) => {
  return ( 
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Custom Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="bg-white w-11/12 max-w-lg max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6 relative my-5">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <button className="text-xl text-gray-500 hover:text-gray-700" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;

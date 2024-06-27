import React, { useState, useEffect } from "react";

interface OperationStatusModalProps {
  success: boolean;
  onClose?: () => void;
  message?: string;
}

const OperationStatusModal: React.FC<OperationStatusModalProps> = ({ success, onClose, message }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (success) {
      setShowModal(true);
    }
  }, [success]);

  const closeModal = () => {
    setShowModal(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            {success ? (
              <p className="py-4">Success!</p>
            ) : (
              <p className="py-4">Failed!</p>
            )}
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={closeModal}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default OperationStatusModal;

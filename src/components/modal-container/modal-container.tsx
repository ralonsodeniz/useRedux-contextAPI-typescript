import React, { useMemo } from "react";

import { useModal } from "../../hooks/";

import InnerModal from "../inner-modal/inner-modal";
import Modal from "../modal/modal";

const ModalContainer: React.FC = () => {
  const { showModal } = useModal();
  // useMemo prevents rerenders when the context used in useModal changes but it does not affect our component dependencies
  return useMemo(() => {
    return (
      <div>
        {showModal && (
          <Modal>
            <InnerModal />
          </Modal>
        )}
      </div>
    );
  }, [showModal]);
};

export default ModalContainer;

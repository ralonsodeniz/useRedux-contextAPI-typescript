import React, { lazy, Suspense } from "react";

import { useModal } from "../../hooks";
import { INameToValueMap } from "../../common/types";

import {
  InnerModalContainer,
  InnerModalComponentContainer
} from "./inner-modal.styles";

import Spinner from "../spinner/spinner";
import OnClickOutside from "../onclick-outside/onclick-outside";
// since we do not know what component are we going to load in the modal until the openModal action opens it and pass the type and props we lazy load all the posibilities
const lazyCustomButton = lazy(() => import("../custom-button/custom-button"));
const lazyVideoContainer = lazy(() =>
  import("../video-container/video-container")
);
// we create a object with a correlative list of the string we receive as type of component to render and the lazy loaded component
const MODAL_COMPONENTS: INameToValueMap = {
  BUTTON: lazyCustomButton,
  VIDEO: lazyVideoContainer
};

const InnerModal: React.FC = () => {
  // we get the modal type and props from the context
  const { modalType, modalProps, closeModal } = useModal();
  // we load in a default component container the component we have to render from the collection
  const SpecificModal: React.FC = MODAL_COMPONENTS[modalType];

  return (
    <InnerModalContainer>
      <OnClickOutside action={closeModal} enabled>
        <InnerModalComponentContainer>
          <span>This is the modal (React Portal)</span>
          <Suspense fallback={<Spinner />}>
            <SpecificModal {...modalProps} />
          </Suspense>
        </InnerModalComponentContainer>
      </OnClickOutside>
    </InnerModalContainer>
  );
};
export default InnerModal;

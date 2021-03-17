import { Component, createContext } from "react";

interface ModalState {
  modalType: "edit" | "add";
  modalIsOpen: boolean;
}

interface ContextState extends ModalState {
  setModalIsOpen: (value: boolean) => void;
  setModalType: (type: "edit" | "add") => void;
}

export const ModalContext = createContext<ContextState>({
  modalType: "edit",
  modalIsOpen: false,
  setModalIsOpen: () => {},
  setModalType: () => {},
});

export default class ModalProvider extends Component<{}, ModalState> {
  state: ModalState = {
    modalType: "edit",
    modalIsOpen: false,
  };

  setModalIsOpen = (value: boolean) => {
    this.setState({ modalIsOpen: value });
  };

  setModalType = (type: "edit" | "add") => {
    this.setState({ modalType: type });
  };

  render() {
    return (
      <ModalContext.Provider
        value={{
          modalType: this.state.modalType,
          modalIsOpen: this.state.modalIsOpen,
          setModalIsOpen: this.setModalIsOpen,
          setModalType: this.setModalType,
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

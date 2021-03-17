import { Component, createContext } from "react";

interface ModalState {
  modalIsOpen: boolean;
}

interface ContextState extends ModalState {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

export const ModalContext = createContext<ContextState>({
  modalIsOpen: false,
  setModalIsOpen: () => {},
});

export default class ModalProvider extends Component<{}, ModalState> {
  state: ModalState = {
    modalIsOpen: false,
  };

  setModalIsOpen = (value: boolean) => {
    this.setState({ modalIsOpen: value });
  };

  render() {
    return (
      <ModalContext.Provider
        value={{
          modalIsOpen: this.state.modalIsOpen,
          setModalIsOpen: this.setModalIsOpen,
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

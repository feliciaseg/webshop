import { Component, createContext } from "react";
import { Product } from "../products";

interface ModalState {
  modalType: "edit" | "add";
  editProduct: Product;
  modalIsOpen: boolean;
}

interface ContextState extends ModalState {
  setModalIsOpen: (value: boolean) => void;
  setEditProduct: (product: Product) => void;
  setModalType: (type: "edit" | "add") => void;
}

export const ModalContext = createContext<ContextState>({
  modalType: "edit",
  editProduct: {
    name: "",
    imageUrl: "",
    id: "",
    price: 0,
    description: "",
  },
  modalIsOpen: false,
  setModalIsOpen: () => {},
  setEditProduct: () => {},
  setModalType: () => {},
});

export default class ModalProvider extends Component<{}, ModalState> {
  state: ModalState = {
    modalType: "edit",
    editProduct: {
      name: "",
      imageUrl: "",
      id: "",
      price: 0,
      description: "",
    },
    modalIsOpen: false,
  };

  setModalIsOpen = (value: boolean) => {
    this.setState({ modalIsOpen: value });
  };

  setModalType = (type: "edit" | "add") => {
    this.setState({ modalType: type });
  };

  setEditProduct = (product: Product) => {
    this.setState({ editProduct: product });
  };

  render() {
    return (
      <ModalContext.Provider
        value={{
          modalType: this.state.modalType,
          modalIsOpen: this.state.modalIsOpen,
          editProduct: this.state.editProduct,
          setEditProduct: this.setEditProduct,
          setModalIsOpen: this.setModalIsOpen,
          setModalType: this.setModalType,
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

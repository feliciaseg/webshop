import { Component, createContext } from "react";
import { saveProductListToLocalStorage } from "../helper";
import { Product } from "../products";

interface ListState {
  productList: Product[] | [];
}
interface ContextState extends ListState {
  productList: Product[] | [];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
}

export const ProductContext = createContext<ContextState>({
  productList: JSON.parse(localStorage.getItem("products") || "[]"),
  addProduct: () => {},
  removeProduct: () => {},
  editProduct: () => {},
});

export default class ProductProvider extends Component<{}, ListState> {
  state: ListState = {
    productList: JSON.parse(localStorage.getItem("products") || "[]"),
  };

  addProduct = (product: Product) => {
    this.setState({ productList: [...this.state.productList, product] });
    saveProductListToLocalStorage(this.state.productList);
  };

  removeProduct = (product: Product) => {
    const updatedList = this.state.productList.filter(
      (item) => item.id !== product.id
    );
    this.setState({ productList: [...updatedList] });
    saveProductListToLocalStorage(updatedList);
  };

  editProduct = (product: Product) => {
    const targetIndex: number = this.state.productList.findIndex(
      (item) => item.id === product.id
    );
    let updatedList = [...this.state.productList];
    updatedList[targetIndex] = product;
    this.setState({ productList: [...updatedList] });
    saveProductListToLocalStorage(updatedList);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          productList: this.state.productList,
          addProduct: this.addProduct,
          removeProduct: this.removeProduct,
          editProduct: this.editProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

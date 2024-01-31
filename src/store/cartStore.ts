import { makeAutoObservable } from "mobx";
import { ItemType } from "./catalogStore";
import { CART_ITEMS_KEY } from "../constats";

class CartStore {
  itemsInCart: ItemType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initCart(): void {
    const itemsFromStorage = localStorage.getItem(CART_ITEMS_KEY);
    const items = itemsFromStorage ? JSON.parse(itemsFromStorage) : [];
    this.itemsInCart = [...items];
  }

  addToCart(item: ItemType): void {
    this.itemsInCart = [...this.itemsInCart, item];
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(this.itemsInCart));
  }

  deleteFromCart(id: string): void {
    this.itemsInCart = this.itemsInCart.filter((item) => item.id !== id);
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(this.itemsInCart));
  }

  get itemInCartCount(): number {
    return this.itemsInCart.length;
  }
}

export default new CartStore();

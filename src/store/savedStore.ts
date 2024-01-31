import { makeAutoObservable } from "mobx";
import { ItemType } from "./catalogStore";
import { SAVED_ITEMS_KEY } from "../constats";

class SavedStore {
  savedItems: ItemType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  initSaved(): void {
    const itemsFromStorage = localStorage.getItem(SAVED_ITEMS_KEY);
    const items = itemsFromStorage ? JSON.parse(itemsFromStorage) : [];
    this.savedItems = [...items];
  }

  addToSaved(item: ItemType): void {
    this.savedItems = [...this.savedItems, item];
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(this.savedItems));
  }

  deleteFromSaved(id: string): void {
    this.savedItems = this.savedItems.filter((item) => item.id !== id);
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(this.savedItems));
  }

  isItemSaved(id: string): boolean {
    return this.savedItems.map((el) => el.id).includes(id);
  }
}

export default new SavedStore();

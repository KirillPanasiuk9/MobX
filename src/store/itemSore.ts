import { makeAutoObservable } from "mobx";
import { ItemType } from "./catalogStore";
import { NO_IMAGE } from "../constats";

class ItemSore {
  item?: ItemType = undefined;
  isLoading: boolean = false;
  isError: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchItem(search: string): void {
    this.isLoading = true;
    this.isError = false;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((response) => response.json())
      .then((json) => {
        const item = json.items[0];
        const { title, authors = [], imageLinks, categories = [], description } = item.volumeInfo;
        this.item = {
          id: item.id,
          image: imageLinks?.thumbnail ?? NO_IMAGE,
          title,
          author: authors[0] ?? "",
          category: categories[0] ?? "",
          description: description ?? "Unfortunately there is no description",
        };
      })
      .catch(() => {
        this.isError = true;
      })
      .finally(() => (this.isLoading = false));
  }
}

export default new ItemSore();

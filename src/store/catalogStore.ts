import { makeAutoObservable } from "mobx";
import { API_KEY, NO_IMAGE, RESULTS_PER_PAGE } from "../constats";

export type ItemType = {
  id: string;
  image: string;
  title: string;
  author: string;
  category: string;
  description: string;
};

class CatalogStore {
  catalogItems: ItemType[] = [];
  totalPages: number = 0;
  isLoading: boolean = false;
  isError: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCatalog(search: string, startIndex: number = 0): void {
    this.isLoading = true;
    this.isError = false;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}&maxResults=${RESULTS_PER_PAGE}&startIndex=${startIndex}`,
    )
      .then((response) => response.json())
      .then((json) => {
        const totalItems = json.totalItems as number;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const transformedList = json.items.map((item) => {
          const { title, authors = [], imageLinks, categories = [], description } = item.volumeInfo;
          return {
            id: item.id,
            image: imageLinks?.thumbnail ?? NO_IMAGE,
            title,
            author: authors[0] ?? "",
            category: categories[0] ?? "",
            description: description ?? "Unfortunately there is no description",
          };
        });
        this.catalogItems = [...transformedList];
        this.totalPages = Math.ceil(totalItems / RESULTS_PER_PAGE);
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.isError = true;
      });
  }
}

export default new CatalogStore();

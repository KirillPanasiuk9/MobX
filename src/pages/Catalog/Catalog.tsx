import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, Typography } from "@mui/material";
import { CatalogListStyled, SearchBoxStyled, SearchStyled } from "./Catalog.styled";
import { observer } from "mobx-react-lite";
import catalogStore from "../../store/catalogStore";
import { CatalogItem } from "./CatalogItem";
import { RESULTS_PER_PAGE } from "../../constats";
import { Loader } from "../../components/Loader/Loader";
import { useErrorHandling } from "../../errorHandling";
import cartStore from "../../store/cartStore";

export const Catalog = observer((): JSX.Element => {
  const { setError } = useErrorHandling();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = (): void => {
    setCurrentPage(1);
    catalogStore.fetchCatalog(search, 0);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    const startIndex = page * RESULTS_PER_PAGE;
    setCurrentPage(page);
    catalogStore.fetchCatalog(search, startIndex);
  };

  useEffect(() => {
    catalogStore.isError ? setError("Some error happened") : setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catalogStore.isError]);

  useEffect(() => {
    cartStore.initCart();
  }, []);

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Catalog
      </Typography>
      <SearchBoxStyled>
        <SearchStyled
          sx={{ width: "75%" }}
          placeholder="Find the book you want"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          onKeyDown={(event) => {
            event.key === "Enter" && handleSearch();
          }}
        />
        <Button variant="contained" onClick={handleSearch} sx={{ width: "20%" }}>
          Search
        </Button>
      </SearchBoxStyled>
      {catalogStore.isLoading ? (
        <Loader mt="50px" />
      ) : (
        <CatalogListStyled container rowSpacing={5} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
          {catalogStore.catalogItems.map((item) => (
            <CatalogItem item={item} key={item.id} />
          ))}
        </CatalogListStyled>
      )}
      {catalogStore?.catalogItems?.length !== 0 && !catalogStore.isLoading && (
        <Pagination count={catalogStore.totalPages} onChange={handlePageChange} page={currentPage} size="large" />
      )}
    </Box>
  );
});

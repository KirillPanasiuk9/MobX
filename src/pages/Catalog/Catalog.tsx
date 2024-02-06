import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, Typography, TextField } from "@mui/material";
import { CatalogListStyled, SearchBoxStyled, shakeAnimation } from "./Catalog.styled";
import { observer } from "mobx-react-lite";
import { catalogStore, cartStore, savedStore } from "../../store";
import { CatalogItem } from "./CatalogItem";
import { RESULTS_PER_PAGE } from "../../constats";
import { Loader } from "../../components/Loader/Loader";
import { useErrorHandling } from "../../errorHandling";

export const Catalog = observer((): JSX.Element => {
  const { setError } = useErrorHandling();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [isSearchBlank, setIsSearchBlank] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIsSearchBlank(false);
    setSearch(event.target.value);
  };

  const handleSearch = (): void => {
    if (search) {
      setIsSearchBlank(false);
      setCurrentPage(1);
      catalogStore.fetchCatalog(search, 0);
    } else {
      setIsSearchBlank(true);
      setTimeout(() => {
        setIsSearchBlank(false);
      }, 500);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    setIsSearchBlank(false);
    event.key === "Enter" && handleSearch();
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
    savedStore.initSaved();
  }, []);

  return (
    <Box>
      <Typography variant="h3" mb={4}>
        Catalog
      </Typography>
      <SearchBoxStyled>
        <TextField
          label={isSearchBlank ? "" : "Find the book you want"}
          sx={{
            width: "75%",
            ...(isSearchBlank && {
              "& .MuiOutlinedInput-notchedOutline": {
                animation: `${shakeAnimation} 0.5s linear`,
              },
            }),
          }}
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
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

import React, { useState, useEffect } from "react";
import NewsGrid from "./components/NewsGrid";
import Sidebar from "./components/Sidebar";
import { getArticlesFromPage } from "./services/newsService";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [country, setCountry] = useState("all");

  useEffect(() => {
    getArticlesFromPage(page, country)
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, country]);

  const countryHandler = (_country) => {
    if (_country !== country) {
      setPage(1);
      setCountry(_country);
      setIsLoading(true);
    }
  };

  const handlePaginationChange = (e, page) => {
    setIsLoading(true);
    setPage(page);
  };

  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item item xs={12} md={2}>
          <Sidebar countryHandler={countryHandler} />
        </Grid>
        <Grid item item xs={12} md={10}>
          <Box
            sx={{ display: "flex" }}
            justifyContent="center"
            alignItems="center"
            margin="15px 0"
          >
            <Pagination
              count={10}
              color="primary"
              page={page}
              onChange={handlePaginationChange}
            />
          </Box>
          {isLoading ? (
            <Box
              sx={{ display: "flex" }}
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <CircularProgress />
            </Box>
          ) : (
            <NewsGrid articles={articles} />
          )}
          <Box
            sx={{ display: "flex" }}
            justifyContent="center"
            alignItems="center"
            margin="15px 0"
          >
            <Pagination
              count={10}
              color="primary"
              page={page}
              onChange={handlePaginationChange}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

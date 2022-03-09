import React from "react";
import NewsCard from "./NewsCard";

import Grid from "@mui/material/Grid";

function NewsGrid({ articles }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      gridAutoRows={"1fr"}
    >
      {articles.map((article) => (
        <Grid item xs={4} sm={4} md={4} key={article.id}>
          <NewsCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
}

export default NewsGrid;

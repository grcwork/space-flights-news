import React from "react";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";

const countries = [
  { name: "U.S.", code: "us", searchTerm: "U.S." },
  { name: "China", code: "cn", searchTerm: "China" },
  { name: "Russia", code: "ru", searchTerm: "Russia" },
  { name: "EU", code: "eu", searchTerm: "Europe" },
  { name: "India", code: "in", searchTerm: "India" },
  { name: "Japan", code: "jp", searchTerm: "Japan" },
  { name: "U.K.", code: "gb", searchTerm: "U.K." },
];

function Sidebar({ countryHandler }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
        News about Space 🔭, Rockets 🚀 and more ☄️
      </Typography>
      <List>
        <ListItem
          disablePadding
          onClick={() => countryHandler("all")}
          key="all"
        >
          <ListItemButton>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="All" />
          </ListItemButton>
        </ListItem>
        {countries.map((country) => (
          <ListItem
            disablePadding
            onClick={() => countryHandler(country.searchTerm)}
            key={country.code}
          >
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={`https://flagcdn.com/16x12/${country.code}.png`}
                  srcSet={`https://flagcdn.com/32x24/${country.code}.png 2x, https://flagcdn.com/48x36/${country.code}.png 3x`}
                  width="16"
                  height="12"
                  alt={country.name}
                />
              </ListItemIcon>
              <ListItemText primary={country.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;

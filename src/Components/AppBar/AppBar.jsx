import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";

export const SearchIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export function AppBar() {
  const navItems = [
    {
      name: "Home",
    },
    {
      name: "Contact",
    },
    {
      name: "About",
    },
    {
      name: "Sign up",
    },
  ];

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:"10px",
        padding: "10px 100px",
        borderBottom:"2px solid lightgrey",
      }}
    >
      <Grid>
        <Typography sx={{fontSize:"28px"}}>EZMarket</Typography>
      </Grid>
      <Grid sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {navItems?.map((items, index) => (
          <Link sx={{textDecoration:"none",color:"#000000",fontSize:"14px","&:hover" : {borderBottom:"2px solid grey"}}} key={index}>{items.name}</Link>
        ))}
      </Grid>
      <Grid sx={{ display: "flex", alignItems: "center",gap:'20px' }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#F5F5F5",
            border: "none",
            padding: "0 10px",
          }}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              background: "#F5F5F5",
              border: "none",
              padding: "8px 15px",
              fontSize: "11px",
              paddingRight:"50px"
            }}
          />
          <SearchIcon />
        </Box>
        <Box>
        <IconButton>
          <FavoriteBorderIcon sx={{ fontSize: "22px"}} />
        </IconButton>
        <IconButton>
          <ShoppingBagOutlinedIcon sx={{ fontSize: "22px"}} />
        </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Typography } from '@mui/material';
import '../App.css';
import { AppBar } from './AppBar/AppBar';
import { Banner } from './Banner/Banner';
import { FlashSales } from './FlashComp/FlashSales';


function App() {

  return (
    <>
      <OfferTab/>
      <AppBar/>
      <Banner/>
      <FlashSales/>
    </>
  )
}

function OfferTab() {
  return(
    <Grid
    container
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "black",
      color: "white",
      padding: "10px",
    }}
  >
    <Grid></Grid>
    <Grid item>
      <Typography sx={{ fontWeight: 300 }}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span
          style={{
            marginLeft: "10px",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Shop Now
        </span>
      </Typography>
    </Grid>
    <Grid item sx={{ marginRight: "20px" }}>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        English &nbsp; <ExpandMoreIcon />
      </Typography>
    </Grid>
  </Grid>
  );
}

export default App

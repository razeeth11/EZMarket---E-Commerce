import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Box, Card, Grid, IconButton, Table, Typography } from "@mui/material";
import { useEffect, useState } from 'react';

export function FlashSales(){

  const [seconds,setSeconds] = useState(59)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]); 


  const products = [{ link : 'https://rukminim2.flixcart.com/image/416/416/l15bxjk0/joystick/j/c/g/ps5-controller-silicone-cover-controller-skin-anti-slip-original-imagcruujgkgjfbm.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/gaming-keyboard/c/g/x/k1-mechanical-gaming-keyboard-with-blue-switches-20-rgb-original-imagxqkqyxxgbbtt.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/xif0q/monitor/k/u/o/-original-imagwdpygtzqzyux.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/l12h1u80/computer/q/v/b/-original-imagcpjgkhmevytp.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/8/m/macbook-air-thin-and-light-laptop-apple-original-imagqaphwbzpgjzr.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/gaming-keyboard/c/g/x/k1-mechanical-gaming-keyboard-with-blue-switches-20-rgb-original-imagxqkqyxxgbbtt.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/xif0q/monitor/k/u/o/-original-imagwdpygtzqzyux.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/l12h1u80/computer/q/v/b/-original-imagcpjgkhmevytp.jpeg?q=70&crop=false'},
  { link : 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/8/m/macbook-air-thin-and-light-laptop-apple-original-imagqaphwbzpgjzr.jpeg?q=70&crop=false'}]


  return (
    <Grid container sx={{ padding: "0 100px", marginTop: "50px" }}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#DB4444",
            borderLeft: "10px solid #DB4444",
            paddingLeft: "5px",
          }}
        >
          Today's
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex", alignItems: "end", gap: "100px" }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
          Flash Sales
        </Typography>
        <Grid sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
              Days
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
              03
            </Typography>
          </Box>
          <span
            style={{ marginTop: "10px", fontSize: "22px", color: "#DB4444" }}
          >
            :
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
              Hours
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
              23
            </Typography>
          </Box>
          <span
            style={{ marginTop: "10px", fontSize: "22px", color: "#DB4444" }}
          >
            :
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
              Minutes
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
              19
            </Typography>
          </Box>
          <span
            style={{ marginTop: "10px", fontSize: "22px", color: "#DB4444" }}
          >
            :
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
              Seconds
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
              {seconds < 10 && 0}
              {seconds}
            </Typography>
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginLeft: "auto",
          }}
        >
          <IconButton
            sx={{
              color: "#F5F5F5",
              background: "#DB4444",
              "&:hover": { color: "#F5F5F5", background: "#DB4444" },
            }}
          >
            <ChevronLeftOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#F5F5F5",
              background: "#DB4444",
              "&:hover": { color: "#F5F5F5", background: "#DB4444" },
            }}
          >
            <ChevronRightOutlinedIcon />
          </IconButton>
        </Box>
      </Grid>
      <Table
        container
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          overflow: "auto",
          marginTop: "40px",
          "-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        {products?.map((item, index) => (
          <Card
            key={index}
            container
            sx={{
              padding: "10px",
              border: "2px solid #F5f5f5",
              minWidth: "200px",
              position: "relative",
              cursor:"pointer"
            }}
          >
            <Grid>
              <img
                src={item.link}
                style={{
                  margin: "10px auto",
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  display: "flex",
                }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                marginTop: "15px",
              }}
            >
              <Grid>
                <Typography>HAVIT HV-G92 Gamepad</Typography>
              </Grid>
              <Grid>
                $120 &nbsp; <span>$180</span>
              </Grid>
              <Grid>⭐⭐⭐⭐⭐ (88)</Grid>
            </Grid>
          </Card>
        ))}
      </Table>

      <Grid sx={{margin:"auto"}}>
        <Typography sx={{display:"flex",alignItems:"center",padding:"10px 30px",margin:"50px 0",cursor:'pointer',background:"#DB4444",color:"white",borderRadius:"5px"}}>View All Products &nbsp; <ArrowForwardOutlinedIcon/></Typography>
      </Grid>
    </Grid>
  );
}
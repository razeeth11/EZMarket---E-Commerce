import { Grid, Link } from "@mui/material";

export function Banner(){

  const categoryList = [
    {
      name : "Woman's fashion"
    },{
      name : "Men's fashion"
    },{
      name : "Electronics"
    },{
      name : "Home & lifestyle"
    },{
      name : "medicine"
    },{
      name : "sports & outdoor"
    },{
      name : "baby's & toys"
    },{
      name : "groceries & pets"
    },{
      name : "health & beauty"
    }
  ]
  const urll = 
  // 'https://www.91-cdn.com/hub/wp-content/uploads/2023/09/iPhone-15-Croma.jpg'
  // 'https://images.fonearena.com/blog/wp-content/uploads/2022/08/ASUS-Creator-laptops-2022-India-1024x563.jpg'
  // 'https://didongviet.vn/dchannel/wp-content/uploads/2024/01/CUNG-SO-HUU_1200x628-scaled.jpg'
  // 'https://i.ytimg.com/vi/Oc7LZI6UIpg/maxresdefault.jpg'
  'https://i.ytimg.com/vi/9YNRU7L5pVc/maxresdefault.jpg'
  // '// https://ijunkie.com/wp-content/uploads/2022/06/Apple-Back-to-School-Promotion-2022.webp'

  return(
    <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 100px"}}>
      <Grid item xs={2} sx={{display:"flex",flexDirection:'column',gap:"15px",borderRight:'2px solid lightgrey',padding:"40px 100px 0px 0px"}}>
        {categoryList?.map((item,index)=>
        <Link sx={{whiteSpace:"nowrap",textDecoration:"none",fontSize:"13px",textTransform:'capitalize',color:"#000000"}} key={index}>{item.name}</Link>
        )}
      </Grid>
      <Grid item xs={9.5} sx={{margin:"10px",height:"350px",backgroundImage:`url("${urll}")`,backgroundRepeat:'no-repeat',backgroundSize:"contain",backgroundPosition:"center"}}>

      </Grid>
    </Grid>
  )
}
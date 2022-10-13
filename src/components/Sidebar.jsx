import { Stack } from "@mui/material";

import { categories } from "../utils/constants";


const selectedCategory= "New"

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "92vh"},
      flexDirection:{md: 'column'}
    }}
  >
    {categories.map((category)=>(
        <button
            className="category-btn"  
            style={{
                background: category.name === selectedCategory && '#FC1503',
                color: 'white'
            }}  
            key={category.name}    
        >
            <span style={{color: category.name === selectedCategory ? "white" : "red", marginRight: "15px"}}>{category.icon}</span>
            <span style={{}}>{category.name}</span>
        </button>
    ))}
  </Stack>
);

export default Sidebar;

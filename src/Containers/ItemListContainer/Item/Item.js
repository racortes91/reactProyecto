import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='contendor__producto'>
      <CardActionArea>
        <CardMedia className='contendor__foto'
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography className='contendor__titulo'
            gutterBottom
            variant="h5"
            component="div"
            
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='contendor__precio'>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/producto/" + product.id} className='contendor__link'>
          <Button size="small" color="primary" >
            Ver Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

// const styles = {
//   container: {
//     width: window.innerHeight > 900 ? "25%" : "90%",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 20,
//     backgroundColor: "rgba(249, 220, 92, 0.3)",
//   },
//   title: {
//     textOverflow: "ellipsis",
//     overflow: "hidden",
//     height: 100,
//   },
// };

export default Item;

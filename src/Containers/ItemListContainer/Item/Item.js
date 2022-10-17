import React from "react";
import Card from "@mui/material/Card";
import "./Item.css"
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
        
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agreagr al Carrito
        </Button>
      </CardActions>
    </Card>
  );
};


export default Item;

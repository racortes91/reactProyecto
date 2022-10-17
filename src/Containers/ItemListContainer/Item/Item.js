import React from "react";
import Card from "@mui/material/Card";
import "./Item.css"
import { CardContent, CardMedia, Typography, Button, CardActionArea,CardActions, }
from "@mui/material";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

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
        <Link to="producto/id">
          <Button size="small" color="primary">
            Agregar al Carrito
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};


export default Item;

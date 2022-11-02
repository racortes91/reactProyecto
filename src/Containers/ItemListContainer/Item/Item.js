import React from "react";
import Card from "@mui/material/Card";
import { CardContent, CardMedia, Typography, Button, CardActionArea,CardActions, } from "@mui/material";
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
          <Button className="boton__detalle" >
            Ver Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Item;

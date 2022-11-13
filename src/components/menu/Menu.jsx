import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import './Menu.scss'

function Menu() {
  const cardInfo = [
    { image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Burger", description: "A huge burger, cheese, lettuce, tomato, onions or mayonnaise!" },
    { image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Red velvet", description: "Red Velvet Frappuccino, Menu Frappuccino recipe" },
    { image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Pasta", description: "Peri Peri pasta with pink sauce and white sauce" },
    { image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Pizza", description: "Pizza Strip, Nutella Mousse, Pineapple Pizza, Oreo Delight" },
    { image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Samosa", description: "Chole samosa , Pasta samosa, Butter Samosa" },
    { image: "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Alchol & Drinks", description: "Long Island Ice tea, Cocktails and Beverages" },
    { image: "https://images.pexels.com/photos/688804/pexels-photo-688804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Non-veg", description: "Grilled chicken with long mushrooms, chicken peri peri" },
    { image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Diet food", description: "Salad, Brown bread, Avacado, Diet coke" },
  ];

  return (
    <section>
      <h1>Menu</h1>
    <Grid container spacing={3} className="grid__top">
      {cardInfo.map((card) => (
        <Grid item xs={3} className="grid">
          <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
              <CardMedia className="card__media"
                component="img"
                height="300"
                width="100"
                image = {card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="card__title">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="card__description">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </section>
  );
}

export default Menu;

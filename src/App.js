import React from'react';
import PropTypes from 'prop-types';


function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
    
    )

}

const foodLike = [
  { 
    id:1,
    name: 'Kimchi',
    image:"https://i.namu.wiki/i/bj0-ePqpopfsn6uKSSZ_hjHW0H-FZIYh_pNrzr_jXaefuUTt3ZeVhL6pWn2GdT6KcCZVNNklxG1WSH_BoEkN2TuPKPSuN5vpw9R3yQi7QjX8GSyVVSQYrOIm-463JTa2ueXZj43va0-vHWrjkUXJgg.webp",
    rating: 5
  },
  { id:2,
    name: "samgyeopsal",
    image: "https://i.namu.wiki/i/UP0YqdVxn8n7eclKuhgreAgi2HtO1H0J0tuO_IHPku0cXePzcI5c2R-fVFVyvFWnrkTpFsZnFyIFbxJN5jzyKgpdF8kbhtcsRDn5gAH77PhFKMN9qOnyi5l9sgAHRAAX5Q3omD1yC13aopcXFnhpng.webp",
    rating: 5
  },
  { id:3,
    name: "Bibimbap",
    image:"https://i.namu.wiki/i/OQ606_3C6ALQH8twSQSG-X3hRTlpA8iYd8oHPOxS3deKGvfW1qhmcFWYFS3oidT9PpN-a7xRr5erB1MOn821kRbEirTKDEHw6lMkty11bv0Y25aDM1hIgYDq5Z1H2JPyFY9t_INRJBgEhTG_lx0vcw.jpg",
    rating: 3

  },
  { id:4,
    name: "Doncasu",
    image:"https://i.namu.wiki/i/AGro-EF1haGgEaVm72IktIeLzn1BiDnoq60gjhf1DZ2QiRrGlLlx8mq9RFVIojuxKmlznKQ77iupUal3HYn4DWBAux6OsI-hwcVLPGPdvZJs4VHmpFVwOkqE11YKle3CY4--Jel7JXt0lBajIEjDJQ.webp",
    rating: 4
  },
  { id:5,
    name: "Kimbap",
    image: "https://i.namu.wiki/i/I67Wioz7W6coFnd1btC_reTiVUD9Jii2H-G8FgoRulo-bsFtKx0J95W8-cLDN-arGpkeaVQUCVxzlQCry5088hhJaoyJR5JcqIjvZBk5zMrf23AVGiKpdy2Jnmcibr1KZFze8BdB3-QJqVM4-7VzIg.webp",
    rating: 3.5
  },
]; 

function renderFood(dish) {
  return <Food key={dish.id} name = {dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;

import React from 'react';
import { useParams, Link } from 'react-router-dom';

const recipesData = [
  { id: 1, title: 'Pancakes', category: 'breakfast', ingredients: ['1.5 cups (190g) flour', 
      '2 tablespoons sugar', 
      '1 tablespoon baking powder', 
      '0.5 teaspoon salt', 
      '1.25 cups (300 ml) milk', 
      '1 large egg', 
      '3 tablespoons melted butter', 
      '1 teaspoon vanilla extract'], 
      instructions: `
        Mix dry (flour, sugar, baking powder, salt).
        Whisk wet (milk, egg, butter, vanilla).
        Combine, don’t overmix.
        Cook on greased pan, flip at bubbles (2 mins).
        Serve & enjoy! 🥞 🍽🥞`, 
        image: 'https://images.unsplash.com/photo-1555813456-94a3dd418cd3?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 2, title: 'Caesar Salad', category: 'lunch', ingredients: ['1 head of romaine lettuce, chopped', 
      '1 cup croutons', 
      '1/2 cup grated Parmesan cheese', 
      '1/2 cup Caesar dressing', 
      '1 grilled chicken breast, sliced' ], 
    instructions: `Prepare Lettuce – Wash and chop the romaine lettuce. Add Croutons – Toss the lettuce with croutons.
    Add Cheese – Sprinkle grated Parmesan cheese over the salad.
    Add Dressing – Drizzle Caesar dressing and toss to coat.
    Add Chicken – Top with sliced grilled chicken breast.
    Serve & Enjoy – Serve immediately and enjoy your Caesar Salad!`, 
    image: 'https://plus.unsplash.com/premium_photo-1701699258166-b14d782a4188?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 3, title: 'Spaghetti Bolognese', category: 'dinner', ingredients: ['400g spaghetti', 
      '2 tablespoons olive oil', 
      '1 onion, finely chopped', 
      '2 garlic cloves, minced', 
      '400g ground beef', 
      '800g canned tomatoes', 
      '2 tablespoons tomato paste', 
      '1 teaspoon dried oregano', 
      '1 teaspoon dried basil', 
      'Salt and pepper to taste'], 
    instructions: `Cook Spaghetti – Cook the spaghetti according to package instructions.
    Prepare Sauce – Heat olive oil in a large pan over medium heat. Add chopped onion and minced garlic, and sauté until softened.
    Cook Beef – Add ground beef to the pan and cook until browned.
    Add Tomatoes – Stir in canned tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes.
    Combine – Toss the cooked spaghetti with the Bolognese sauce.
    Serve & Enjoy – Serve hot with grated Parmesan cheese on top.`, 
    image: 'https://images.unsplash.com/photo-1600803734709-83f30a78e312?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

  { id: 4, title: 'Chocolate Cake', category: 'desserts', ingredients: ['1.5 cups (190g) flour', 
      '1 cup (200g) sugar', 
      '1/2 cup (50g) cocoa powder', 
      '1 teaspoon baking powder', 
      '1/2 teaspoon baking soda', 
      '1/2 teaspoon salt', 
      '1 cup (240ml) milk', 
      '1/2 cup (120ml) vegetable oil', 
      '2 large eggs', 
      '1 teaspoon vanilla extract'], 
    instructions: `Preheat Oven – Preheat your oven to 180°C (350°F).
    Prepare Dry Ingredients – In a large bowl, whisk together the flour, sugar, cocoa powder, baking powder, baking soda, and salt.
    Combine Wet Ingredients – In another bowl, whisk the milk, vegetable oil, eggs, and vanilla extract until smooth.
    Make the Batter – Pour the wet ingredients into the dry ingredients and stir until just combined.
    Bake the Cake – Pour the batter into a greased and floured cake pan. Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.
    Cool & Serve – Allow the cake to cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. Frost as desired and enjoy your chocolate cake!`,  
    image: 'https://images.unsplash.com/photo-1582650949464-21b3ac9d0e23?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <Link to="/recipes">⬅ Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetail;

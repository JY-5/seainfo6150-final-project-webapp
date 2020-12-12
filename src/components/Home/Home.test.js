import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const categories = {
  "1": "Fish",
  "2": "Chicken",
  "3": "Lamb",
  "4": "Beef",
  "5": "Vegetables",
  "6": "Staple food",
  "7": "Baking",
  "8": "Noodles",
  "9": "Soup",
  "10": "Breakfast",
  "11": "Vegetarian food",
  "12": "American food",
  "13": "Chinese food",
  "14": "Italian food",
  "15": "Vietnamese food",
  "16": "Mexican food",
  "17": "Indian food",
  "18": "Japanese food",
  "19": "Food for women",
  "20": "Food for children"
};

const popularRecipes = [{
  "title": "Roasted Chicken",
  "id": "1",
  "url": "https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900",
  "ingredients": "1 kilograms chicken, 1 teaspoon chilli flakes, 1/2 teaspoon powdered paprika, 1 teaspoon lime zest, 2 teaspoon canola oil/ rapeseed oil, 2 pinches powdered black pepper, 4 cloves crushed garlic, 1 teaspoon powdered oregano, 60 ml red wine vinegar powdered sea salt as required, 2 tablespoon chopped coriander leaves",
  "instructions": {
    "Step 1": "Roasted chicken recipe is a simple yet delicious chicken dish, which can be prepared in a few minutes at the comfort of your home. Here’s how you can prepare this delicious recipe. Wash the chicken pieces in running water and drain out the excess water.",
    "Step 2": "In the meantime, preheat the oven at 200 degree C. Then, take a small bowl and make the chicken marinade by using chilli, garlic, paprika, oregano, lemon zest, vinegar, oil, salt and pepper. Mix well to combine. You can add some spices and herbs as per your taste preference.",
    "Step 3": "Grease/ brush the baking tray with some oil. Then, place the chicken on the baking tray and pour over the chilli mixture and spread it all over to coat the chicken. Ensure the mixture is well coated. Now place the chicken in preheated oven and brush it well with some oil. Once the chicken is well coated, let it cook for 45 minutes or till done. Keep checking the chicken and if you find it to be too dry, brush it with some more oil.",
    "Step 4": "Remove from the oven, let it cool and garnish with chopped coriander leaves. You can also serve it with some creamy mashed potatoes, this will make it taste more delicious."
  }
}, {
  "title": "Salmon Steak",
  "id": "2",
  "url": "https://www.cookingclassy.com/wp-content/uploads/2017/02/skillet-seared-salmon-2.jpg",
  "ingredients": "300 gm salmon fish, 1 cup onion, 2 tablespoon lemon pepper seasoning, 4 tablespoon butter, 4 tablespoon lemon juice, garlic salt as required, 4 slices lemon",
  "instructions": {
    "Step 1": "To make this delicious recipe, wash the salmon under running water. Then drain the excess water and cut them into desired shapes.",
    "Step 2": "Take a bowl, add 2 tablespoon butter and 2 tablespoon lemon juice with a dash of salt. Once the fish is moist, marinate the fish and keep it aside for sometime. In the meantime, preheat the oven at 180 degree Celsius.",
    "Step 3": "Next, grease the baking tray with some butter. Place the marinated fish and pour the remaining butter and lemon juice mixture with some chopped coriander and spices. Sprinkle garlic salt and lemon pepper seasoning. Place the lemon slices over the pieces and bake for 20 minutes at 200 degree Celsius.",
    "Step 4": "Once the fish is baked, you can serve it with some fresh coriander leaves, tomatoes and spring onions. Your Salmon Steak is ready and indulge in the goodness."
  }
}]

const allRecipes = {"1": {
  "11": {
    "title": "Salmon Steak",
    "id": "11",
    "url": "https://www.cookingclassy.com/wp-content/uploads/2017/02/skillet-seared-salmon-2.jpg",
    "ingredients": "300 gm salmon fish, 1 cup onion, 2 tablespoon lemon pepper seasoning, 4 tablespoon butter, 4 tablespoon lemon juice, garlic salt as required, 4 slices lemon",
    "instructions": {
      "Step 1": "To make this delicious recipe, wash the salmon under running water. Then drain the excess water and cut them into desired shapes.",
      "Step 2": "Take a bowl, add 2 tablespoon butter and 2 tablespoon lemon juice with a dash of salt. Once the fish is moist, marinate the fish and keep it aside for sometime. In the meantime, preheat the oven at 180 degree Celsius.",
      "Step 3": "Next, grease the baking tray with some butter. Place the marinated fish and pour the remaining butter and lemon juice mixture with some chopped coriander and spices. Sprinkle garlic salt and lemon pepper seasoning. Place the lemon slices over the pieces and bake for 20 minutes at 200 degree Celsius.",
      "Step 4": "Once the fish is baked, you can serve it with some fresh coriander leaves, tomatoes and spring onions. Your Salmon Steak is ready and indulge in the goodness."
    }
  },
  "12": {
    "title": "Lemon Pepper Fish",
    "id": "12",
    "url": "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps177729_SD163615C04_05_4b.jpg",
    "ingredients": "4 fish, 1 teaspoon finely chopped ginger, 2 teaspoon powdered cumin, 3 chopped,de seeded green chilli, 1 tablespoon virgin olive oil, 2 large finely chopped onion, 1 teaspoon finely chopped garlic, 1 cinnamon, 1 teaspoon powdered black pepper, 1 1/2 tablespoon lemon juice, 1 tablespoon salt",
    "instructions": {
      "Step 1": "Squeeze the lemon juice over the raw fish and sprinkle salt on them for the marination process. Allow the fish to marinate for one to two hours. This step is important so that the flavour of lemon is absorbed.",
      "Step 2": "Take a non-stick pan and pour one tbsp of olive oil. Heat the oil over medium-high flame. Once the oil is sufficiently hot, add the chopped onions and chillies. Saute the onions till they turn pink and keep stirring.",
      "Step 3": "Then add the ginger and garlic pieces. Stir-fry the ginger and garlic for 3-4 minutes so that they don't stay raw. Now put the fish in the pan and cover. Allow the fish to cook in the steam.",
      "Step 4": "After 10 minutes, add the cumin powder and pepper. Saute them and cover the lid of the pan. After some time you will see that the fish has released some water, cook the fish in that. Once the fish looks half cooked, add half cup water and salt.",
      "Step 5": "Grate very little amount of the lemon skin and add to the gravy with the stick of cinnamon. Do not add too much of lemon skin, it will make the gravy sour. Close the lid of the pan and let the fish cook properly.",
      "Step 6": "After 10-12 minutes, add chopped coriander and let the gravy come to boil. Turn off the gas. Remove and serve hot."
    }
  }
},
"2": {
  "21": {
    "title": "Roasted Chicken",
    "id": "21",
    "url": "https://static.toiimg.com/thumb/53007558.cms?width=1200&height=900",
    "ingredients": "1 kilograms chicken, 1 teaspoon chilli flakes, 1/2 teaspoon powdered paprika, 1 teaspoon lime zest, 2 teaspoon canola oil/ rapeseed oil, 2 pinches powdered black pepper, 4 cloves crushed garlic, 1 teaspoon powdered oregano, 60 ml red wine vinegar powdered sea salt as required, 2 tablespoon chopped coriander leaves",
    "instructions": {
      "Step 1": "Roasted chicken recipe is a simple yet delicious chicken dish, which can be prepared in a few minutes at the comfort of your home. Here’s how you can prepare this delicious recipe. Wash the chicken pieces in running water and drain out the excess water.",
      "Step 2": "In the meantime, preheat the oven at 200 degree C.",
      "Step 3": "Then, take a small bowl and make the chicken marinade by using chilli, garlic, paprika, oregano, lemon zest, vinegar, oil, salt and pepper. Mix well to combine. You can add some spices and herbs as per your taste preference.",
      "Step 4": "Grease/ brush the baking tray with some oil. Then, place the chicken on the baking tray and pour over the chilli mixture and spread it all over to coat the chicken. Ensure the mixture is well coated. Now place the chicken in preheated oven and brush it well with some oil. Once the chicken is well coated, let it cook for 45 minutes or till done. Keep checking the chicken and if you find it to be too dry, brush it with some more oil.",
      "Step 5": "Remove from the oven, let it cool and garnish with chopped coriander leaves. You can also serve it with some creamy mashed potatoes, this will make it taste more delicious."
    }
  },
  "22": {
    "title": "Cashew Chicken",
    "id": "22",
    "url": "https://www.onceuponachef.com/images/2010/03/Cashew-Chicken-8.jpg",
    "ingredients": "400 gm chicken breasts, 200 gm tomato, 50 gm cashews, 3 tablespoon vegetable oil, 1 1/2 tablespoon lemon juice, 1 teaspoon sugar, 1 teaspoon garlic, 100 gm mushroom, 100 gm capsicum (green pepper), salt as required, 400 gm mango, 50 gm spring onions, 1 teaspoon black pepper, 3 tablespoon oyster sauce, 1 1/5 tablespoon fish sauce, 25 gm red chilli, 100 gm onion, 100 gm red bell pepper",
    "instructions": {
      "Step 1": "Firstly, wash chicken breasts under running water and place them over a chopping board. Now slice them. Then, dice red bell peppers, mangoes and capsicums and keep them aside. Also, chop garlic, tomatoes, cashews and spring onions.",
      "Step 2": "On the other hand, take a bowl and pour water in it. Put coral mushrooms and black mushrooms into the bowl and soak them until tender. Now cut them into small pieces and keep them aside.",
      "Step 3": "Next, place a frying pan over medium flame and pour oil in it. Once heated, add chopped garlic in the pan and stir until light brown in colour.",
      "Step 4": "Now, add onions, red bell peppers, capsicums and red chillies in the pan and saute the mixture.",
      "Step 5": "Then, add chicken slices into the pan and pour fish sauce, oyster sauce, lemon juice. Stir the mixture well. Now add sugar and stir again.",
      "Step 6": "Next, add spring onions, cashews, tomatoes, mangoes, black pepper, mushrooms into the pan and mix them all well. Sprinkle salt into the pan and cook the mixture for 15-20 minutes. Serve!"
    }
  }
}}

describe("Home tests", () => {
  it("renders the home component correctly", () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: jest.fn()
    }));
    window.scrollTo = jest.fn();
    const { container } = render(<Router><Home categories={categories} popularRecipes={popularRecipes} allRecipes={allRecipes}/></Router>);
    expect(container).toMatchSnapshot();
  });
});

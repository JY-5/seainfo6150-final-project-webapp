import React from "react";
import HomeRecommendation from './HomeRecommendation';
import { render } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

const recipes = [{
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
}, {
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
}]

describe("Add HomeRecommendation tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Router><HomeRecommendation popularRecipes={recipes} text="recommendation"/></Router>);
      expect(container).toMatchSnapshot();
    });
});
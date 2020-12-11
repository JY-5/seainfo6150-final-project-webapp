import React from "react";
import Recipe from './Recipe';
import { render } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

const recipe =  {
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
};

describe("Add Recipe tests", () => {
    it("renders correctly", () => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useLocation: jest.fn()
        }));
        const { container } = render(<Router><Recipe recipe={recipe}/></Router>);
        expect(container).toMatchSnapshot();
    });
});
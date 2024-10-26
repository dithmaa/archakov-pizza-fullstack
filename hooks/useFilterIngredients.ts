import { Ingredient } from "@prisma/client";
import React from "react";
import { Api } from "../services/api-client";

interface ReturnProps {
  ingredients: Ingredient[];
}
export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();

        setIngredients(ingredients);
      } catch (e) {
        console.log(e);
      }
    }

    fetchIngredients();
  }, []);
  return { ingredients };
};

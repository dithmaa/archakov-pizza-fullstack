import { Product } from "./../node_modules/.prisma/client/index.d";
import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";
export const search = async (query: string) => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    }
  );
  return data;
};

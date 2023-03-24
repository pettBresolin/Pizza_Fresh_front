import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Product, ProductResponse, ProductUpdate } from "types/api/product";

export const ProductService = {
  getLista: (): Promise<ProductResponse[]> =>
    Api({
      url: endpoint.listProducts(),
      config: {
        method: "GET",
      },
    }).then((response) => response.json()),

  create: (product: Product) =>
    Api({
      url: endpoint.createProduct(),
      config: {
        method: "POST",
        body: JSON.stringify(product),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api({
      url: endpoint.productById(id),
      config: {
        method: "GET",
      },
    }).then((response) => response.json()),

  updateById: ({ product, id }: ProductUpdate) =>
    Api({
      url: endpoint.productById(id),
      config: {
        method: "PATCH",
        body: JSON.stringify(product),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api({
      url: endpoint.productById(id),
      config: {
        method: "DELETE",
      },
    }).then((response) => response.json()),
};

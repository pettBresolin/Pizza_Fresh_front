import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Order } from "types/api/order";

export const OrderService = {
  create: (order: Order) => {
    const products = order.products.map(({ product, ...rest }) => ({
      ...rest,
      productId: product.id,
    }));

    return Api({
      url: endpoint.createOrder(),
      config: {
        method: "POST",
        body: JSON.stringify({ ...order, products }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json());
  },
};

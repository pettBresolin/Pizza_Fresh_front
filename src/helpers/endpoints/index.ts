import { auth } from "./auth";
import { order } from "./order";
import { product } from "./product";
import { table } from "./table";
import { user } from "./user";

export const endpoint = {
  baseUrl:
    "https://pizza-fresh-api.onrender.com",
    ...auth,
    ...user,
    ...order,
    ...table,
    ...product
};
//https://railway.app/project/e3eea6c5-8207-4465-b7c5-0a594481bd7b/service/b970df62-b24d-4156-8cd9-c552d8b92004
import { endpoint } from "helpers/endpoints";
import { Api } from "helpers/endpoints/Api";
import { User, UserUpdate } from "types/api/user";

export const UserService = {
  getLista: () =>
    Api({
      url: endpoint.listUsers(),
      config: {
        method: "GET",
      },
    }).then((response) => response.json),

  create: (user: User) =>
    Api({
      url: endpoint.createUser(),
      config: {
        method: "POST",
        body: JSON.stringify(user),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api({
      url: endpoint.userById(id),
      config: {
        method: "GET",
      },
    }).then((response) => response.json()),

  updateById: ({ user, id }: UserUpdate) =>
    Api({
      url: endpoint.userById(id),
      config: {
        method: "PATCH",
        body: JSON.stringify(user),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api({
      url: endpoint.userById(id),
      config: {
        method: "DELETE",
      },
    }).then((response) => response.json()),
};

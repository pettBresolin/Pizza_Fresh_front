import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { ErrorResponse } from "types/api/error";
import { Table, TableResponse } from "types/api/table";

export const TableService = {
  getLista: (): Promise<TableResponse[]> =>
    Api({
      url: endpoint.listTables(),
      config: {
        method: "GET",
      },
    }).then((response) => response.json()),

  create: (table: Table) =>
    Api({
      url: endpoint.createTable(),
      config: {
        method: "POST",
        body: JSON.stringify(table),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api({
      url: endpoint.tableById(id),
      config: {
        method: "GET",
      },
    }).then((response) => response.json()),

  updateById: (table: TableResponse): Promise<TableResponse & ErrorResponse> =>
    Api({
      url: endpoint.tableById(table.id),
      config: {
        method: "PATCH",
        body: JSON.stringify({ number: table.number }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api({
      url: endpoint.tableById(id),
      config: {
        method: "DELETE",
      },
    }).then((response) => response.json()),
};

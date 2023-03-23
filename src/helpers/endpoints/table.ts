import { endpoint } from "helpers/endpoints";

export const table = {
  createTable: () => `${endpoint.baseUrl}/table`,
  listtables: () => `${endpoint.baseUrl}/table`,
  tableById: (id: string) => `${endpoint.baseUrl}/table/${id}`,
};

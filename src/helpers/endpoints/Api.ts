import { LocalStorageKeys } from "types/localStorageKeys";
import { Auth } from "helpers/Auth";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";

type args = [input: RequestInfo, init?: Request | undefined];

function requestInterceptor(config: RequestInit | undefined) {
  if (config) {
    const token = {
      Authorization: `Bearer ${LocalStorageHelper.get(LocalStorageKeys.TOKEN)}`,
    };

    config.headers = { ...config.headers, ...token };
  }
}

function responseInterceptor(res: Response) {
  if (res.status === 401) Auth.logout();
}
export type ApiHelperPayload = {
  url: string;
  config: RequestInit | undefined;
};
export const Api = async ({
  url,
  config,
}: ApiHelperPayload): Promise<Response> => {
  requestInterceptor(config);
  const response = await fetch(url, config);
  responseInterceptor(response);
  return response;
};

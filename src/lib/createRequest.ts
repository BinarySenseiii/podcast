import axios from 'axios';

import type { CancelTokenSource, AxiosRequestConfig } from 'axios';

const client = axios.create({ baseURL: '/api' });

export const createRequest = <P = void, R = void>(
  prepare: (params: P) => AxiosRequestConfig<R>
) => {
  let source: CancelTokenSource | null = null;

  const request = async (params: P): Promise<R> => {
    source = axios.CancelToken.source();

    const response = await client({
      ...prepare(params),
      cancelToken: source.token,
    });

    return response.data.data;
  };

  request.cancel = () => {
    source?.cancel();
  };

  return request;
};

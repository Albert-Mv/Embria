import { useState } from 'react';

export type HttpHook<T> = [
  (request: RequestInfo, callback: HttpCallback<T>) => Promise<void>,
  {
    isLoading: boolean;
    data: T;
    error: HttpError | null;
  }
];

export type HttpCallback<T> = (data: T, error?: HttpError) => void;
export class HttpError {
  status: number;

  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

const useRequest = <T>(): HttpHook<T> => {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<HttpError | null>(null);

  async function fetchApi(
    request: RequestInfo,
    callback?: HttpCallback<T>,
  ): Promise<void> {
    setIsLoading(true);
    let errorTemp = null;
    let data: T = {} as T;
    try {
      const response: any = await fetch(request);
      if (response.data) {
        data = response.data;
      } else {
        data = response;
      }
    } catch (err) {
      errorTemp = err;
    } finally {
      setIsLoading(false);
      if (errorTemp) {
        if (callback) callback(data, errorTemp);
        setError(errorTemp);
      } else {
        setResponse(data);
        setError(null);
        if (callback) callback(data);
      }
    }
    setIsLoading(false);
  }

  return [fetchApi, { isLoading, data: response, error }];
};

export { useRequest as default };

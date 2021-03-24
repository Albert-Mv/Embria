import {useState} from 'react';

export default function <T>(
  request: HttpRequest<T>,
  callback?: HttpCallback<T>,
  config?: HttpConfig<T>
): HttpHook<T> {
    const [response, setResponse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<HttpError | null>(null);
    
    async function fetchApi(body?: any): Promise<void> {
    setIsLoading(true)
      let errorTemp = null
      let data: T = {} as T
      try {
        const response: any = await request(body);
        if(response.data) {
          data = response.data;
        } else {
          data = response;
        }
      } catch (err) {
        errorTemp = err
      } finally {
        // Set loading to false and verify the response status, if there's an error or whatever you need
        setIsLoading(false)
        if (errorTemp) {
          if(callback) callback(data, errorTemp)
          setError(errorTemp)
        } else {
          setResponse(data)
          setError(null)
          if(callback) callback(data)
        }
      }
    }
    
    return [fetchApi, {isLoading, data: response, error}];
}

type HttpHook<T> = [
  (body?: any) => Promise<void>,
  {
    isLoading: boolean;
    data: T;
    error: HttpError | null;
  }
];

export class HttpError {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

type HttpRequest<T> = (body?: any) => Promise<T>
type HttpCallback<T> = (data: T, error?: HttpError) => void
type HttpConfig<T> = {
    headers: any,
    timeout: number
  }
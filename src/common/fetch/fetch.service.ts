import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodeFetch from 'node-fetch';
import errorUtil from 'src/utils/error.util';
import { HttpMethod } from '../http/http.enum';
import { FetchError, FetchRequestOptions } from './fetch.interface';

@Injectable()
export class FetchService {
  constructor(private configService: ConfigService) {}

  dummyDataURL = this.configService.get<string>('dummyDataURL');
  headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  async fetchApi<T>(
    path: string,
    method: HttpMethod,
    options: FetchRequestOptions,
  ): Promise<T> {
    const fetchOptions: RequestInit = {
      method,
      headers: {
        ...this.headers,
      },
    };
    if (options.headers) {
      fetchOptions.headers = { ...fetchOptions.headers, ...options.headers };
    }
    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }
    const res = await nodeFetch(`${this.dummyDataURL}${path}`, fetchOptions);
    const json: T & FetchError = (await res.json()) as FetchError & T;
    return errorUtil.handleFetchError(json);
  }
  setHeader(key: string, value: string) {
    this.headers[key] = value;
  }
  async get<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
    return await this.fetchApi(path, HttpMethod.GET, options);
  }
  async post<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
    return await this.fetchApi(path, HttpMethod.POST, options);
  }
  async put<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
    return await this.fetchApi(path, HttpMethod.PUT, options);
  }
  async patch<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
    return await this.fetchApi(path, HttpMethod.PATCH, options);
  }
  async delete<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
    return await this.fetchApi(path, HttpMethod.DELETE, options);
  }
  auth = {
    async get<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
      return (await this.fetchApi(
        `/auth${path}`,
        HttpMethod.GET,
        options,
      )) as T;
    },
    async post<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
      return (await this.fetchApi(
        `/auth${path}`,
        HttpMethod.POST,
        options,
      )) as T;
    },
    async put<T>(path: string, options: FetchRequestOptions = {}): Promise<T> {
      return (await this.fetchApi(
        `/auth${path}`,
        HttpMethod.PUT,
        options,
      )) as T;
    },
    async patch<T>(
      path: string,
      options: FetchRequestOptions = {},
    ): Promise<T> {
      return (await this.fetchApi(
        `/auth${path}`,
        HttpMethod.PATCH,
        options,
      )) as T;
    },
    async delete<T>(
      path: string,
      options: FetchRequestOptions = {},
    ): Promise<T> {
      return (await this.fetchApi(
        `/auth${path}`,
        HttpMethod.DELETE,
        options,
      )) as T;
    },
  };
}

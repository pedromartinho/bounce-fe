import axios, { AxiosResponse, AxiosInstance } from 'axios';

/**
 * Possible HTTP request methods
 * @enum {string}
 */
export enum HttpRequestMethodEnum {
  GET = 'get',
  POST = 'post',
}

/**
 * A service class that handles all requests
 * @class ApiGatewayService
 */
export class ApiGatewayService {
  private client: AxiosInstance;
  private timeoutSeconds = 10;

  constructor() {
    this.client = axios.create();
  }

  /**
   * Perform a GET request
   * @param {string} url - Url to consider
   * @returns {Promise<AxiosResponse>} - Request response
   */
  // eslint-disable-next-line
  public async get(url: string): Promise<AxiosResponse> {
    return await this.request(url, HttpRequestMethodEnum.GET);
  }

  /**
   * Perform a POST request
   * @param {string} url - url to consider in request
   * @param {any} [data] - payload to consider in request
   * @returns {Promise<AxiosResponse<any>>} Request response
   */
  // eslint-disable-next-line
  public async post(url: string, data?: any): Promise<AxiosResponse> {
    return await this.request(url, HttpRequestMethodEnum.POST, data);
  }

  /**
   * Sends an HTTP request with the provided parameters
   * @param {string} url - The URL to send the request to
   * @param {HttpRequestMethodEnum} method - HTTP request method
   * @param {any} data - The data to send in the request body
   * @returns {Promise<AxiosResponse>} - Request response
   */
  // eslint-disable-next-line
  private async request(url: string, method: HttpRequestMethodEnum, data?: any): Promise<AxiosResponse> {
    return await this.client.request({ url, method, data, timeout: 1000 * this.timeoutSeconds });
  }
}

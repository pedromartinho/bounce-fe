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
   * @param {string} string - Parameters for the GET request
   * @returns {Promise<AxiosResponse>} - Request response
   */
  public async get(url: string, data: any): Promise<AxiosResponse> {
    return await this.request(url, HttpRequestMethodEnum.POST, data);
  }

  /**
   * Perform a POST request
   * @param {ApiGatewayDataEntry} params - Parameters for the POST request
   * @returns {Promise<AxiosResponse<any>>} - Request response
   */
  public async post(url: string, data: any): Promise<AxiosResponse> {
    return await this.request(url, HttpRequestMethodEnum.POST, data);
  }

  /**
   * Sends an HTTP request with the provided parameters
   * @param {string} url - The URL to send the request to
   * @param {HttpRequestMethodEnum} method - HTTP request method
   * @param {Object} data - The data to send in the request body
   * @returns {Promise<AxiosResponse>} - Request response
   */
  private async request(url: string, method: HttpRequestMethodEnum, data?: any): Promise<AxiosResponse> {
    return await this.client.request({ url, method, data, timeout: 1000 * this.timeoutSeconds });
  }
}

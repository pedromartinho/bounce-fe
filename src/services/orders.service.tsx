import { AxiosResponse } from 'axios';
import { env } from '../configs/env.config';
import { ApiGatewayService } from './apiGateway.service';

interface IOrder {
  amount: number,
  unitPrice: number,
  name: string,
  email: string,
  cardNumber: string,
}

/**
 * A service responsible for handling order requests
 * @class OrderService
 */
export class OrderService {
  private ordersEndpoint: string;
  private apiGateway: ApiGatewayService;

  constructor() {
    this.apiGateway = new ApiGatewayService;
    this.ordersEndpoint = `${env.app.apiHost}/orders`;
  }

  /**
   * Perform a GET request
   * @param {IOrder} order - order
   * @returns {Promise<AxiosResponse>} - Request response
   */
  public async create(orderPayload: IOrder): Promise<AxiosResponse> {
    return await this.apiGateway.post(this.ordersEndpoint, orderPayload);
  }
}

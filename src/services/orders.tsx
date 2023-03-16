import { env } from '../configs/env.config';
import { ApiGatewayService } from './apiGateway';

interface IOrder {
  numberOfBags: number,
  unitPrice: number,
  name: string,
  email: string,
  creditCardNumber: string,
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
   * Perform create order
   * @param {IOrder} order - order
   * @returns {Promise<string>} - order id
   */
  public async create(orderPayload: IOrder): Promise<string> {
    const {data} = await this.apiGateway.post(this.ordersEndpoint, orderPayload);

    return data.id;
  }
}

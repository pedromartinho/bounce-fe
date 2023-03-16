import { env } from '../configs/env.config';
import { ApiGatewayService } from './apiGateway';

interface IStore {
  name: string,
  unitPrice: number,
}
/**
 * Service responsible for handling store requests
 * @class StoreService
 */
export class StoreService {
  private storesEndpoint: string;
  private apiGateway: ApiGatewayService;

  constructor() {
    this.apiGateway = new ApiGatewayService;
    this.storesEndpoint = `${env.app.apiHost}/stores`;
  }

  /**
   * Get store based on id
   * @param {number} storeId - store id
   * @returns {Promise<AxiosResponse>} - Request response
   */
  public async getStore(storeId: number): Promise<IStore> {
    const storeUrl = `${this.storesEndpoint}/${storeId}`;
    const {data} = await this.apiGateway.get(storeUrl);
    return {name: data.name, unitPrice: data.unitPrice};
  }
}

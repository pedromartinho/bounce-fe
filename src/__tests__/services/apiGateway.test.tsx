import { ApiGatewayService } from './../../services/apiGateway';
import axios from 'axios';

xdescribe('ApiGatewayService', () => {
  let apiGatewayService: ApiGatewayService;

  beforeEach(() => {
    apiGatewayService = new ApiGatewayService();
  });

  describe('get', () => {
    it('should call axios.get with the provided URL and return a response', async () => {
      const mockResponse = { data: { message: 'Success' } };
      const url = 'https://example.com';
      const getSpy = jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

      const result = await apiGatewayService.get(url);

      expect(getSpy).toHaveBeenCalledTimes(1);
      expect(getSpy).toHaveBeenCalledWith(url, expect.any(Object));
      expect(result).toEqual(mockResponse);
    });
  });

  describe('post', () => {
    xit('should call axios.post with the provided URL and data and return a response', async () => {
      const mockResponse = { data: { message: 'Success' } };
      const url = 'https://example.com';
      const data = { name: 'John' };
      const postSpy = jest.spyOn(axios, 'post').mockResolvedValue(mockResponse);

      const result = await apiGatewayService.post(url, data);

      expect(postSpy).toHaveBeenCalledWith(url, data, expect.any(Object));
      expect(result).toEqual(mockResponse);
    });
  });
});
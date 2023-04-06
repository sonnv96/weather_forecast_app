import { ParamsSearchCity, ParamsWeather } from '../models';
import axiosClient from './axiosClient';

const weatherForecastService = {
  async getListCityBySearchText(params: ParamsSearchCity): Promise<any> {
    const url = `https://geocoding-api.open-meteo.com/v1/search`;
    let response: any;
    response = await axiosClient.get(url, {params: params});
    return response;
  },
  async getListWeather(params: ParamsWeather): Promise<any> {
    const url = `https://api.open-meteo.com/v1//forecast?daily=apparent_temperature_max&daily=apparent_temperature_min&daily=weathercode`;
    let response: any;
    response = await axiosClient.get(url, {params: params});
    return response;
  }
};

export default weatherForecastService;

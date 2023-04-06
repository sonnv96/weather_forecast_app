import dayjs from 'dayjs';
import React, { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import { useDebounce } from '../../hooks';
import { ParamsSearchCity, ParamsWeather } from '../../models';
import weatherForecastService from '../../services/WeatherForecastService';
import ErrorPage from '../components/ErrorPage';
import LoadingPage from '../components/LoadingPage';
import CurrentWeather from './components/CurrentWeather';
import FutureWeather from './components/FutureWeather';

const HomePage: React.FC<any> = () => {
  const [searchCity, setSearchCity] = useState<string>('');
  const [citySelected, setCitySelected] = useState<string>('');
  const [addressSelected, setAddressSelected] = useState<any[]>([]);
  const [temperatureSelected, setTemperatureSelected] = useState<'celsius' | 'fahrenheit'>('celsius');
  const [options, setOptions] = useState<any[]>([]);
  const [weather, setWeather] = useState<any>();
  const [showError, setShowError] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    //  getCityByName()s
    setCitySelected('Ho Chi Minh City')
    getWeather('10.875', '106.625');
    setAddressSelected(['1566083', '10.875', '106.625', 'Ho Chi Minh City'])
  }, [])

  useEffect(() => {
    getWeather(addressSelected[1], addressSelected[2], temperatureSelected);
  }, [temperatureSelected])

  const handleSearchChange = async (option: any) => {
    let inputValues: any[] = [];
    if (option?.value.includes('_')) inputValues = option.value.split('_');
    getWeather(inputValues[1], inputValues[2])
    setAddressSelected(inputValues);
    setCitySelected(inputValues[3])
  };

  useDebounce(() => {
    getCityByName(
      searchCity
    );
  }, [searchCity], 1000
  );

  const getCityByName = async (value: string) => {
    let params: ParamsSearchCity = {
      name: value,
      language: 'en',
      count: 10,
      format: 'json'
    }
    const response = await weatherForecastService.getListCityBySearchText(params);
    if (response && response.results) {
      setOptions(response.results.map((data: any) => ({ value: data.id + '_' + data.latitude + '_' + data.longitude + '_' + data.name, label: data.name })))
    }
  }

  const getWeather = async (latitude: string, longitude: string, temperature_unit: 'celsius' | 'fahrenheit' = 'celsius') => {
    let params: ParamsWeather = {
      latitude: latitude,
      longitude: longitude,
      timezone: 'GMT',
      current_weather: true,
      forecast_days: 6,
      hourly: 'apparent_temperature',
      temperature_unit: temperature_unit
    }
    if (params.latitude && params.longitude) {
      setShowLoading(true);
      const response = await weatherForecastService.getListWeather(params);
      if (response && response !== 'ERROR') {
        setWeather(response);
      } else {
        setShowError(true);
      }
      setShowLoading(false);
    }
  }

  const changeTemperature = (temperature: 'celsius' | 'fahrenheit') => {
    if (temperature === 'celsius') setTemperatureSelected('fahrenheit')
    else setTemperatureSelected('celsius')
  }

  return (
    <Fragment>
      {!showError && !showLoading && (<div className="relative min-[320px]:h-full min-[768px]:h-screen bg-[url('./assets/images/background.jpg')] p-5">
        <span className="text-[50px]">weather forecast</span>
        <Select
          className='w-1/2 m-auto mb-5'
          options={options}
          defaultValue={{ label: "Ho Chi Minh City", value: 0 }}
          onChange={handleSearchChange}
          onInputChange={(text: string) => setSearchCity(text)} />

        <i onClick={() => changeTemperature('fahrenheit')}
          className={'wi wi-celsius cursor-pointer mr-2'
            + (temperatureSelected === 'celsius' ? ' text-[25px]' : '')}></i>

        <i onClick={() => changeTemperature('celsius')}
          className={'wi wi-fahrenheit cursor-pointer'
            + (temperatureSelected === 'fahrenheit' ? ' text-[25px]' : '')}></i>
        <div className="grid w-[95%] m-auto justify-center items-center">
          <CurrentWeather citySelected={citySelected} weather={weather} />
          <div className="min-[320px]:grid mt-5 min-[768px]:flex justify-center items-center w-full">
            {weather?.daily?.time.map((time: string, index: number) => {
              return time != dayjs(new Date()).format('YYYY-MM-DD') ?
                <FutureWeather key={time} time={time} index={index} weather={weather} />
                : null
            })}
          </div>

        </div>
      </div>)}
      {showError && <ErrorPage />}
      {showLoading && <LoadingPage />}
    </Fragment>
  );
};

export default HomePage;

import React, { Fragment } from 'react';
import { getDataWeather, getTemperature } from '../../../common';

interface CurrentWeatherProps {
    citySelected: string;
    weather: any;
}
const CurrentWeather: React.FC<any> = (props: CurrentWeatherProps) => {
    const { citySelected, weather } = props;
    return (
        <Fragment>
            <div className="grid border-w-1 h-[200px] border-2 w-full p-1">
                <span className="text-[27px]">{citySelected} </span>
                <i className={getDataWeather(weather?.current_weather?.weathercode)?.iconText + ' text-[40px]'}></i>
                <span className="text-[30px]">{getTemperature(weather?.current_weather?.temperature, weather?.hourly_units?.apparent_temperature)}</span>
                <span className="text-[15px]">{getDataWeather(weather?.current_weather?.weathercode)?.text} </span>
            </div>
        </Fragment>
    );
};

export default CurrentWeather;

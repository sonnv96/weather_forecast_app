import React, { Fragment } from 'react';
import { getDataWeather, getTemperature } from '../../../common';

interface FutureWeatherProps {
    time: string;
    index: number;
    weather: any;
}
const FutureWeather: React.FC<any> = (props: FutureWeatherProps) => {
    const { time, index, weather } = props;
    return (
        <Fragment>
            <div className="grid border-w-1 h-[200px] border-2 min-[320px]:w-full min-[768px]:w-1/5 min-[768px]:mr-1 last:mr-0 mt-5 p-1">
                <div className="">{time}</div>
                <i className={getDataWeather(weather?.daily?.weathercode[index])?.iconText + ' text-[25px]'}></i>
                <div className="">{
                    getTemperature(weather?.daily?.apparent_temperature_min[index], weather?.hourly_units?.apparent_temperature) +
                    ' - ' +
                    getTemperature(weather?.daily?.apparent_temperature_max[index], weather?.hourly_units?.apparent_temperature)}
                 </div>
                <span className="text-[15px]">{getDataWeather(weather?.daily?.weathercode[index])?.text} </span>
            </div>
        </Fragment>
    );
};

export default FutureWeather;

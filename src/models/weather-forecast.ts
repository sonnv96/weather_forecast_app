export interface ParamsSearchCity {
    name?: string;
    language?: string;
    count?: number;
    format?: string;
}
export interface ParamsWeather {
    latitude?: string;
    longitude?: string;
    daily?: string;
    timezone?: string;
    current_weather?: boolean;
    temperature_unit?: 'fahrenheit' | 'celsius';
    hourly?: string;
    forecast_days?: number
}

export const WMOWeather = [
    { value: ['0'], text: 'Clear sky', iconText: 'wi wi-cloud' },
    { value: ['1', '2', '3'], text: 'Mainly clear, partly cloudy, and overcast', iconText: 'wi wi-day-cloudy' },
    { value: ['45', '48'], text: 'Fog and depositing rime fog', iconText: 'wi wi-fog' },
    { value: ['51', '53', '55'], text: 'Drizzle: Light, moderate, and dense intensity', iconText: 'wi wi-showers' },
    { value: ['56', '57'], text: 'Freezing Drizzle: Light and dense intensity', iconText: 'wi wi-snow' },
    { value: ['61', '63', '65'], text: 'Rain: Slight, moderate and heavy intensity', iconText: 'wi wi-hail' },
    { value: ['66', '67'], text: 'Freezing Rain: Light and heavy intensity', iconText: 'wi wi-rain' },
    { value: ['71', '73', '75'], text: 'Snow fall: Slight, moderate, and heavy intensity', iconText: 'wi wi-snow-wind' },
    { value: ['77'], text: 'Snow grains', iconText: 'wi wi-snow' },
    { value: ['80', '81', '82'], text: 'Rain showers: Slight, moderate, and violent', iconText: 'wi wi-rain' },
    { value: ['85', '86'], text: 'Snow showers slight and heavy', iconText: 'wi wi-smog' },
    { value: ['95 *'], text: 'Thunderstorm: Slight or moderate', iconText: 'wi wi-storm-showers' },
    { value: ['96 ,99*'], text: 'Thunderstorm with slight and heavy hail', iconText: 'wi wi-thunderstorm' }
]


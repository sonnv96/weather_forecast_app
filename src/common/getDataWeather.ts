import { WMOWeather } from "../models"

export const getDataWeather = (code: string) => {
    return WMOWeather.find((wea: any) => wea.value.some((valWeather: string) => valWeather == code))
}
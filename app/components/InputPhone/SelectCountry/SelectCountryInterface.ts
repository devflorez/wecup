import { CountryType } from "@app/types/countryType";

export interface SelectCountryPropInterface {
    country: CountryType,
    onChangeCountry: (value: CountryType)=>void
    onChangePhoneNumber: (value:string, name:string)=>void
}
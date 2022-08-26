import { CountryType } from "./../../types/countryType";
export interface InputPhonePropsInterface {
  code: string;
  phone: string;
  onChangePhoneNumber: (values: string, name: string) => void;
  onChangeCountry: (country: CountryType) => void;
  country: CountryType;
}

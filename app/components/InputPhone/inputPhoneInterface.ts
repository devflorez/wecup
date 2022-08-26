import { CountryType } from "./../../types/countryType";
export interface InputPhonePropsInterface {
  code: string;
  phone: string;
  onChangeCode: (values: string, name:string) => void;
  onChangeNumber: (values: string, name:string) => void;
  country: CountryType;
}

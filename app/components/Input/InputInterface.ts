export interface InputPropsInterface {
  children?: JSX.Element;
  style?: object;
  onChange: (values: string) => void;
  placeholder?: string;
  value: string;
  isPassword?: boolean;
  defaultValue?: string;
}

export interface ButtonPropsInterface {
  onPress: () => void;
  styleContainer?: object;
  children?: JSX.Element;
  backgroundColor?: string;
  textColor?: string;
  styleText?: object;
  text: string;
  disabled?: boolean;
}

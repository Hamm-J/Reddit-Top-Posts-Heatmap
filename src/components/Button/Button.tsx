import { ButtonField } from "./Button.styled";

interface Props {
  label: string;
}

const Button = ({ label }: Props): any => {
  return <ButtonField>{label}</ButtonField>;
};

export default Button;

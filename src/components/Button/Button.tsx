import { ButtonField } from "./Button.styled";

interface Props {
  label: string;
  onClick: () => any;
}

const Button = ({ label, onClick }: Props): any => {
  return <ButtonField onClick={onClick}>{label}</ButtonField>;
};

export default Button;

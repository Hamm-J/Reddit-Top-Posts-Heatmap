import { ButtonField, IButtonField } from "./Button.styled";
interface Props {
  label: string;
  onClick?: () => any;
  innerRef?: React.RefObject<HTMLButtonElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
  remFontSize?: IButtonField["remFontSize"];
  backgroundColor?: IButtonField["backgroundColor"];
  fontColor?: IButtonField["fontColor"];
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  label,
  onClick,
  innerRef,
  remFontSize = 1,
  backgroundColor = "black",
  fontColor = "white",
  onKeyUp,
  type = undefined,
}: Props): any => {
  return (
    <ButtonField
      type={type}
      onClick={onClick}
      ref={innerRef}
      remFontSize={remFontSize}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      onKeyUp={onKeyUp}
    >
      {label}
    </ButtonField>
  );
};

export default Button;

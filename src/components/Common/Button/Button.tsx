import { ButtonField, IButtonField } from "./Button.styled";
interface Props {
  label: string;
  onClick: () => any;
  innerRef?: React.RefObject<HTMLButtonElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
  remFontSize?: IButtonField["remFontSize"];
  backgroundColor?: IButtonField["backgroundColor"];
  fontColor?: IButtonField["fontColor"];
}

const Button = ({
  label,
  onClick,
  innerRef,
  remFontSize = 1,
  backgroundColor = "black",
  fontColor = "white",
  onKeyUp,
}: Props): any => {
  return (
    <ButtonField
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

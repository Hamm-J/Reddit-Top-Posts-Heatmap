import { ButtonField, IButtonField } from "./Button.styled";
interface Props {
  label: string;
  onClick?: () => any;
  innerRef?: React.RefObject<HTMLButtonElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
  remFontSize?: IButtonField["remFontSize"];
  backgroundColor?: IButtonField["backgroundColor"];
  borderColor?: IButtonField["borderColor"];
  borderColorHover?: IButtonField["borderColorHover"];
  borderColorActive?: IButtonField["borderColorActive"];
  fontColor?: IButtonField["fontColor"];
  type?: "button" | "submit" | "reset" | undefined;
  minWidth?: IButtonField["minWidth"];
}

const Button = ({
  label,
  onClick,
  innerRef,
  remFontSize = 1,
  backgroundColor = "black",
  borderColor = "black",
  borderColorHover = "black",
  borderColorActive = "black",
  fontColor = "white",
  onKeyUp,
  type = undefined,
  minWidth,
}: Props): any => {
  return (
    <ButtonField
      type={type}
      onClick={onClick}
      ref={innerRef}
      remFontSize={remFontSize}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderColorHover={borderColorHover}
      borderColorActive={borderColorActive}
      fontColor={fontColor}
      onKeyUp={onKeyUp}
      minWidth={minWidth}
    >
      {label}
    </ButtonField>
  );
};

export default Button;

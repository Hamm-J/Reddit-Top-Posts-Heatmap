import { ButtonField, IButtonField } from "./Button.styled";
interface Props {
  label: string | JSX.Element;
  onClick?: () => any;
  loading?: boolean;
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
  minHeight?: IButtonField["minWidth"];
}

const Button = ({
  label,
  onClick,
  loading = false,
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
  minHeight,
}: Props): any => {
  return (
    <ButtonField
      type={type}
      onClick={onClick}
      loading={loading}
      ref={innerRef}
      remFontSize={remFontSize}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderColorHover={borderColorHover}
      borderColorActive={borderColorActive}
      fontColor={fontColor}
      onKeyUp={onKeyUp}
      minWidth={minWidth}
      minHeight={minHeight}
    >
      {label}
    </ButtonField>
  );
};

export default Button;

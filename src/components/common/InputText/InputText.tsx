import {
  InputFieldText,
  InputFieldPassword,
  IInputField,
} from "./InputText.styled";

interface Props {
  type: "text" | "password";
  placeholder: string;
  // TODO: confirm that I need () => void here
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  onKeyPress?:
    | React.KeyboardEventHandler<HTMLInputElement>
    | (() => void)
    | undefined;
  innerRef?: React.RefObject<HTMLInputElement>;
  remFontSize?: IInputField["remFontSize"];
  borderThickness?: IInputField["borderThickness"];
  value?: string;
  required?: boolean | undefined;
}

const InputText = ({
  type = "text",
  placeholder,
  onChange,
  onKeyPress,
  innerRef,
  remFontSize = 1,
  borderThickness = "thin",
  value,
  required,
}: Props): any => {
  return (
    <>
      {type === "text" ? (
        <InputFieldText
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
          ref={innerRef}
          remFontSize={remFontSize}
          borderThickness={borderThickness}
          value={value}
        />
      ) : (
        <InputFieldPassword
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
          ref={innerRef}
          remFontSize={remFontSize}
          borderThickness={borderThickness}
          value={value}
        />
      )}
    </>
  );
};

export default InputText;

import { InputField, IInputField } from "./InputEmail.styled";

interface Props {
  placeholder: string;
  // TODO: confirm that I need () => void here
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  innerRef?: React.RefObject<HTMLInputElement>;
  remFontSize?: IInputField["remFontSize"];
  borderThickness?: IInputField["borderThickness"];
  value?: string;
  required?: boolean | undefined;
}

const InputText = ({
  placeholder,
  onChange,
  innerRef,
  remFontSize = 1,
  borderThickness = "thin",
  value,
  required,
}: Props): any => {
  return (
    <>
      <InputField
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        ref={innerRef}
        remFontSize={remFontSize}
        borderThickness={borderThickness}
        value={value}
      />
    </>
  );
};

export default InputText;

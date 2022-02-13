import { InputField, IInputField } from "./InputText.styled";

interface Props {
  placeholder: string;
  // TODO: confirm that I need () => void here
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  innerRef?: React.RefObject<HTMLInputElement>;
  remFontSize?: IInputField["remFontSize"];
  borderThickness?: IInputField["borderThickness"];
  value?: string;
}

const InputText = ({
  placeholder,
  onChange,
  innerRef,
  remFontSize = 1,
  borderThickness = "thin",
  value,
}: Props): any => {
  return (
    <>
      <InputField
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

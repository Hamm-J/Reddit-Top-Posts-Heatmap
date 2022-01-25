import { InputField, IInputField } from "./InputText.styled";

interface Props {
  placeholder: string;
  onChange: () => void;
  innerRef?: any;
  remFontSize?: IInputField["remFontSize"];
  borderThickness?: IInputField["borderThickness"];
}

const InputText = ({
  placeholder,
  onChange,
  innerRef,
  remFontSize = 1,
  borderThickness = "thin",
}: Props): any => {
  return (
    <>
      <InputField
        placeholder={placeholder}
        onChange={onChange}
        ref={innerRef}
        remFontSize={remFontSize}
        borderThickness={borderThickness}
      />
    </>
  );
};

export default InputText;

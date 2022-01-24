import { InputField } from "./InputText.styled";

interface Props {
  placeholder: string;
  onChange: () => void;
  innerRef: any;
}

const InputText = ({ placeholder, onChange, innerRef }: Props): any => {
  return (
    <>
      <InputField
        placeholder={placeholder}
        onChange={onChange}
        ref={innerRef}
      />
    </>
  );
};

export default InputText;

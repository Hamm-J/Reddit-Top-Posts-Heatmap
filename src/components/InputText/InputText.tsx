import { InputField } from "./InputText.styled";

interface Props {
  placeholder: string;
  onChange: () => void;
}

const InputText = ({ placeholder, onChange }: Props): any => {
  return (
    <>
      <InputField placeholder={placeholder} onChange={onChange}/>
    </>
  );
};

export default InputText;

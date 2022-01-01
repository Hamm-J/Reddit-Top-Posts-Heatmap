import { InputField } from "./InputText.styled";

interface Props {
  placeholder: string;
}

const InputText = ({ placeholder }: Props): any => {
  return (
    <>
      <InputField placeholder={placeholder} />
    </>
  );
};

export default InputText;

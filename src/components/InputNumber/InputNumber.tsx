import { InputField } from "./InputNumber.styled";

interface Props {
  limit: number;
  placeholder: string;
}

const InputNumber = ({ limit, placeholder }: Props): any => {
  return (
    <>
      <InputField placeholder={placeholder} />
    </>
  );
};

export default InputNumber;

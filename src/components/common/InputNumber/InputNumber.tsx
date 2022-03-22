import { InputField } from "./InputNumber.styled";

interface Props {
  limit: number;
  onChange: () => any;
  placeholder: string;
}

const InputNumber = ({ limit, onChange, placeholder }: Props): any => {
  return (
    <>
      <InputField placeholder={placeholder} onChange={onChange}/>
    </>
  );
};

export default InputNumber;

import { RadioField, Label } from "./Radio.styled";

interface Props {
  label: string;
  radioGroup: string;
}

const Radio = ({ label, radioGroup }: Props): any => {
  return (
    <>
      <Label>
        {label}
        <RadioField name={radioGroup} />
      </Label>
    </>
  );
};

export default Radio;

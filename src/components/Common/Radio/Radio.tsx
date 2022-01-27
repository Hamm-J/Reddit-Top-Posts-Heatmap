import { RadioField, Label } from "./Radio.styled";

interface Props {
  label: string;
  radioGroup: string;
  onChange: () => any;
}

const Radio = ({ label, radioGroup, onChange }: Props): any => {
  return (
    <>
      <Label>
        {/* Pass "label" as lower case "value" for query */}
        <RadioField
          name={radioGroup}
          value={label.toLocaleLowerCase()}
          onChange={onChange}
        />
        {label}
      </Label>
    </>
  );
};

export default Radio;

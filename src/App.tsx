import Fetcher from "./api/Fetcher/Fetcher";
import InputText from "./components/InputText/InputText";
import Button from "./components/Button/Button";
import Radio from "./components/Radio/Radio";
import InputNumber from "./components/InputNumber/InputNumber";

function App() {
  return (
    <div>
      <InputText placeholder="search..." />
      <Radio label="Hour" radioGroup="time" />
      <Radio label="Day" radioGroup="time" />
      <Radio label="Week" radioGroup="time" />
      <Radio label="Month" radioGroup="time" />
      <Radio label="Year" radioGroup="time" />
      <Radio label="All" radioGroup="time" />
      <InputNumber limit={100} placeholder="Set post limit (1-100)" />
      <Button label="Search"></Button>
      {/* TODO: Fetcher turned off while creating basic UI */}
      {/* <Fetcher></Fetcher> */}
    </div>
  );
}

export default App;

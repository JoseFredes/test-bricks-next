import CounterComponent from "./CounterComponent";
import ToggleComponent from "./ToggleComponent";
import { BaseProps } from "../types/BaseProps";

const componentMap: Record<string, React.FC<BaseProps>> = {
  CounterComponent,
  ToggleComponent,
};

export default componentMap;

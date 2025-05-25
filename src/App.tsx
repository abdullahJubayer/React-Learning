import "./App.css";
import { Body } from "./Body";
import { Provider } from "react-redux";
import ReduxStorage from "./ReduxStorage";

export function App() {
  return (
    <Provider store={ReduxStorage}>
      <Body />
    </Provider>
  );
}

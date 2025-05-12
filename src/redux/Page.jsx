import { Provider } from "react-redux";
import Count from "./Count";
import Double from "./Double";
import Inc from "./Inc";
import { store } from "./store";

export const Page = () => {
  return (
    <div className="main-border">
      <Provider store={store}>
        Page Component <br />
        <Count />
        <Double />
        <Inc />
      </Provider>
    </div>
  );
};

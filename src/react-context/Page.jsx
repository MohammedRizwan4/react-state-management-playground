import Count from "./Count";
import Double from "./Double";
import Inc from "./Inc";
import CountProvider from "./CountProvider";

export const Page = () => {
  return (
    <div className="main-border">
      <CountProvider>
        Page Component <br />
        <Count />
        <Double />
        <Inc />
      </CountProvider>
    </div>
  );
};

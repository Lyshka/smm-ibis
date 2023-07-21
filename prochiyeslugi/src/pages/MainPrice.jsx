import { About, Edges, Mail, Works } from "../components";
import { Price } from "../components/Price";

const MainPrice = () => {
  return (
    <div className="px-10 flex flex-col gap-y-24">
      <About />
      <Edges />
      <Works />
      <Price />
    </div>
  );
};
export default MainPrice;

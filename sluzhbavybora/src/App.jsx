import { Toaster } from "react-hot-toast";
import {
  AboutMobile,
  Address,
  AddressMobile,
  EdgesMobile,
  Footer,
  FooterMobile,
  Header,
  HeaderMobile,
  Mail,
  MailMobile,
  TitleMobile,
  WorkMobile,
} from "./components";
import { PriceMobile } from "./components/Mobile/PriceMobile";
import { Navbar } from "./components/Navbar";
import { MainPrice } from "./pages";

const App = () => {
  return (
    <>
      <div className="md:block hidden">
        <div className="flex w-full justify-center items-center">
          <Header />
        </div>
        <div className="flex flex-col justify-start items-center container-[1300px]">
          <div className="flex w-full max-w-[1300px]">
            <Navbar />

            <MainPrice />
          </div>
        </div>

        <Mail />
        <Address />
        <Footer />
        <Toaster />
      </div>

      <div className="md:hidden block">
        <HeaderMobile />
        <TitleMobile />
        <AboutMobile />
        <EdgesMobile />
        <WorkMobile />
        <PriceMobile />
        <MailMobile />
        <AddressMobile />
        <FooterMobile />
      </div>
    </>
  );
};
export default App;

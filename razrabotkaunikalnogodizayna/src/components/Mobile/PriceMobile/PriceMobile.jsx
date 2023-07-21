import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Разработка полного брендбука",
  ];

  const services2 = [
    "Разработка короткой версии брендбука",
  ];

  const services3 = [
    "Разработка дизайна бизнес каталогов",
  ];

  const services4 = [
    "Разработка дизайна меню",
  ];

  const services5 = [
    "Разработка дизайна лого",
  ];

  const services6 = [
    "Разработка дизайна флаеров, визиток",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={1800} priceRub={70000} services={services} />
        <PriceBlockMobile priceByn={500} priceRub={15000} services={services2} />
        <PriceBlockMobile priceByn={450} priceRub={17000} services={services3} />
        <PriceBlockMobile priceByn={250} priceRub={10000} services={services4} />
        <PriceBlockMobile priceByn={150} priceRub={5500} services={services5} />
        <PriceBlockMobile priceByn={50} priceRub={2000} services={services6} />
      </div>
    </div>
  );
};
export default PriceMobile;

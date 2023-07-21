import PriceBlock from "./PriceBlock";

const Price = () => {
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
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={1800} priceRub={70000} services={services} />
        <PriceBlock priceByn={500} priceRub={15000} services={services2} />
        <PriceBlock priceByn={450} priceRub={17000} services={services3} />
        <PriceBlock priceByn={250} priceRub={10000} services={services4} />
        <PriceBlock priceByn={150} priceRub={5500} services={services5} />
        <PriceBlock priceByn={50} priceRub={2000} services={services6} />
      </div>
    </div>
  );
};
export default Price;

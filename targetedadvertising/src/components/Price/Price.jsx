import PriceBlock from "./PriceBlock";

const Price = () => {
  const services = [
    "Настройка таргетированной рекламы в социальных сетях до 5 компаний с максимальным количеством объявлений 30",
    "1-й месяц регистрация рекламного аккаунта, создание объявлений",
    "Определение стратегии рекламы- 250,00 р.",
    "Последующие месяца сопровождение и корректировка компании- 100,00 р. до 10 товаров/услуги",
    "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
  ];

  return (
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={250} priceRub={7000} services={services} />
      </div>
    </div>
  );
};
export default Price;

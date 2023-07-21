import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Настройка контекстной рекламы для сайтов в поисковой системе Яндекс либо Гугл",
    "1-й месяц сбор семантического ядра",
    "Регистрация рекламного аккаунта",
    "Создание объявлений, определение стратегии рекламы- 250,00 р.",
    "Последующие месяца сопровождение и корректировка компании- 150,00 р. до 10 товаров/услуги",
    "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-center py-2 items-center overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={250} priceRub={7000} services={services} />
      </div>
    </div>
  );
};
export default PriceMobile;

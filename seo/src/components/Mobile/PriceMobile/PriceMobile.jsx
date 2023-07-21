import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Разработка семантического ядра под не более 15 товаров /услуг в месяц",
    "Полный цикл работ от семантического ядра до публикаций",
    "Оптимизация под Яндекс и Google",
    "Написание и оптимизация Title,Description, Н1-Н4, ALT до 60 страниц и картинок в месяц",
    "Поиск и удаление битых ссылок",
    "Написание до 3 статей в месяц",
    "Контроль позиций",
    "Размещение не менее 5 бесплатных ссылок в мес.",
    "Покупка платных ссылок по согласованию с Заказчиком.",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-center py-2 items-center overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={450} priceRub={15000} services={services}/>
      </div>
    </div>
  );
};
export default PriceMobile;

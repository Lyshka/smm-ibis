import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = ["Заполнение карточки компаний Яндекс либо Google"];

  const services2 = [
    "Ответы на отзывы в карточках компании Яндекс либо Google",
  ];

  const services3 = ["Настройка рассылок email (spam) до 5 писем"];

  const services4 = ["Написание и редакция автоответов в директ"];

  const services5 = [
    "Написание уникальных текстов под релевантные запросы пользователей",
  ];

  const services6 = [
    "Подбор блогеров для рекламы и проведение переговоров, написание ТЗ на рекламу до 3 блогеров",
  ];

  const services7 = [
    "Разработка презентаций о предприятии, товаре, услуге в Power point, Google presentation",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile
          desc={"За одну сеть"}
          priceByn={60}
          priceRub={2500}
          services={services}
        />
        <PriceBlockMobile
          desc={"За одну сеть"}
          priceByn={100}
          priceRub={4000}
          services={services2}
        />
        <PriceBlockMobile
          priceByn={300}
          priceRub={12000}
          services={services3}
        />
        <PriceBlockMobile
          priceByn={100}
          priceRub={4000}
          services={services4}
        />
        <PriceBlockMobile
          desc={"За 3000 знаков бес пробелов"}
          priceByn={50}
          priceRub={2500}
          services={services5}
        />
        <PriceBlockMobile
          priceByn={100}
          priceRub={4000}
          services={services6}
        />
        <PriceBlockMobile
          priceByn={300}
          priceRub={12000}
          services={services7}
        />
      </div>
    </div>
  );
};
export default PriceMobile;

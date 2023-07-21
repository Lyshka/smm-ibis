import PriceBlock from "./PriceBlock";

const Price = () => {
  const services = [
    "Заполнение карточки компаний Яндекс либо Google",
  ];

  const services2 = [
    "Ответы на отзывы в карточках компании Яндекс либо Google",
  ];

  const services3 = [
    "Настройка рассылок email (spam) до 5 писем",
  ];

  const services4 = [
    "Написание и редакция автоответов в директ",
  ];

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
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock
          desc={"За одну сеть"}
          priceByn={60}
          priceRub={2500}
          services={services}
        />
        <PriceBlock
          desc={"За одну сеть"}
          priceByn={100}
          priceRub={4000}
          services={services2}
        />
        <PriceBlock
          priceByn={300}
          priceRub={12000}
          services={services3}
        />
        <PriceBlock
          priceByn={100}
          priceRub={4000}
          services={services4}
        />
        <PriceBlock
          desc={"За 3000 знаков бес пробелов"}
          priceByn={50}
          priceRub={2500}
          services={services5}
        />
        <PriceBlock
          priceByn={100}
          priceRub={4000}
          services={services6}
        />
        <PriceBlock
          priceByn={300}
          priceRub={12000}
          services={services7}
        />
      </div>
    </div>
  );
};
export default Price;

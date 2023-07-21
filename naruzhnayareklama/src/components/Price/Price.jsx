import PriceBlock from "./PriceBlock";

const Price = () => {
  const services = [
    "Размещение рекламы на радио",
  ];

  const services2 = [
    "Размещение рекламы на билбордах по Беларуси/Могилеву",
    "Дополнительно оплачивается монтаж",
  ];

  const services3 = [
    "Размещение рекламы на автобусе (полное брендированные) по Беларуси/Могилеву",
    "Минимальный срок размещения 12 мес.",
    "Дополнительно оплачивается монтаж/демонтаж",
  ];

  const services4 = [
    "Размещение рекламы на заднем борту автобусов по Беларуси/Могилеву",
    "Минимальный срок размещения 6 мес.",
    "Дополнительно оплачивается монтаж",
  ];

  const services5 = [
    "Размещение рекламы на баннерах в автобусе по Беларуси/Могилеву.",
    "Минимальный срок размещения 1 мес.",
    "Дополнительно оплачивается монтаж",
  ];

  const services6 = [
    "Разноска печатной рекламы по почтовым ящикам",
  ];

  return (
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={500} services={services} />
        <PriceBlock priceByn={400} services={services2} />
        <PriceBlock priceByn={400} services={services3} />
        <PriceBlock priceByn={360} services={services4} />
        <PriceBlock priceByn={80} services={services5} />
        <PriceBlock priceByn={80} services={services6} />
      </div>
    </div>
  );
};
export default Price;

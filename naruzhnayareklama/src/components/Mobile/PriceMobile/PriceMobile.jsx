import { PriceBlockMobile } from "./";

const PriceMobile = () => {
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
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={500} services={services} />
        <PriceBlockMobile priceByn={400} services={services2} />
        <PriceBlockMobile priceByn={400} services={services3} />
        <PriceBlockMobile priceByn={360} services={services4} />
        <PriceBlockMobile priceByn={80} services={services5} />
        <PriceBlockMobile priceByn={80} services={services6} />
      </div>
    </div>
  );
};
export default PriceMobile;

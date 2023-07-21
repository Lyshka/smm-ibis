import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Изготовление продающих анимационных 3D промороликов (видео до 2 мин) с использованием реального изображения товаров",
  ];

  const services2 = [
    "Фото/видео съемка товаров/ блюд/ гостиничных номеров/ ресторанов/ бизнес ивентов и т.п.",
  ];

  const services3 = [
    "Разработка сценария, съемка и монтаж презентационных роликов о предприятии, товарах, услугах, коллективе",
  ];

  const services4 = [
    "Разработка рекламных, промороликов товаров/ услуг до 2 мин",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={600} services={services3} />
        <PriceBlockMobile priceByn={400} services={services2} />
        <PriceBlockMobile priceByn={300} services={services} />
        <PriceBlockMobile priceByn={80} services={services4} />
      </div>
    </div>
  );
};
export default PriceMobile;

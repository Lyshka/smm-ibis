import PriceBlock from "./PriceBlock";

const Price = () => {
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
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={600} services={services3} />
        <PriceBlock priceByn={400} services={services2} />
        <PriceBlock priceByn={300} services={services} />
        <PriceBlock priceByn={80} services={services4} />
      </div>
    </div>
  );
};
export default Price;

import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Создание, дизайн, шапка профиля, стратегия ведения социальных сетей, ТOV, ссылка, хайлайты",
    "Создание и публикация до 12 постов и до 30 сторис",
    "Настройка таргета до 2 компаний в мес.",
    "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
  ];

  const services2 = [
    "Создание, дизайн, шапка профиля, стратегия ведения социальных сетей, ТOV, ссылка, хайлайты",
    "Создание и публикация до 12 постов и до 70 сторис",
    "Настройка таргета до 4 компаний в мес.",
    "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={500} priceRub={15000} services={services} />
        <PriceBlockMobile priceByn={700} priceRub={25000} services={services2} />
      </div>
    </div>
  );
};
export default PriceMobile;

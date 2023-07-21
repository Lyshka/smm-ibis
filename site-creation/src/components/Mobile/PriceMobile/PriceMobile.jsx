import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Лэндинг до 4 экранов",
    "Со стандартным дизайном",
    "без CMS",
    "помощь в регистрации домена",
    "размещение на хостинге",
  ];

  const services2 = [
    "Лэндинг до 7 экранов",
    "С уникальным дизайном",
    "простой CMS (WP либо др)",
    "помощь в регистрации домена",
    "размещение на хостинге обратная связь",
    "интерактивный помощник",
  ];

  const services3 = [
    "Корпоративный сайт до 7 страниц",
    "С уникальным дизайном",
    "CMS (WP либо др)",
    "помощь в регистрации домена",
    "интерактивный помощник",
  ];

  const services4 = [
    "Интернет магазин до 15 страниц",
    "С уникальным дизайном",
    "CMS (WP либо др)",
    "помощь в регистрации домена",
    "размещение на хостинге обратная связь",
    "интерактивный помощник",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={400} priceRub={15000} services={services}/>
        <PriceBlockMobile priceByn={800} priceRub={25000} services={services2}/>
        <PriceBlockMobile priceByn={1500} priceRub={45000} services={services3}/>
        <PriceBlockMobile priceByn={2500} priceRub={90000} services={services4}/>
      </div>
    </div>
  );
};
export default PriceMobile;

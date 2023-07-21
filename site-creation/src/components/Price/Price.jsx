import PriceBlock from "./PriceBlock";

const Price = () => {
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
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={400} priceRub={15000} services={services}/>
        <PriceBlock priceByn={800} priceRub={25000} services={services2}/>
        <PriceBlock priceByn={1500} priceRub={45000} services={services3}/>
        <PriceBlock priceByn={2500} priceRub={90000} services={services4}/>
      </div>
    </div>
  );
};
export default Price;

import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "5 продающих TikTok (2 — с монтажом , 3 — обычных (в дальнейшем можете использовать для всех своих социальных сетей) в мес.",
    "2 анимационных TikTok (не менее двух различных рекламных посылов) в мес.",
    "5 трендов в мес.",
    "3 шуточных в мес.",
    "Составление карты ЦА раз в два мес.",
    "Анализ аккаунтов конкурентов, не более 5, раз в два мес.",
    "Если нужно больше роликов, то пакет умножается на х2",
  ];

  const services2 = [
    "Посадочная страница (таплинк/ WP с дизайнерским решением 2 экрана (lдомен и хостинг оплачиваются отдельно)",
    "5 продающих TikTok в мес",
    "Настройка таргетированной рекламы в TikTok Ads и ведение 30 дней*",
    "Подбор блогеров с ЦА (3 человек)",
    "Подборка тем для прямых эфиров.",
    "* Рекламный бюджет не входит в стоимость и оплачивается Заказчиком отдельно третьим лицам",
    "Замер позиций: каждый день",
  ];

  const services3 = [
    "Проработка сценариев роликов",
    "Поиск локации для съемки",
    "Поиск актеров",
    "Съемка роликов",
    "Подборка тем для прямых эфиров.",
    "Монтаж /постпродакшн До 10 роликов",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile desc={"(при сотрудничестве более 6 мес. скидка с 7мес. – 15 %) в мес."} priceByn={1100} priceRub={30000} services={services} />
        <PriceBlockMobile desc={"при сотрудничестве более 6 мес. скидка с 7мес. – 10 %) в мес."} priceByn={1800} priceRub={50000} services={services2} />
        <PriceBlockMobile desc={"Создание роликов для TikTok по заданию Заказчика:"} priceByn={699} priceRub={20000} services={services3} />
      </div>
    </div>
  );
};
export default PriceMobile;

import PriceBlock from "./PriceBlock";

const Price = () => {
  const services = [
    "Ежемесячное техническому сопровождению сайта",
    "Устранение ошибок",
    "Обновление контента",
    "Подготовка контента",
    "Наполнение сайта",
    "Установка/ изменения плагинов, счетчиков",
    "Написание и публикация новостей",
    "Добавление новых страниц",
    "До 30 часов выполнения работ работы в месяц",
  ];

  const services2 = [
    "Ежемесячное техническому сопровождению сайта",
    "Устранение ошибок",
    "Обновление контента",
    "Подготовка контента",
    "Наполнение сайта",
    "Установка/ изменения плагинов, счетчиков",
    "Написание и публикация новостей",
    "Добавление новых страниц",
    "До 50 часов выполнения работ работы в месяц",
  ];

  const services3 = [
    "Разовые работы техническому сопровождению сайта",
    "Устранение ошибок",
    "Обновление контента",
    "Подготовка контента",
    "Наполнение сайта",
    "Установка/ изменения плагинов, счетчиков",
    "Написание и публикация новостей",
    "Добавление новых страниц",
    "за 1 час выполнения работ",
  ];

  return (
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={400} priceRub={15000} services={services} month/>
        <PriceBlock priceByn={600} priceRub={20000} services={services2} month/>
        <PriceBlock priceByn={18} priceRub={500} services={services3}/>
      </div>
    </div>
  );
};
export default Price;

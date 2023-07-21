import PriceBlock from "./PriceBlock";

const Price = () => {
  const services = [
    "Ведение социальных сетей",
    "Разработка рекламных макетов",
    "Разработка акционных предложений",
    "Настройка таргетированной рекламы",
    "Настройка контекстной рекламы",
    "Разработка и наполнение контентом сайта",
    "Сопровождение размещения наружной рекламы/ радио",
  ];

  return (
    <div className="flex flex-col">
      <h2>Наши цены</h2>

      <div className="flex justify-center items-start flex-wrap gap-6 w-[999px] mt-6">
        <PriceBlock priceByn={1100} priceRub={45000} services={services} />
      </div>
    </div>
  );
};
export default Price;

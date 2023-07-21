import Title from "./Title";

const About = () => {
  return (
    <>
      <Title />

      <div className="flex justify-between items-center">
        <div>
          <h2>Функциональный отдел маркетинга</h2>

          <p className="w-[487px]">
            Для получения индивидуального предложения, заполните форму ниже. Мы
            свяжемся с вами в ближайшее время.
          </p>
          <a href="#form">
            <button className="font-medium text-sm border-2 mt-8 px-6 py-4 hover:bg-[#FF3A2D] hover:text-white border-[#FF3A2D] rounded-full">
              Получить предложение
            </button>
          </a>
        </div>

        <div>
          <img
            src={`https://smm-ibis.by/wp-content/uploads/2023/07/Функциональный-отдел-маркетинга.webp`}
            alt="content"
            className="w-[488px] h-[288px] rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};
export default About;

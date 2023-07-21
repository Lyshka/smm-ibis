const AboutMobile = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-y-4 px-4 items-start mt-10">
          <img
            src={`https://smm-ibis.by/wp-content/uploads/2023/07/content-7eca0a84.png`}
            alt="content"
          />

          <div className="w-[288px]">
            <h2>Разработка сайта</h2>

            <p>
              Для получения индивидуального предложения, заполните форму ниже.
              Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        </div>

        <a href="#form" className="flex justify-center mt-4 items-center">
          <button className="font-medium text-sm border-2 px-6 py-4 hover:bg-[#FF3A2D] hover:text-white border-[#FF3A2D] rounded-full">
            Получить предложение
          </button>
        </a>
      </div>
    </>
  );
};
export default AboutMobile;
import NavbarBlock from "./NavbarBlock";

const Navbar = () => {
  return (
    <div className="min-w-[221px]">
      <NavbarBlock url={"https://smm-ibis.by/site-creation/"} title={"Разработка сайта"}/>
      <NavbarBlock url={"https://smm-ibis.by/obsluzhivaniyesayta/"} title={"Обслуживание сайта"}/>
      <NavbarBlock url={"https://smm-ibis.by/kontekstnayareklama/"} title={"Контекстная реклама"}/>
      <NavbarBlock url={"https://smm-ibis.by/seo/"} title={"SEO продвижение"}/>
      <NavbarBlock url={"https://smm-ibis.by/smmprodvizheniye/"} title={"SMM продвижение"}/>
      <NavbarBlock url={"https://smm-ibis.by/targetedadvertising/"} title={"Таргетированная реклама"}/>
      <NavbarBlock url={"https://smm-ibis.by/tiktokpromotion/"} check title={"TikTok продвижение"}/>
      <NavbarBlock url={"https://smm-ibis.by/prodvizheniyenamarketpleysakh/"} title={"Продвижение на маркетплейсах"}/>
      <NavbarBlock url={"https://smm-ibis.by/razrabotkaunikalnogodizayna/"} title={"Разработка уникального дизайна"}/>
      <NavbarBlock url={"https://smm-ibis.by/naruzhnayareklama/"} title={"Наружная реклама"}/>
      <NavbarBlock url={"https://smm-ibis.by/sluzhbavybora/"} title={"Booking service"}/>
      <NavbarBlock url={"https://smm-ibis.by/videoprodakshn/"} title={"Видео продакшн"}/>
      <NavbarBlock url={"https://smm-ibis.by/prochiyeslugi/"} title={"Прочие услуги"}/>
      <NavbarBlock url={"https://smm-ibis.by/templates/"} title={"Готовые сайты"}/>
      <NavbarBlock url={"https://smm-ibis.by/funktsionalnyyotdelmarketinga/"} title={"Функциональный отдел маркетинга"}/>
    </div>
  );
};
export default Navbar;

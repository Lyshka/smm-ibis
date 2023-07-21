const NavbarBlock = ({ title, check, url }) => {
  return (
    <a href={url}>
      <div
        className={`flex ${
          check && "bg-[#FF3A2D]"
        } justify-between items-center p-4 w-[221px] group hover:bg-[#FF3A2D] border-r-2`}
      >
        <span
          className={`group-hover:text-white w-[149px] ${
            check && "text-white"
          }`}
        >
          {title}
        </span>
        <svg
          className="h-4 w-4 stroke-white"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L10 8L6 4"
            className={`stroke-[#333333] group-hover:stroke-white ${
              check && "stroke-white"
            }`}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
};
export default NavbarBlock;

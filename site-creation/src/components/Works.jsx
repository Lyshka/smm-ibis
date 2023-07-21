import { useState } from "react";
import Modal from "./Modal";

const Works = () => {
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState("");
  const [morePhoto, setMorePhoto] = useState(false);

  return (
    <div>
      <div>
        <h2>Наши работы</h2>

        <div className="mt-6 flex flex-col gap-y-6 justify-center items-center">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            <img
              src="https://smm-ibis.by/wp-content/uploads/2022/12/Mirakl.webp"
              alt="T1"
              className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
              onClick={() => {
                setModal((prv) => !prv);
                setUrl(
                  "https://smm-ibis.by/wp-content/uploads/2022/12/Mirakl.webp"
                );
              }}
            />
            <img
              src="https://smm-ibis.by/wp-content/uploads/2022/12/RMC.webp"
              alt="starfood"
              className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
              onClick={() => {
                setModal((prv) => !prv);
                setUrl(
                  "https://smm-ibis.by/wp-content/uploads/2022/12/RMC.webp"
                );
              }}
            />
            <img
              src="https://smm-ibis.by/wp-content/uploads/2022/12/Royal-Club.webp"
              alt="royalpark"
              className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
              onClick={() => {
                setModal((prv) => !prv);
                setUrl(
                  "https://smm-ibis.by/wp-content/uploads/2022/12/Royal-Club.webp"
                );
              }}
            />

            <div
              className={`flex-wrap w-full gap-6 items-center justify-between ${
                morePhoto ? "flex" : "hidden"
              }`}
            >
              <img
                src="https://smm-ibis.by/wp-content/uploads/2022/12/Royal-Park.webp"
                alt="T1"
                className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
                onClick={() => {
                  setModal((prv) => !prv);
                  setUrl(
                    "https://smm-ibis.by/wp-content/uploads/2022/12/Royal-Park.webp"
                  );
                }}
              />
              <img
                src="https://smm-ibis.by/wp-content/uploads/2022/12/T1.webp"
                alt="starfood"
                className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
                onClick={() => {
                  setModal((prv) => !prv);
                  setUrl(
                    "https://smm-ibis.by/wp-content/uploads/2022/12/T1.webp"
                  );
                }}
              />
            </div>
          </div>

          <button
            className={`bg-[#FF3A2D] border-2 border-[#FF3A2D] hover:bg-white hover:text-black hover:border-[#FF3A2D] hover:border-2 text-white font-medium rounded-full px-6 py-4 ${
              morePhoto ? "hidden" : "block"
            }`}
            onClick={() => setMorePhoto(true)}
          >
            Смотреть все проекты
          </button>
        </div>
      </div>

      <Modal setModal={setModal} modal={modal} url={url} />
    </div>
  );
};
export default Works;

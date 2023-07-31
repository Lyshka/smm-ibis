import { useEffect, useState } from "react";
import axios from "axios";

import Modal from "./Modal";
import useOutSideAlerter from "../hooks/useOutSideAlerter";

const Works = () => {
  const { ref, isShow, setIsShow } = useOutSideAlerter(false);
  const [url, setUrl] = useState("");
  const [morePhoto, setMorePhoto] = useState(3);
  const [work, setWork] = useState([]);

  const getWorkHalf = async () => {
    const { data } = await axios.get(
      `https://smm-ibis.by//wp-json/wp/v2/portfolio?per_page=${morePhoto}`
    );

    setWork([data[0], data[1]]);
  };

  useEffect(() => {
    getWorkHalf();
  }, [morePhoto]);

  console.log(work);

  return (
    <div>
      <div>
        <h2>Наши работы</h2>

        <div className="mt-6 flex flex-col gap-y-6 justify-center items-center">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            {work.map(({ yoast_head_json }, idx) => (
              <img
                key={idx}
                src={yoast_head_json.og_image[0].url}
                alt="T1"
                className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
                onClick={() => {
                  setIsShow((prv) => !prv);
                  setUrl(yoast_head_json.og_image[0].url);
                }}
              />
            ))}
          </div>

          {work.length < 3 ? (
            ""
          ) : (
            <div>
              {morePhoto > 50 ? (
                <button
                  className={`bg-[#FF3A2D] border-2 border-[#FF3A2D] hover:bg-white hover:text-black hover:border-[#FF3A2D] hover:border-2 text-white font-medium rounded-full px-6 py-4`}
                  onClick={() => setMorePhoto(3)}
                >
                  Скрыть проекты
                </button>
              ) : (
                <button
                  className={`bg-[#FF3A2D] border-2 border-[#FF3A2D] hover:bg-white hover:text-black hover:border-[#FF3A2D] hover:border-2 text-white font-medium rounded-full px-6 py-4`}
                  onClick={() => setMorePhoto(100)}
                >
                  Смотреть все проекты
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <Modal refs={ref} setModal={setIsShow} modal={isShow} url={url} />
    </div>
  );
};
export default Works;

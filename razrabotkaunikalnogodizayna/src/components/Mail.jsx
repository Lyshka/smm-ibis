import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyeuhmr",
        "template_12l9xwb",
        form.current,
        "dcOlQT0d4xOkMtoc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Ваше сообщение успешно отправлено");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-[264px] mt-10 relative bg-[#fff] z-[9999]" id="form">
      <div className="absolute h-full w-full">
        <div className="bg-black/50 absolute z-10 h-full w-full">&nbsp;</div>
        <img
          src="https://smm-ibis.by/wp-content/uploads/2023/02/2a4037515f4e9532bd17ab6f56f81474-scaled.jpeg"
          alt="background"
          className="absolute h-full w-full object-cover"
        />
      </div>

      <div className={`min-w-[1079px] top-12 relative z-20`}>
        <div className="flex items-center justify-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <h1 className="mb-4 text-[22px] text-white">
              Заполните форму и мы Вам поможем
            </h1>
            <div className="bg-[#FF3A2D] w-24 h-[1px]">&nbsp;</div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative z-20 flex justify-center gap-6 items-center"
          >
            <input
              required
              className="rounded-full"
              type="text"
              placeholder="Имя *"
              name="name"
            />
            <input
              required
              className="rounded-full"
              type="tel"
              placeholder="+375..."
              name="tel"
            />
            <button
              type="submit"
              className="bg-[#FF3A2D] border-2 border-[#FF3A2D] text-white hover:bg-white hover:text-black rounded-full px-6 py-4 w-[307px] h-[48px] flex justify-center items-center text-lg uppercase"
            >
              получить КП
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Mail;

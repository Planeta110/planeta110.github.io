import { useEffect, useState } from "react";

export default function Contacts() {
  const [Urlnow, setUrlnow] = useState("");
  const [previw, setPreview] = useState(null);
  const [WarningMessage, setWarningMessage] = useState(false);
  const [warnmessage, setWarnmessage] = useState("Complete all the camps");
  function goTodiscord() {
    window.location.href = "https://discord.gg/ZmfDF8XZeU";
  }
  function goTogithub() {
    window.location.href = "https://github.com/Planeta110";
  }
  useEffect(() => {
    setUrlnow(window.location.href);
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Establecer la URL de la imagen como el valor del estado
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file); // Leer el archivo como una URL de datos
    }
  };

  const chekiscorrect = () => {
    const inputa = document.getElementById("name").value;
    const inputb = document.getElementById("email").value;
    const inputc = document.getElementById("message").value;

    if (inputa === "" || inputb === "" || inputc === "") {
      setWarningMessage(true);
      setWarnmessage("Complete all the camps");
    }
  };

  return (
    <form
      action="https://formsubmit.co/htmljscssprogram@gmail.com"
      method="POST"
      onSubmit={(e) => {
       // e.preventDefault();
        // Aquí validas y haces lo que quieras (fetch, alert, etc)


        setWarningMessage(true);
        setWarnmessage("Sent successfully");
      }}
      className="mt-10 select-none md:w-[680px] lg:w-[800px] dark:text-black h-[550px] w-[80%] rounded-[6px] p-2 md:p-4 bg-slate-700 dark:bg-neutral-200 items-center justify-start md:justify-between flex flex-col md:flex-row"
    >
      <div className="flex  flex-col w-full rounded-[4px] h-full items-center bg-neutral-100 dark:bg-slate-300 p-2 md:p-4">
        <label>Name</label>
        <input
          required
          name="name"
          placeholder="Lucas"
          type="text"
          id="name"
          className="mt-5 border-2 rounded-[6px] p-2 h-[35px] dark:border-black border-black w-full"
        />
        <label>Email</label>
        <input
          required
          name="email"
          id="email"
          placeholder="lucasexample@email.com"
          type="email"
          className="border-2 rounded-[6px] p-2 h-[35px] dark:border-black border-black w-full"
        />
        <label>Message</label>
        <textarea
          id="message"
          required
          name="message"
          placeholder="! Aaaaa ¡"
          type="text"
          className="resize-none h-full border-2 rounded-[6px] p-2  dark:border-black border-black w-full"
        />
        <div className="max-h-[120px] h-[120px] p-2 w-full border-black border-2 mt-2 rounded-[6px]">
          {!previw && (
            <h1 className="select-none">No disponible to upload img</h1>
            //<input
            //  type="file"
            //  name="attachment"
            //  accept="image/*"
            //  onChange={handleFileChange}
            ///>
          )}
          {previw && (
            <div className="w-[50px] h-[50px]">
              <div
                onClick={() => {
                  setPreview(null);
                }}
                className="text-black select-none cursor-pointer rounded-full absolute z-20 -mt-2 -ml-1"
              >
                X
              </div>
              <img
                src={previw}
                alt="Vista previa"
                className="object-fill w-[45px] h-[45px] aspect-auto rounded-[4px]"
              />
            </div>
          )}
        </div>
      </div>
      <div className="md:h-full flex w-full p-2 md:pl-[28px] flex-col items-center justify-end">
        <div className="h-full hidden md:flex w-full flex-col items-start text-white dark:text-black">
          <h1>Other forms:</h1>
          <h1>
            Email: <b className="select-text">htmljscssprogram@gmail.com</b>
          </h1>
          <h1>Discord</h1>
          <div
            onClick={() => {
              goTodiscord();
            }}
            className="mt-2 select-none w-full p-2 justify-start text-white flex flex-row items-center rounded-[10px] h-[70px] cursor-pointer dark:shadow-2xl dark:shadow-[#DCDEE0] dark:border-[#DCDEE0] dark:border-2 hover:bg-[#587cf2] bg-[#5865F2]"
          >
            <img
              className="w-[50px] aspect-square border-2 rounded-full border-white"
              src="/discord-v2-svgrepo-com.svg"
              alt="Discord img"
            />
            <div className="flex flex-col pl-4">
              <h1 className="text-1xl">Planta110</h1>
              <h2 className="text-[12px]">planeta110 #</h2>
            </div>
          </div>
          <h1 className="mt-2">Github</h1>
          <div
            onClick={() => {
              goTogithub();
            }}
            className="mt-2 select-none w-full p-2 justify-start text-white flex flex-row items-center rounded-[10px] h-[70px] cursor-pointer dark:shadow-2xl dark:shadow-[#DCDEE0] dark:border-[#DCDEE0] dark:border-2 hover:bg-[#2d2c2c] bg-[#181717]"
          >
            <img
              className="w-[50px] aspect-square border-2 rounded-full border-white"
              src="/profilepicture.png"
              alt="Github img"
            />
            <div className="flex flex-col pl-4">
              <h1 className="text-1xl">Planta110</h1>
              <h2 className="text-[12px]">Github</h2>
            </div>
          </div>
        </div>
        <input type="hidden" name="_next" value={Urlnow} />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="! I will see it soon ¡"
        />
        <input type="hidden" name="_template" value="table" />
        {WarningMessage === true && (
          <div className="text-white dark:text-black flex flex-row items-center justify-center">
            <p>{warnmessage}</p>
            {warnmessage === "Complete all the camps" && (
              <img
                alt="Error img"
                src="/error-svgrepo-com.svg"
                className="h-11 w-11 p-2"
              />
            )}
            {warnmessage === "Sent successfully" && (
              <img
                alt="Correct img"
                src="/success-svgrepo-com.svg"
                className="h-11 w-11 p-2"
              />
            )}
          </div>
        )}
        <button
          type="submit"
          className=" p-4 cursor-pointer rounded-[4px] bg-amber-500 w-full"
          onClick={() => {
            chekiscorrect();
          }}
        >
          Send form
        </button>
      </div>
    </form>
  );
}

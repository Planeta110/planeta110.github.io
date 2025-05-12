export default function Contacts() {
  function goTodiscord() {
    window.location.href = "https://discord.gg/ZmfDF8XZeU";
  }

  return (
    <form className="mt-10 md:w-[680px] lg:w-[800px] dark:text-black h-[500px] w-[80%] rounded-[6px] p-2 md:p-4 bg-slate-700 dark:bg-neutral-200 items-center justify-start md:justify-between flex flex-col md:flex-row">
      <div className="flex flex-col w-full rounded-[4px] h-full items-center bg-neutral-100 dark:bg-slate-300 p-2 md:p-4">
        <label>Name</label>
        <input
          type="text"
          className="mt-5 border-2 rounded-[6px] p-2 h-[35px] dark:border-black border-black w-full"
        />
        <label>Email</label>
        <input
          type="email"
          className="border-2 rounded-[6px] p-2 h-[35px] dark:border-black border-black w-full"
        />
        <label>Message</label>
        <textarea
          type="text"
          className="resize-none h-full border-2 rounded-[6px] p-2  dark:border-black border-black w-full"
        />
      </div>
      <div className="md:h-full flex w-full p-2 md:pl-[28px] flex-col items-center justify-end">
        <div className="h-full hidden md:flex w-full flex-col items-start text-white dark:text-black">
          <h1>Other forms:</h1>
          <h1>
            Email: <b>htmljscssprogram@gmail.com</b>
          </h1>
          <h1>Discord</h1>
          <div
            onClick={() => {
              goTodiscord()
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
        </div>

        <button className=" p-4 cursor-pointer rounded-[4px] bg-amber-500 w-full">
          Enviar
        </button>
      </div>
    </form>
  );
}

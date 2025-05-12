export default function Demostration() {
  const imgdemostration = {
    alt: "React Native Demostration",
    img: "https://raw.githubusercontent.com/Planeta110/proyect-images/main/portafolio/reactnativedemostration.jpg",
  };
  return (
    <div className="h-full w-full flex flex-col justify-center p-1">
      <h1 class=" text-white">React Native App</h1>
      <img
        alt={imgdemostration.alt}
        src={imgdemostration.img}
        className="max-h-[500px] mt-1 w-auto h-auto rounded-[4px] object-contain mx-auto"
      />
    </div>
  );
}

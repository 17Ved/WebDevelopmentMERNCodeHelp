import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="flex flex-col w-full background h-screen relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg px-10 py-2 w-11/12 text-center mt-[40px] text-4xl font-bold">
        RANDOM GIFs
      </h1>
      <div className="flex flex-col w-full items-center mt-[30px] gap-y-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

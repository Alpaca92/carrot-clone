import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:bg-indigo-400 open:text-white">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>
      <ul className="list-disc marker:text-teal-500">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <input
        type="file"
        className="file:cursor-pointer file:rounded-md file:border-0 file:bg-purple-200 file:px-3 file:py-1 file:transition-colors file:hover:bg-fuchsia-100"
      />
    </div>
  );
};

export default Home;

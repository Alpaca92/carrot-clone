import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 space-y-5 bg-slate-400 px-10 py-20 dark:bg-slate-300 lg:grid-cols-2 xl:grid-cols-3 xl:place-content-center">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$80</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="mx-auto mt-5 w-1/2 rounded-xl bg-blue-500 p-3 text-center text-white hover:bg-teal-500 hover:text-black active:bg-yellow-500">
          Checkout
        </div>
      </div>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="aspect-square w-24 rounded-full bg-red-400 group-hover:bg-zinc-300" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  -mt-10 mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-10 text-[30px] shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="mb-5 flex items-center justify-between">
          <span>&larr;</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="rounded-md p-2 shadow-xl">💖</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="mb-1.5 text-lg font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mb-5 mt-3 flex items-center justify-between">
            <div className="space-x-2">
              <button className="aspect-square w-5 rounded-full bg-yellow-500 ring-yellow-500 ring-offset-2 transition focus:ring-2" />
              <button className="aspect-square w-5 rounded-full bg-indigo-500 ring-indigo-500 ring-offset-2 transition focus:ring-2" />
              <button className="aspect-square w-5 rounded-full bg-teal-500 ring-teal-500 ring-offset-2 transition focus:ring-2" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg  bg-blue-200 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="flex aspect-square w-8 items-center justify-center rounded-lg  bg-blue-200 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <span className="yx-5 rounded-lg bg-blue-500 px-8 py-2 text-center text-sm text-white">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

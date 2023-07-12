"use client";
import Dashboard from "../components/Dashboard";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { IoSearchOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Home() {
  const date = "Today 11 jul 2023";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="pl-5 flex bg-gradient-to-b from-pink-600/80 to-yellow-500/60  ">
      <Dashboard />
      <div className="w-4/5 flex flex-col py-5 px-14 gap-10 shadow-md h-screen bg-white/90 rounded-3xl">
        <div className="flex  items-center justify-between">
          <div className="flex gap-2 items-center border px-2 py-1 bg-red-500/20 rounded-md">
            <IoSearchOutline size={15} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-transparent text-white outline-none placeholder:text-black/50"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <div className="text-4xl font-sans font-semibold">Dashboard</div>
            <div className="w-10 bg-gray-600/20 h-[2px]"></div>
            <BiBell size={22} />
            <div className="flex gap-x-3 items-center ml-5">
              <div>
                <p className="font-semibold text-sm">Your Name</p>
                <h1 className="text-gray-500/80 text-sm">Administrator</h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="img"
                className="w-12 h-12 rounded-2xl"
              />
              <div className="border-2 p-1 rounded-2xl cursor-pointer">
                <AiOutlineDown />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="w-16 h-[2px] bg-gray-400/50"></div>
          <div className="text-gray-400/50">
            Show: <span className="text-black/80 pl-2">{date}</span>
          </div>
        </div>
        <div className="flex  items-start justify-between">
          <div className="bg-white p-5 rounded-lg flex gap-x-4">
            <div className="bg-pink-600/30 p-2 border-2 grid place-items-center border-pink-400 rounded-lg">
              10%
            </div>
            <div>
              <p>Total Revenue</p>
              <p className="text-xl font-bold">$432.45</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg flex gap-x-4">
            <div className="bg-yellow-500/20 p-2 border-2 grid place-items-center border-yellow-400 rounded-lg">
              12%
            </div>
            <div>
              <p>Today Visitor</p>
              <p className="text-xl font-bold">445</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg flex gap-x-4">
            <div className="bg-pink-600/30 p-2 border-2 grid place-items-center border-pink-400 rounded-lg">
              +10%
            </div>
            <div>
              <p>Product Sold</p>
              <p className="text-xl font-bold">$432.45</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg flex gap-x-4">
            <div className="bg-pink-600/30 p-2 border-2 grid place-items-center border-pink-400 rounded-lg">
              +10%
            </div>
            <div>
              <p>Total Revenue</p>
              <p className="text-xl font-bold">$502.59</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-start justify-between">
          <div className="border w-full bg-white rounded-md  flex p-10  flex-col h-[350px] ">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold ml-12 ">Revenue</p>
              <select
                name="week"
                id=""
                className="outline-none p-1 border rounded-md"
              >
                <option value="week1">week1</option>
                <option value="week2">week2</option>
                <option value="week3">week3</option>
              </select>
            </div>
            {loading ? (
              <div className="flex items-center justify-center">
                <InfinitySpin width="200" color="#4fa94d" />
              </div>
            ) : (
              <Line
                data={{
                  labels: ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"],
                  datasets: [
                    {
                      label: "# revenue",
                      data: [100, 900, 500, 800, 300, 600, 500],
                      tension: 0.4,
                      cubicInterpolationMode: "monotone",
                      borderColor: "rgba(0, 0, 255)",
                      pointBorderColor: "transparent",
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  interaction: {
                    intersect: false,
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                    },
                    y: {
                      min: 0,
                      max: 1000,
                      grid: {
                        display: false,
                      },
                    },
                  },
                  aspectRatio: 3,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import React, { useState } from "react";
import Input from "./components/input";

export default function Home() {
  const [position, setPosition] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      position,
      instruction,
    });
  };

  return (
    <main className="pt-10 bg-slate-600 h-screen xl:px-80 lg:px-60 md:px-40 sm:px-20">
      <header>
        <h1 className="text-center text-6xl text-white">Mars Rover</h1>
        <h1 className="text-center text-3xl text-gray-300">Inspelp test</h1>
      </header>

      <div className="pt-20">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <section>
              <Input
                label={"Position"}
                value={position}
                setValue={setPosition}
                placeholder={"1 1 N"}
              />
            </section>
            <section>
              <Input
                label={"instruction"}
                value={instruction}
                setValue={setInstruction}
                placeholder={"LMML"}
              />
            </section>
            <div className="content-center items-center">
              <button
                type="submit"
                className="inline text-white bg-gray-700 hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                Submit
              </button>
              <h1 className="inline pl-4 text-white">output value</h1>
            </div>
          </div>
        </form>
      </div>
      <footer className="text-white text-center fixed inset-x-0 bottom-0 pb-4">
        Guilherme Senna
      </footer>
    </main>
  );
}

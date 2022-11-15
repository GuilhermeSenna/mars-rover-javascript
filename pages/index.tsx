/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Input from "./components/input";
import { goForward } from "./services/goFoward";
import { handleInstructions } from "./services/handleInstructions";
import { turnLeft } from "./services/turnLeft";
import { turnRight } from "./services/turnRight";

// type possibleDirections = "N" | "W" | "S" | "E";
export interface IcurrentPosition {
  xPosition: number;
  yPosition: number;
  direction: string;
  // direction: possibleDirections;
}

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState<IcurrentPosition>({
    xPosition: 0,
    yPosition: 0,
    direction: "N",
  });
  const [initialPosition, setInitialPosition] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [handleAction, setHandleAction] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get positions values
    const [xPosition, yPosition, direction] = initialPosition.split(" ");

    setCurrentPosition({
      xPosition: Number(xPosition),
      yPosition: Number(yPosition),
      direction: direction,
    });

    setHandleAction((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    if (!handleAction) return;
    handleInstructions({
      currentPosition,
      instructions,
      setCurrentPosition,
    });
  }, [handleAction]);

  return (
    <main className="pt-10 bg-slate-600 h-screen xl:px-80 lg:px-60 md:px-40 sm:px-20">
      <header>
        <h1 className="text-center text-5xl text-white">Mars Rover</h1>
        <h1 className="text-center italic text-2xl text-gray-300">
          Inspelp test
        </h1>
      </header>

      <div className="pt-20">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <section>
              <Input
                label={"Position"}
                value={initialPosition}
                setValue={setInitialPosition}
                placeholder={"1 1 N"}
                maxLength={5}
              />
            </section>
            <section>
              <Input
                label={"instruction"}
                value={instructions}
                setValue={setInstructions}
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
              <h1 className="inline pl-4 text-white">
                Output value: {currentPosition.xPosition}{" "}
                {currentPosition.yPosition} {currentPosition.direction}
              </h1>
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

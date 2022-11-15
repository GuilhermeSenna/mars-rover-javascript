/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Input from "./components/input";

// type possibleDirections = "N" | "W" | "S" | "E";
interface IcurrentPosition {
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
  const [changeInitialValue, setChangeInitialValue] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get positions values
    const positionInfo = initialPosition.split(" ");

    setCurrentPosition({
      xPosition: Number(positionInfo[0]),
      yPosition: Number(positionInfo[1]),
      direction: positionInfo[2],
    });

    setChangeInitialValue(true);
  };

  const turnLeft = (actualDirection: string): string => {
    if (actualDirection === "N") return "W";
    if (actualDirection === "W") return "S";
    if (actualDirection === "S") return "E";
    if (actualDirection === "E") return "N";
    return "";
  };

  const turnRight = (actualDirection: string): string => {
    if (actualDirection === "N") return "E";
    if (actualDirection === "E") return "S";
    if (actualDirection === "S") return "W";
    if (actualDirection === "W") return "N";
    return "";
  };

  const goForward = ({
    xPosition,
    yPosition,
    direction,
  }: IcurrentPosition): { xPosition: number; yPosition: number } => {
    if (direction === "N") return { xPosition, yPosition: yPosition + 1 };
    if (direction === "E") return { xPosition: xPosition + 1, yPosition };
    if (direction === "S") return { xPosition, yPosition: yPosition - 1 };
    if (direction === "W") return { xPosition: xPosition - 1, yPosition };
    return { xPosition: 0, yPosition: 0 };
  };

  const handleInstructions = () => {
    var actualDirection = currentPosition.direction;
    var actualPosition = {
      xPosition: currentPosition.xPosition,
      yPosition: currentPosition.yPosition,
    };

    instructions.split("").map((instruction) => {
      if (instruction === "L") {
        actualDirection = turnLeft(actualDirection);
      }

      if (instruction === "R") {
        actualDirection = turnRight(actualDirection);
      }
      if (instruction === "M") {
        actualPosition = goForward({
          ...actualPosition,
          direction: actualDirection,
        });
      }
    });

    setCurrentPosition({
      xPosition: actualPosition.xPosition,
      yPosition: actualPosition.yPosition,
      direction: actualDirection,
    });
  };

  useEffect(() => {
    if (!changeInitialValue) return;
    handleInstructions();
    setChangeInitialValue(false);
  }, [changeInitialValue]);

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

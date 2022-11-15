import { IcurrentPosition } from "..";
import { goForward } from "./goFoward";
import { turnLeft } from "./turnLeft";
import { turnRight } from "./turnRight";

export const handleInstructions = ({
  instructions,
  currentPosition,
  setCurrentPosition,
}: {
  instructions: string;
  currentPosition: IcurrentPosition;
  setCurrentPosition: React.Dispatch<React.SetStateAction<IcurrentPosition>>;
}) => {
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

import { IcurrentPosition } from "..";

export const goForward = ({
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

export const turnRight = (actualDirection: string): string => {
  if (actualDirection === "N") return "E";
  if (actualDirection === "E") return "S";
  if (actualDirection === "S") return "W";
  if (actualDirection === "W") return "N";
  return "";
};

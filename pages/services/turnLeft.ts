export const turnLeft = (actualDirection: string): string => {
  if (actualDirection === "N") return "W";
  if (actualDirection === "W") return "S";
  if (actualDirection === "S") return "E";
  if (actualDirection === "E") return "N";
  return "";
};

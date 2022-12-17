const returnColor = (type) => {
  let color = "";
  if (type === "grass") {
    color = "#74CB48";
  } else if (type === "fire") {
    color = "#F57D31";
  } else if (type === "water") {
    color = "#6493EB";
  } else if (type === "bug") {
    color = "#A7B723";
  } else if (type === "psychic") {
    color = "#FB5584";
  } else if (type === "electric") {
    color = "#F9CF30";
  } else if (type === "rock") {
    color = "#B69E31";
  } else if (type === "ghost") {
    color = "#70559B";
  } else if (type === "steel") {
    color = "#B7B9D0";
  } else if (type === "ice") {
    color = "#9AD6DF";
  } else if (type === "normal") {
    color = "#AAA67F";
  } else if (type === "fighting") {
    color = "#C12239";
  } else if (type === "flying") {
    color = "#A891EC";
  } else if (type === "poison") {
    color = "#A43E9E";
  } else if (type === "ground") {
    color = "#DEC16B";
  } else if (type === "fairy") {
    color = "#E69EAC";
  } else if (type === "dragon") {
    color = "#7037FF";
  }

  return color;
};

export default returnColor;

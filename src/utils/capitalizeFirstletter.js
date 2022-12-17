const capitalizeFirstLetter = (pokeName) => {
  //capitalize first letter of pokemon name
  let split = pokeName.split("");
  let first = split[0].toUpperCase();
  split[0] = first;
  let name = split.join("");
  return name;
};

export default capitalizeFirstLetter;

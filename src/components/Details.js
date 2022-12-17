import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import capitalizeFirstletter from "../utils/capitalizeFirstletter.js";
import returnColor from "../utils/returnColor";
import capitalizeFirstLetter from "../utils/capitalizeFirstletter.js";

export default function Details({ data, setView }) {
  const padNumber = (num) => {
    if (num < 10) {
      return "00" + num;
    } else if (num > 9 && num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  };

  console.log(data.data.sprites.other.dream_world.front_default);

  return (
    <div
      style={{ backgroundColor: returnColor(data.data.types[0].type.name) }}
      className="details p-0 100-vh container-fluid"
    >
      <div style={{ height: "40vh" }} className="row ">
        <nav className="col-12 d-flex px-4 pt-4 detailsNav align-items-center">
          <FontAwesomeIcon
            onClick={() => setView("list")}
            icon={faArrowLeft}
            size="2xl"
          />
          <h1 className="ps-4 mb-0">{capitalizeFirstLetter(data.name)}</h1>
          <p className="pokeNumber h-100 mb-0">#{padNumber(data.data.id)}</p>
        </nav>
        <Pokeball className="detailsBall" />
      </div>
      <div
        style={{ height: "58vh" }}
        className="row m-2 p-0 rounded vh-50 bg-white detailsBottom position-relative d-flex justify-content-center"
      >
        <img
          className="details-image"
          src={data.data.sprites.other.dream_world.front_default}
        />
      </div>
    </div>
  );
}

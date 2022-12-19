import React, { useState, useEffect } from "react";
import {
  faArrowLeft,
  faWeightScale,
  faRulerVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Pokeball } from "../assets/Pokeball.svg";
import returnColor from "../utils/returnColor";
import capitalizeFirstLetter from "../utils/capitalizeFirstletter.js";

export default function Details({ data, setView }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.data.id}/`)
      .then((res) => res.json())
      .then((data) => setText(data.flavor_text_entries[1].flavor_text));
  }, []);

  const padNumber = (num) => {
    if (num < 10) {
      return "00" + num;
    } else if (num > 9 && num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  };

  {
    text && console.log(text);
  }

  return (
    <div
      style={{ backgroundColor: returnColor(data.data.types[0].type.name) }}
      className="details p-0  container-fluid"
    >
      <div style={{ height: "30%" }} className="row ">
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
        style={{ height: "70%" }}
        className="row m-2 p-0 rounded vh-50 bg-white detailsBottom position-relative "
      >
        <div className="col-12 d-flex flex-column align-items-center">
          <img
            className="details-image"
            src={data.data.sprites.other.dream_world.front_default}
          />
          <div className="details-type d-flex mt-4">
            {data.data.types.map((type) => {
              return (
                <h4
                  style={{ backgroundColor: returnColor(type.type.name) }}
                  className="m-3 py-1 px-3 rounded-pill details-type"
                >
                  {capitalizeFirstLetter(type.type.name)}
                </h4>
              );
            })}
          </div>
          <nav className="details-nav w-100 ">
            <ul
              className=" p-0 w-100 d-flex justify-content-around"
              style={{ color: returnColor(data.data.types[0].type.name) }}
            >
              <li className="">About</li>
              <li className="">Evolution</li>
            </ul>
          </nav>
          <div className="row w-100">
            <div
              className="d-flex details-item flex-column align-items-center col-4 p-0 h-100 justify-content-between"
              style={{ color: "black" }}
            >
              <div>
                <FontAwesomeIcon
                  className="pe-1"
                  icon={faWeightScale}
                  size="2xl"
                />
                {data.data.weight / 10 + " kg"}
              </div>

              <p>Weight</p>
            </div>
            <div
              className="d-flex details-item flex-column align-items-center col-4 p-0 justify-content-between"
              style={{ color: "black" }}
            >
              <div>
                <FontAwesomeIcon
                  className="pe-1"
                  icon={faRulerVertical}
                  size="2xl"
                />
                {data.data.height / 10 + " m"}
              </div>

              <p>Height</p>
            </div>
            <div
              className="d-flex details-item flex-column align-items-center col-4 p-0 justify-content-between"
              style={{ color: "black" }}
            >
              <div>
                {data.data.abilities.map((move) => {
                  return (
                    <h5 className="m-0">
                      {capitalizeFirstLetter(move.ability.name)}
                    </h5>
                  );
                })}
              </div>
              <p>Moves</p>
            </div>
          </div>
          <p style={{ color: "black" }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

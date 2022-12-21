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
import ProgressBar from "@ramonak/react-progress-bar";

export default function Details({ data, setView }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.data.id}/`)
      .then((res) => res.json())
      .then((data) => setText(data.flavor_text_entries[1].flavor_text));

    setColor(returnColor(data.data.types[0].type.name));
  }, [data.data.id, data.data.types]);

  const padNumber = (num) => {
    if (num < 10) {
      return "00" + num;
    } else if (num > 9 && num < 100) {
      return "0" + num;
    } else {
      return num;
    }
  };

  return (
    <div
      style={{ backgroundColor: returnColor(data.data.types[0].type.name) }}
      className="details container-fluid"
    >
      <div
        style={{ height: "30%" }}
        className="row d-flex flex-column align-items-center "
      >
        <nav className="col-12 d-flex px-4 pt-4 detailsNav align-items-center">
          <FontAwesomeIcon
            onClick={() => setView("list")}
            icon={faArrowLeft}
            size="2xl"
          />
          <h1 className="ps-4 mb-0 text-white bold">
            {capitalizeFirstLetter(data.name)}
          </h1>
          <p className="pokeNumber h-100 mb-0 text-white bold">
            #{padNumber(data.data.id)}
          </p>
        </nav>
        <Pokeball className="detailsBall" />
      </div>
      <div
        style={{ maxHeight: "70%", height: "68.5%" }}
        className="row m-2 mb-2 rounded  bg-white detailsBottom position-relative "
      >
        <div className="details-bottom-wrapper">
          <div className="col-12  d-flex flex-column align-items-center justify-content-between pt-5">
            <img
              className="details-image"
              src={data.data.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
            <div className="details-type d-flex mt-4">
              {data.data.types.map((type) => {
                return (
                  <h4
                    style={{ backgroundColor: returnColor(type.type.name) }}
                    className="bold m-3 py-1 px-3 rounded-pill details-type text-white"
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
            <div className="row w-100 mb-3">
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
                className="middle-item d-flex details-item flex-column align-items-center col-4 p-0 justify-content-between"
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
                      <h5
                        style={{ fontSize: "1rem", textAlign: "center" }}
                        className="m-0"
                      >
                        {capitalizeFirstLetter(move.ability.name)}
                      </h5>
                    );
                  })}
                </div>
                <p>Moves</p>
              </div>
            </div>
            <p className="flavor-text">{text}</p>
          </div>

          <div className="details-stats col-12 d-flex flex-wrap">
            <h3 className="bold col-12 text-center" style={{ color: color }}>
              Base Stats
            </h3>
            <div className="d-flex w-100 stat-item">
              <p
                style={{ color: color }}
                className="col-2 m-0 stat-item-name bold"
              >
                HP
              </p>
              <p className="col-1 m-0 stat-item-num">
                {data.data.stats[0].base_stat}
              </p>
              <div className="progress-wrapper col-9 p-2">
                <ProgressBar
                  bgColor={color}
                  animateOnRender="true"
                  width="100%"
                  height="10px"
                  customLabel=" "
                  completed={data.data.stats[0].base_stat}
                  maxCompleted={255}
                />
              </div>
            </div>
            <div className="d-flex w-100 stat-item">
              <p style={{ color: color }} className="stat-item-name bold">
                ATK
              </p>
              <p className="stat-item-num">{data.data.stats[1].base_stat}</p>
              <div className="progress-wrapper">
                <ProgressBar
                  bgColor={color}
                  animateOnRender="true"
                  width="100%"
                  height="10px"
                  customLabel=" "
                  completed={data.data.stats[1].base_stat}
                  maxCompleted={255}
                />
              </div>
            </div>
            <div className="d-flex w-100 stat-item">
              <p
                style={{ color: color }}
                className="col-2 m-0 stat-item-name bold"
              >
                DEF
              </p>
              <p className="col-1 m-0 stat-item-num">
                {data.data.stats[2].base_stat}
              </p>
              <div className="progress-wrapper col-9 p-2">
                <ProgressBar
                  bgColor={color}
                  animateOnRender="true"
                  width="100%"
                  height="10px"
                  customLabel=" "
                  completed={data.data.stats[2].base_stat}
                  maxCompleted={255}
                />
              </div>
            </div>
            <div className="d-flex w-100 stat-item">
              <p
                style={{ color: color }}
                className="col-2 m-0 stat-item-name bold"
              >
                SATK
              </p>
              <p className="col-1 m-0 stat-item-num">
                {data.data.stats[3].base_stat}
              </p>
              <div className="progress-wrapper col-9 p-2">
                <ProgressBar
                  bgColor={color}
                  animateOnRender="true"
                  width="100%"
                  height="10px"
                  customLabel=" "
                  completed={data.data.stats[3].base_stat}
                  maxCompleted={255}
                />
              </div>
            </div>
            <div className="d-flex w-100 stat-item">
              <p
                style={{ color: color }}
                className="col-2 m-0 stat-item-name bold"
              >
                SDEF
              </p>
              <p className="col-1 m-0 stat-item-num">
                {data.data.stats[4].base_stat}
              </p>
              <div className="progress-wrapper col-9 p-2">
                <ProgressBar
                  bgColor={color}
                  animateOnRender="true"
                  width="100%"
                  height="10px"
                  customLabel=" "
                  completed={data.data.stats[4].base_stat}
                  maxCompleted={255}
                />
              </div>
            </div>
            <div className="d-flex w-100 stat-item">
              <p
                style={{ color: color }}
                className="col-2 m-0 stat-item-name bold"
              >
                SPD
              </p>
              <p className="col-1 m-0 stat-item-num">
                {data.data.stats[5].base_stat}
              </p>
              <div className="progress-wrapper col-9 p-2">
                <ProgressBar
                  bgColor={color}
                  animateOnRender="true"
                  width="100%"
                  height="10px"
                  customLabel=" "
                  completed={data.data.stats[5].base_stat}
                  maxCompleted={255}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Details({ data }) {
  return (
    <div className="details container-fluid">
      <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
      <div className="row h-50">
        <div className="col-6 d-flex flex-column">
          <div className="row">
            <div className="col-12">
              <h1>{data.name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6">fire</div>
            <div className="col-6">fire</div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-4">{data.data.id}</div>
          </div>
          <div className="row">
            <div className="col-12">{data.data.id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

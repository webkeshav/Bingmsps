import React from "react";
import ReactBingmaps from "./ReactBingmaps";
import "./Reactmap.css";
import Data from "./BuildingDetails.json";

function Reactmap() {
  let buildingdata = Data;
  // console.log(buildingdata);
  const pushPins = [
    {
      location: [54.900563956911192, 9.1261945627754439],
      option: { color: "red" },
    },
    {
      location: [54.900554332994474, 9.1272366900173036],
      option: { color: "red" },
    },
    {
      location: [54.9004556628278, 9.12723435169777],
      option: { color: "red" },
    },
    {
      location: [54.900463938741169, 9.12619222278824],
      option: { color: "red" },
    },
  ];

  let gisdata = buildingdata.map((element) => {
    return console.log(element.Gis[0].lat);
  });

  // gisdata.map((e)=>{
  //   return console.log(e);
  // })

  // const mapPolygons  =
  // [
  //   {
  //     "locations":[
  //       {lat:54.900563956911192,lng:9.1261945627754439},
  //       {lat:54.900554332994474,lng:9.1272366900173036},
  //       {lat:54.9004556628278,lng:9.12723435169777},
  //       {lat:54.900463938741169,lng:9.12619222278824}
  //     ]
  //   },
  // ]

  const infoboxesWithPushPins = [
    {
      location: [56.486920324530431, 9.59186702551628],
      addHandler: "mouseover", //on mouseover the pushpin, infobox shown
      infoboxOption: { title: "Blichers Allé", description: "Infobox" },
      pushPinOption: { title: "Blichers Allé", description: "Pushpin" },
    },
    {
      location: [54.900554332994474, 9.1272366900173036],
      addHandler: "mouseover", //on mouseover the pushpin, infobox shown
      infoboxOption: { title: "Flensborgvej", description: "Infobox" },
      pushPinOption: { title: "Flensborgvej", description: "Pushpin" },
    },
  ];

  const directions = {
    renderOptions: { itineraryContainer: "itineraryContainer" },
    requestOptions: { routeMode: "driving", maxRoutes: 3 },
    wayPoints: [
      {
        location: [56.486920324530431, 9.59186702551628],
      },
      {
        location: [54.900554332994474, 9.1272366900173036],
      },
    ],
  };
  return (
    <div className="container mapcomponent my-4" style={{ height: "70vh" }}>
      <ReactBingmaps
        className="customClass"
        id="eleven"
        bingmapKey="An24S5X_oclrRB46CkU2HltZ2gul-nA60rP6TTWx0pHEUULfmc2depPcG-YrF9wO"
        center={[54.900554332994474, 9.1272366900173036]}
        zoom={15}
        // infoboxesWithPushPins = {infoboxesWithPushPins}
        //  directions = {directions}
        // mapPolygons={mapPolygons}
      ></ReactBingmaps>
      <div className="direction-container" style={{ height: "70vh" }}>
        <div className="input-panel" id="inputPanel"></div>
        <div className="itinerary-container" id="itineraryContainer"></div>
      </div>
    </div>
  );
}

export default Reactmap;

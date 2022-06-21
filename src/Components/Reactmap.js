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

  let Zipcodes = buildingdata.map((element) => {
    return element.PostalCode
  
  });

 const uniquePostal = Zipcodes.filter((currentValue, index, arr)=>{
 return arr.indexOf(currentValue) === index && currentValue !=null
  })

  console.log(uniquePostal);


  //GIS
 let Gisarr =[];
  let GIScord = buildingdata.map((element) => {
    return element.Gis;
  });

for(let i=0; i<GIScord.length;i++){
  Gisarr.push(JSON.parse(GIScord[i]))
}



var buildingPolygon = Gisarr.map((x)=>{
 return {locations:x,option:{fillColor: "rgba(0,0,93,0.4)", strokeThickness: 2} };

});
console.log(buildingPolygon);




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
    <div className="container mapcomponent my-4" style={{ height: "80vh", width:"100%" }}>
      <ReactBingmaps
        className="customClass"
        id="eleven"
        bingmapKey="An24S5X_oclrRB46CkU2HltZ2gul-nA60rP6TTWx0pHEUULfmc2depPcG-YrF9wO"
        center={[54.900554332994474, 9.1272366900173036]}
        zoom={16}
        // infoboxesWithPushPins = {infoboxesWithPushPins}
        //  directions = {directions}
         mapPolygons={buildingPolygon}
      ></ReactBingmaps>
      {/* <div className="direction-container" style={{ height: "70vh" }}>
        <div className="input-panel" id="inputPanel"></div>
        <div className="itinerary-container" id="itineraryContainer"></div>
      </div> */}
    </div>
  );
}

export default Reactmap;
 
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Sidebar from "./items/Sidebar";

const Map = () => {
  //   const [geojsonData, setGeojsonData] = useState(null);

  //   useEffect(() => {
  //     const fetchGeoJsonData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://gist.githubusercontent.com/tmcw/9963085/raw/b53b57a508de3881ed08b9cc97d0c6476b8f0e40/landslide.geojson"
  //         );
  //         const data = await response.json();
  //         setGeojsonData(data);
  //       } catch (error) {
  //         console.error("Error fetching GeoJSON data:", error);
  //       }
  //     };

  //     fetchGeoJsonData();
  //   }, []);
  var __html = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArcGIS Map with Shapefile</title>
    <link rel="stylesheet" href="https://js.arcgis.com/4.22/esri/themes/light/main.css">
    <script src="https://js.arcgis.com/4.22/"></script>
    <style>
        #viewDiv {
            height: 100vh;
            margin: -12px;
            padding-left: 80px;
        }
    </style>
</head>
<body>
    <div id="viewDiv"></div>

    <script>
        require([
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/GeoJSONLayer",
            "esri/widgets/Search",
            "esri/widgets/Legend",
            "esri/widgets/Expand",
            "esri/widgets/BasemapGallery",
            "dojo/domReady!"
        ], function(Map, MapView, GeoJSONLayer, Search, Legend, Expand, BasemapGallery) {

            // Create a map with dark basemap
            var map = new Map({
                basemap: "dark-gray-vector" // dark mode basemap
            });

            // Create a MapView
            var view = new MapView({
                container: "viewDiv",
                map: map,
                center: [101.69319345083778, 3.145279821928947], // longitude, latitude
                zoom: 5 // zoom level
            });

            // Add a search widget
            var searchWidget = new Search({
                view: view
            });
            view.ui.add(searchWidget, {
                position: "top-left",
                index: 0,
                padding: 10
            });

            // Create a basemap gallery
            var basemapGallery = new BasemapGallery({
                view: view,
                source: {
                    portal: {
                        url: "https://www.arcgis.com",
                        useVectorBasemaps: true  // Use vector basemaps if available
                    }
                }
            });
            var expandBasemapGallery = new Expand({
                view: view,
                content: basemapGallery,
                expanded: false
            });
            view.ui.add(expandBasemapGallery, "top-right");


       
            // Create a PopupTemplate to show feature details
            var popupTemplate = {
                title: "Feature Details",
                content: [
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "field1", // Replace "field1" with the actual field name in your GeoJSON attributes
                                label: "Field 1"
                            },
                            {
                                fieldName: "field2", // Replace "field2" with the actual field name in your GeoJSON attributes
                                label: "Field 2"
                            }
                        ]
                    },
                    {
                        type: "text",
                        text: "Coordinates: {Y}, {X}"  // Display coordinates in popup
                    }
                ]
            };

            var urls = [
                "https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/0.geojson",
                "https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/1.geojson",
                "https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/2.geojson",
                "https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/3.geojson",
                "https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/4.geojson",
                "https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/5.geojson",
                'https://raw.githubusercontent.com/MohammedAlshami/Datasets/main/coordinates_shapefile.geojson'
            ];
            
            var layerInfos = []; // Array to hold layerInfos for legend widget

            // Loop through the URLs
            urls.forEach(function(url, index) {
                // Create a new GeoJSON layer from the URL with the PopupTemplate
                var geoJSONLayer = new GeoJSONLayer({
                    url: url,
                    popupTemplate: popupTemplate // Assuming popupTemplate is defined elsewhere
                });
                map.add(geoJSONLayer); // Add the GeoJSON layer to the map
            
                // Create layerInfo for legend widget
                var layerInfo = {
                    layer: geoJSONLayer,
                    title: "Legend " + (index + 1) // Title for legend item
                };
                layerInfos.push(layerInfo); // Add layerInfo to the array
            });
            
            // Create a legend widget
            var legend = new Legend({
                view: view,
                layerInfos: layerInfos // Pass the array of layerInfos
            });
            var expandLegend = new Expand({
                view: view,
                content: legend,
                expanded: false
            });

            view.ui.add(expandLegend, "top-right");

        });
    </script>
</body>
</html>

  `;
  var template = { __html: __html };

  return (
    // <div className="h-screen w-screen ">
    //   <MapContainer
    //     center={[4.2105, 101.9758]}
    //     zoom={7}
    //     scrollWheelZoom={true}
    //     style={{ height: "100%", width: "100%" }}
    //   >
    //     <TileLayer
    //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXNoYW1pIiwiYSI6ImNsb2ZqMzFkbTBudTMycnFjM3QybW54MnAifQ.8SDg8QedEnsOGHU4AL9L4A"
    //     />
    //     {/* Render GeoJSON layer if data is available */}
    //     {geojsonData && <GeoJSON data={geojsonData} />}
    //   </MapContainer>
    // </div>
    <>
      <div className="scrollbar-hide">
        <Sidebar></Sidebar>
        <div dangerouslySetInnerHTML={template} className="scrollbar-hide" />
      </div>
    </>
  );
};

export default Map;

// var __html = require('./template.html');
// var template = { __html: __html };

// React.module.exports = React.createClass({
//   render: function() {
//     return(
//       <div dangerouslySetInnerHTML={template} />
//     );
//   }
// });

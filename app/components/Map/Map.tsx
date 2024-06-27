import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
  Circle,
  LayerGroup,
  FeatureGroup,
  Rectangle,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://static.vecteezy.com/system/resources/previews/010/157/629/non_2x/map-pointer-pin-icon-sign-design-free-png.png",
  iconUrl:
    "https://static.vecteezy.com/system/resources/previews/010/157/629/non_2x/map-pointer-pin-icon-sign-design-free-png.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const center = [48.282979, -121.848875];
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

import DrawTools from "./DrawTools";
const MapPage = ({ onCreate }) => {
  const [geoJSON, setGeoJSON] = useState(null);
  const _onEdited = (e) => {
    let numEdited = 0;
    e.layers.eachLayer((layer) => {
      numEdited += 1;
    });
    console.log(`_onEdited: edited ${numEdited} layers`, e);

    // this._onChange();
  };

  const _onCreated = (e) => {
    let type = e.layerType;
    let layer = e.layer;
    if (type === "marker") {
      // Do marker specific actions
      console.log("_onCreated: marker created", e);
    } else {
      console.log("_onCreated: something else created:", type, e);
    }

    console.log("Geojson", layer.toGeoJSON());
    console.log("coords", layer.getLatLngs());
    onCreate(layer.toGeoJSON());

    // Do whatever else you need to. (save to db; etc)

    // this._onChange();
  };

  const _onDeleted = (e) => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
    });
    console.log(`onDeleted: removed ${numDeleted} layers`, e);

    // this._onChange();
  };

  const _onMounted = (drawControl) => {
    console.log("_onMounted", drawControl);
  };

  const _onEditStart = (e) => {
    console.log("_onEditStart", e);
  };

  const _onEditStop = (e) => {
    console.log("_onEditStop", e);
  };

  const _onDeleteStart = (e) => {
    console.log("_onDeleteStart", e);
  };

  const _onDeleteStop = (e) => {
    console.log("_onDeleteStop", e);
  };

  const _onDrawStart = (e) => {
    console.log("_onDrawStart", e);
  };

  return (
    <>
      <div className="bg-purple-400 p-2 rounded-lg">
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
          className="h-96 md:h-[650px] w-screen sm:w-[100vh] lg:w-[120vh] xl:w-[80vh]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {/* <LayersControl position="topright">
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={center}
              pathOptions={{ fillColor: "blue" }}
              radius={200}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: "red" }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[51.51, -0.08]}
                pathOptions={{ color: "green", fillColor: "green" }}
                radius={100}
              />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: "purple" }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[51.51, -0.06]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl> */}

          <FeatureGroup>
            <EditControl
              onDrawStart={_onDrawStart}
              position="topleft"
              onEdited={_onEdited}
              onCreated={_onCreated}
              onDeleted={_onDeleted}
              draw={{
                polyline: false,
                rectangle: false,
                circlemarker: false,
                circle: false,
                polygon: true,
                marker: false,
              }}
            />
          </FeatureGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default MapPage;

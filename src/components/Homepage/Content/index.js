import React, { Component } from "react";
import osm from "osm";
import "../../../index.css";
import FormComp from "./Form";
import axios from "axios";

export default class index extends Component {
  state = {
    lat: 47.88038,
    long: 10.6222475,
    region: null,
  };
  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
        });
      });
    }
    let map = osm().position(this.state.lat, this.state.long).radius(50);
    let mapArea = document.querySelector(".mapArea");
    let mapShow = map.show();
    mapShow.classList.add("mapShow");
    mapArea.appendChild(mapShow);
  };

  componentDidUpdate = () => {
    let map = osm().position(this.state.lat, this.state.long).radius(50);
    let mapShow = document.querySelector(".mapShow");
    let newMapShow = map.show();
    newMapShow.classList.add("mapShow");
    mapShow.parentNode.replaceChild(newMapShow, mapShow);
  };

  getGeoLocation = (place, callback) => {
    const mapUrl =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      place +
      ".json?access_token=pk.eyJ1IjoiYmVpbmdpaXRpYW4iLCJhIjoiY2toM2xjMmo0MDFnZzJ4b3d3bTZraXl1biJ9.4UuWGQv7727CpBoiS2Vq1g";
    axios
      .get(mapUrl)
      .then((res) => {
        let result = res.data.features[0].center;
        callback(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setRegion = (region) => {
    this.setState({
      region: region,
    });
    this.getGeoLocation(region, (result) => {
      this.setState({
        lat: result[1],
        long: result[0],
      });
    });
  };

  render() {
    return (
      <div className="mapArea" style={{ width: "100%" }}>
        <div className="floatingForm">
          <FormComp setRegion={this.setRegion} />
        </div>
      </div>
    );
  }
}

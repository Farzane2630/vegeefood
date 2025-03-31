import React from 'react'
import { Map, InfoWindow, Marker } from "google-maps-react";

function MapComponent({state, containerStyle, onMapClicked, onMarkerClick}) {
  return (
    <Map
                google={window.google}
                onClick={onMapClicked}
                containerStyle={containerStyle}
              >
                <Marker onClick={onMarkerClick} name={"Current location"} />
    
                <InfoWindow
                  marker={state.activeMarker}
                  visible={state.showingInfoWindow}
                >
                  <div>
                    <h1>{state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
              </Map>
  )
}
export default MapComponent
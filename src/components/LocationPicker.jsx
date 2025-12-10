import React, { useState, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { X, MapPin, Navigation } from "lucide-react";
import "./LocationPicker.css";
// import dotenv from "dotenv";
import process from "process";




const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const libraries = ["places"];

const LocationPicker = ({ isOpen, onClose, onLocationSelect, initialLocation }) => {
  const [location, setLocation] = useState(initialLocation || null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const autocompleteRef = useRef(null);
  const apiKey = "AIzaSyAdvwoI9lrmqnEbjaGao94SaOtxFFie8VA";

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  // Reverse geocoding
  const getAddress = async (lat, lng) => {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
      );
      const data = await res.json();

      if (data.status === "OK") {
        setAddress(data.results[0].formatted_address);
        return data.results[0].formatted_address;
      } else {
        setAddress("Address not found");
        return "Address not found";
      }
    } catch {
      setAddress("Failed to fetch address");
      return "Failed to fetch address";
    }
  };

  // Get accurate location
  const getAccurateLocation = () => {
    setError("");
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setLocation({ lat, lng });
        await getAddress(lat, lng);
        setIsLoading(false);
      },
      () => {
        setError("Failed to get location. Please enable location services.");
        setIsLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  // When user selects a place
  const onPlaceSelected = async () => {
    const place = autocompleteRef.current.getPlace();

    if (!place || !place.geometry) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setLocation({ lat, lng });
    setAddress(place.formatted_address);
  };

  // Drag marker
  const handleMarkerDragEnd = async (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setLocation({ lat, lng });
    await getAddress(lat, lng);
  };

  // Confirm location
  const handleConfirm = () => {
    if (location && address) {
      onLocationSelect({
        latitude: location.lat,
        longitude: location.lng,
        address: address,
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="location-picker-overlay">
      <div className="location-picker-modal">
        <div className="location-picker-header">
          <h3>
            <MapPin size={20} />
            Select Workshop Location
          </h3>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="location-picker-content">
          {/* Action Buttons */}
          <div className="location-actions">
            <button
              onClick={getAccurateLocation}
              className="btn-gps"
              disabled={isLoading}
            >
              <Navigation size={16} />
              {isLoading ? "Getting Location..." : "Use My Location"}
            </button>
          </div>

          {/* Search Box */}
          {isLoaded && (
            <Autocomplete
              onLoad={(ref) => (autocompleteRef.current = ref)}
              onPlaceChanged={onPlaceSelected}
            >
              <input
                type="text"
                placeholder="Search address, place, shop, landmark..."
                className="location-search-input"
              />
            </Autocomplete>
          )}

          {/* Error Message */}
          {error && <div className="location-error">{error}</div>}

          {/* Location Info */}
          {location && (
            <div className="location-info">
              <p>
                <strong>Coordinates:</strong> {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
              </p>
              {address && (
                <p>
                  <strong>Address:</strong> {address}
                </p>
              )}
              <p className="location-hint">
                💡 Drag the marker to adjust the exact location
              </p>
            </div>
          )}

          {/* Google Map */}
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={
                location
                  ? { lat: location.lat, lng: location.lng }
                  : { lat: 20.5937, lng: 78.9629 }
              }
              zoom={location ? 17 : 5}
            >
              {location && (
                <Marker
                  position={{ lat: location.lat, lng: location.lng }}
                  draggable={true}
                  onDragEnd={handleMarkerDragEnd}
                />
              )}
            </GoogleMap>
          ) : (
            <div className="map-loading">Loading map...</div>
          )}

          {/* Confirm Button */}
          <div className="location-picker-footer">
            <button onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="btn-confirm"
              disabled={!location || !address}
            >
              Confirm Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPicker;

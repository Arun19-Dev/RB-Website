import React from "react";

const TestPage = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>
        🚗 RoadBuddy Test Page
      </h1>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#2563eb" }}>Website is Working!</h2>
        <p>If you can see this message, the React app is running correctly.</p>
        <img
          src="/RB_Logo.png"
          alt="RoadBuddy Logo"
          style={{ height: "100px", margin: "20px 0" }}
        />
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            Emergency Call
          </button>
          <button
            style={{
              backgroundColor: "#10b981",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Book Service
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h3>Quick Tests:</h3>
        <ul>
          <li>✅ React is rendering</li>
          <li>✅ CSS styles are working</li>
          <li>✅ Images can be loaded</li>
          <li>✅ Components are functional</li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;

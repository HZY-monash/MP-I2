import React, { useState } from "react";
import axios from "axios";

export default function Recognition() {
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
      const base64Image = reader.result.split(",")[1]; // Removes the initial part of the base64 data URL

      axios({
        method: "POST",
        url: "https://detect.roboflow.com/greenai-v3/1",
        params: {
          api_key: "Gm4XCZ0fWImlDMHY238L",
        },
        data: base64Image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then(function (response) {
          setResult(response.data); // Store the response data in state
        })
        .catch(function (error) {
          console.log(error.message);
        });
    };

    reader.readAsDataURL(file); // Reads the file as a data URL
  };

  return (
    <div>
    <input type="file" onChange={handleFileChange} />
    {result && (
      <div>
        <h2>Recognition Result:</h2>
        {result.predictions && result.predictions.length > 0 ? (
          result.predictions.map((prediction, index) => (
            <div key={index}>
              {prediction.class === "Compost" ? (
                <p>It is compostable</p>
              ) : (
                <p>Not compostable</p>
              )}
            </div>
          ))
        ) : (
          <p>No predictions available</p>
        )}
      </div>
    )}
  </div>
  );
}

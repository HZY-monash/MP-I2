import React, { useEffect } from "react";
import axios from "axios";
import fs from "fs";

const Test = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const image = fs.readFileSync("D:\Semester 4\Industry Experience\Main_Project\main-project\src\assets\Banana_(partially_peeled).jpg", {
          encoding: "base64",
        });

        const response = await axios.post(
          "https://classify.roboflow.com/compost-classification/2",
          image,
          {
            params: {
              api_key: "1cE3U2DcYpu3EWukwWlt",
            },
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return <div>This is here</div>;
};

export default Test;

import React, { useEffect } from "react";

const NoCleanUp = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("Tick Tanpa CleanUp");
    }, 1000);
  }, []);
  return (
    <div>
      <p>No Clean Up</p>
    </div>
  );
};

export default NoCleanUp;
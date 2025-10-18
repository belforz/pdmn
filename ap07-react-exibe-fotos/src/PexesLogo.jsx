import React from "react";

const PexesLogo = () => {
  return (
    <div className="m-4 text-center">
      <p>Photos provided by </p>
      <div className="p-2" style={{ backgroundColor: "dark" }}>
        <a href="https://www.pexels.com">
          <img
            src="https://images.pexels.com/lib/api/pexels-white.png"
            width={75}
          />
        </a>
      </div>
    </div>
  );
};

export default PexesLogo;

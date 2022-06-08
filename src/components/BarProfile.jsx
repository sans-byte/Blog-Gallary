import React from "react";

function BarProfile({ img, name, number }) {
  return (
    <div className="bar-profile">
      <div className="center">
        {img ? (
          <img src={`${img}`} alt="" className="avatar" />
        ) : (
          <span className="avatar"></span>
        )}
        <span>{name}</span>
      </div>
      {number ? <div>{number}</div> : null}
    </div>
  );
}

export default BarProfile;

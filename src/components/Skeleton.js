import React from "react";

function Skeleton() {
  return (
    <div className="card" aria-hidden="true">
      <div
        className="card-img-top placeholder"
        style={{ height: "200px", background: "#e9ecef" }}></div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        {/* <a href="#" className="btn btn-primary disabled placeholder col-6" tabIndex={-1}></a> */}
      </div>
    </div>
  );
}

export default Skeleton;

import React from "react";
import "./Studio.css";

const Studio = () => {
  //
  return (
    <section className="studio-wrapper">
      <div className="studio-select">
        <div className="studio-info-section">
          <img src="images/upload.png" width={50} alt="" />
          <span>
            Ajouter un fichier vidéo, audio, ou Image <br /> pour accelerer le
            temps de révision
          </span>
        </div>
      </div>
    </section>
  );
};

export default Studio;

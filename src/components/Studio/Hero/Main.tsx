import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>FileVert Studio</h1>
          </div>

          <div className="hero-title semi-title">
            <h2>
              Des créations éco-responsables <br /> grâce à notre plateforme{" "}
              <br /> de révision
            </h2>
          </div>

          <div className="flexColStart hero-des">
            <span>
              {" "}
              Réduisez votre empreinte carbone et travaillez plus efficacement
              avec{" "}
            </span>
            <span>
              notre plateforme de révision de vidéos ! En réduisant les délais
              de{" "}
            </span>
            <span>
              révision et de stockage de vos fichiers, vous économisez de
              l'énergie et{" "}
            </span>
            <span>protégez l'environnement.</span>
          </div>
          <div className="btn">
            <span>Démarrez</span>
          </div>
        </div>

        <div className="flexCenter hero-right">
          {/* right section */}
          <div className="image-container">
            <img src="images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

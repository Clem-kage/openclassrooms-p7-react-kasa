import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./../elements/footer";
import Carousel from "./../elements/carousel";
import "./../../style/accomPage.css";
import Display from "./../elements/display";
import Tag from "./../elements/tag";
export default function Logement() {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [host, setHost] = useState({});
  const [propDisplayD, setPropDisplayD] = useState({});
  const [propDisplayE, setPropDisplayE] = useState({});
  const [propCarousel, setPropCarousel] = useState([]);
  const [propTag, setPropTag] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    //fonction d'appel des données
    const fetchData = async () => {
      try {
        const response = await fetch("./../data/logements.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données.");
        }
        const data = await response.json();
        const foundItem = data.find((item) => item.id === id);
        if (!foundItem || foundItem === undefined) {
          window.location.href = "http://localhost:3000/error";
          return;
        } else {
          setItem(foundItem);
          setHost(foundItem.host);
          setPropCarousel(foundItem.pictures);
          setPropTag(foundItem.tags);
          setPropDisplayD({
            domain: "Description",
            text: foundItem.description,
          });
          setPropDisplayE({ domain: "Equipement", text: foundItem.equipments });
          setRating(foundItem.rating);
        }
      } catch (error) {
        console.error("Problème intèrne :", error);
        window.location.href = "http://localhost:3000/error";
      }
    };

    fetchData();
  }, [id]);

  //fonctionnement du rating(étoiles attriibuées)
  const points = [];
  const miss = [];
  for (let i = 1; i <= 5; i++) {
    if (i > parseInt(rating)) {
      miss.push(
        <svg
          key={i}
          fill="#E3E3E3"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      );
    } else {
      points.push(
        <svg
          key={i}
          fill="#FF6060"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      );
    }
  }
  const result = [...points, ...miss];

  return (
    <div>
      <main id="accom">
        <Carousel data={propCarousel}></Carousel>
        <div className="meta">
          <div className="left">
            <h2>{item.title}</h2>
            <p>{item.location}</p>
            <div className="tagContainer">
              {propTag.map((element, index) => (
                <Tag key={index} data={element} />
              ))}
            </div>
          </div>
          <div className="right">
            <div className="profil">
              <p>{host.name}</p>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${host.picture})`,
                }}
              ></div>
            </div>
            <div className="rating">
              {/* <p>{item.rating}/5</p> */}
              {result}
            </div>
          </div>
        </div>

        <div className="metaText">
          <div className="descContainer">
            <Display data={propDisplayD} arrayFormat={false} />
          </div>
          <div className="equipContainer">
            <Display data={propDisplayE} arrayFormat={true} />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

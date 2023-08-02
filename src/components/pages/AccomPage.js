import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./../elements/footer";
import Carousel from "./../elements/carousel";
import "./../../style/accomPage.css";
import Display from "./../elements/display";
import Tag from "./../elements/tag";
import Rating from './../elements/rating'

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
          setPropDisplayE({ domain: "Équipements", text: foundItem.equipments });
          setRating(foundItem.rating);
        }
      } catch (error) {
        console.error("Problème intèrne :", error);
        window.location.href = "http://localhost:3000/error";
      }
    };

    fetchData();
  }, [id]);



  return (
    <div>
      <main id="accom">
        <Carousel data={propCarousel}></Carousel>
        <div className="meta">
          <div className="left">
            <h2>{item.title}</h2>
            <p className="location">{item.location}</p>
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
  
            <Rating data={rating}/>

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
      <Footer/>
    </div>
  );
}

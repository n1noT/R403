export default function Card({ image, title }) {
    return (
        <>
            <img src={image} alt="" className="accueil__list-img"></img>
            <h3 className="accueil__list-subtitle">{title}</h3>
        </>
  
    );
  }
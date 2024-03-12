export default function Card({ image, title }) {
    return (
        <>
            <img src={image} alt="" class="accueil__list-img"></img>
            <h3 class="accueil__list-subtitle">{title}</h3>
        </>
  
    );
  }
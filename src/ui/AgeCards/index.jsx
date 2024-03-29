import Card from "./Card.jsx";
import { Link } from "react-router-dom";


export default function AgeCards(age) {
  let ageCards = age.ages.map((age) => {
    // console.log(index);
    return (
      <li key={age.id} className="accueil__list-item">
        <Link to={age.link} className="accueil__list-link">
       
              <Card
              image={age.image}
              title={age.title}
            />

        </Link>
      </li>
    );
  });
  return (
    <ul className="accueil__list">
      {ageCards}
    </ul>
  );
}

import Card from "./Card.jsx";


export default function AgeCards(age) {
  console.log(age)
  let ageCards = age.ages.map((age) => {
    // console.log(index);
    return (
      <li key={age.id} class="accueil__list-item">
        <Card
          image={age.image}
          title={age.title}
        />
      </li>
    );
  });
  return (
    <ul class="accueil__list">
      {ageCards}
    </ul>
  );
}

import Card from "./Card.jsx";


export default function Accueil(age) {
  let age = age.map((age) => {
    // console.log(index);
    return (
      <li key={age.id}>
        <Card
          image={age.image}
          title={age.title}
        />
      </li>
    );
  });
  return (
    <ul class="accueil__list">
      {age}
    </ul>
  );
}

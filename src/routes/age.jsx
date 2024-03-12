import { fetchAgeData} from '../lib/loaders';
import AgeCards from '../ui/AgeCards'
import { useLoaderData, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';



export async function loader({params}) {
    let ageData =  await fetchAgeData(params.ageName);

    return defer({ age:ageData});

    
}


export default function Accueil() {

    const data = useLoaderData();

  return (
    <>
      <section>
      <h2 className="accueil__subtitle">Bienvenue sur ton application préférée
            pour prendre soin de tes dents !</h2>
      <Suspense >
            <Await resolve={data.age} errorElement={<div>Failed to load age data</div>}>
                {ageData =>  <AgeCards {...ageData}></AgeCards>}
            </Await>
           
        </Suspense>

      </section>
    </>
  );
}

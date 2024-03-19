import { fetchOneAgeData} from '../lib/loaders';
import ButtonMenu from '../ui/ButtonMenu'
import { useLoaderData, defer, Await } from 'react-router-dom';
import {Link} from 'react-router-dom';




export async function loader({params}) {
    let ageData =  await fetchOneAgeData(params.ageName);
    return ageData;

    
}


export default function Menu() {

    const data = useLoaderData();

  return (
    <>
    <div className='menu__title'>
      <div className="menu__title-box ">
        <img src={data.image} alt="" className="menu__title-img"></img>
      </div>
      <h3 className="menu__title-subtitle">Salut mon <span>{data.title}</span> !</h3>
    </div>
    <div className='menu__list-box'>
      <ul className='menu__list'>
        <li key="1" className="menu__list-item">
          <Link to="/timer" className="menu__list-link">
        
                <ButtonMenu
                image="../timer.svg"
                title="Mon chronomètre"
              />

          </Link>
        </li>
        <li key="2" className="menu__list-item">
          <Link to="/soins "className="menu__list-link">
        
                <ButtonMenu
                image="../soins.svg"
                title="Prendre soins de mes dents"
              />

          </Link>
        </li>
        <li key="3" className="menu__list-item">
          <Link to="/quizz" className="menu__list-link">
        
                <ButtonMenu
                image="../quizz.svg"
                title="Le quizz des dents"
              />

          </Link>
        </li>
      </ul>
      </div>
    </>
  );
}

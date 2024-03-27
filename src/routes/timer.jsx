import TimerCircle from '../ui/Timer'
import { Outlet } from 'react-router-dom';
import { useLoaderData, defer, Await } from 'react-router-dom';
import { fetchOneAgeData} from '../lib/loaders';
import { Link } from 'react-router-dom';

export async function loader({params}) {
  let ageData =  await fetchOneAgeData(params.ageName);
  return {ageData : ageData, age : params.ageName};
  
}

export default function Timer() {

  const data = useLoaderData();

  return (
    <>
      <section className='main'>
        <Link to={"../menu/" + data.age} >
                <img src='../arrow.svg' className='arrow'></img>
        </Link>
        <TimerCircle img={data.ageData.image} />
      </section>
    </>
  );
}

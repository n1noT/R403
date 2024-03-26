import Title from '../ui/Title'
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <section className='main'>
        <Title/>
        <Outlet/>
        
      </section>
    </>
  );
}

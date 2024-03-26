import TimerCircle from '../ui/Timer'
import { Outlet } from 'react-router-dom';

export default function Timer() {

  return (
    <>
      <section className='main'>
        <TimerCircle/>
      </section>
    </>
  );
}

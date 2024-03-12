import { fetchOurTeams, fetchTestimonialData} from '../lib/loaders';
import Teams from '../ui/Team'
import { useLoaderData, defer, Await } from 'react-router-dom';
import Testimonial from '../ui/Testimonial';
import { Suspense } from 'react';
import TeamSkeleton from '../ui/Team/TeamSkeleton';


export async function loader({params}) {
    let teamData =  fetchOurTeams(params.teamName);
    let testimonialData = await fetchTestimonialData(params.teamName);

    return defer({ team:teamData, testimonial:testimonialData });

    
}


export default function OurTeams() {

    const data = useLoaderData();

  return (
    <>
      <section>
        <Suspense fallback={<TeamSkeleton />}>
            <Await resolve={data.team} errorElement={<div>Failed to load team data</div>}>
                {teamData =>  <Teams {...teamData}></Teams>}
            </Await>
           
        </Suspense>
        <Testimonial data={data.testimonial}></Testimonial>
      </section>
    </>
  );
}

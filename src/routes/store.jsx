import { fetchPricingData } from '../lib/loaders';
import Pricing from '../ui/Pricing'
import { useLoaderData } from 'react-router-dom';


export async function loader() {
    let pricingData = await fetchPricingData()
    return pricingData;
    
}


export default function Store() {

    const pricing = useLoaderData();

  return (
    <>
      <section>
        <Pricing {...pricing}></Pricing>
      </section>
    </>
  );
}

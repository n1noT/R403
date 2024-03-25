import { fetchQuizzData} from '../lib/loaders';
import { useLoaderData } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Answer from '../ui/Answer';
import React, { useState } from 'react';




export async function loader({params}) {
    let quizzData =  await fetchQuizzData(params.ageName);
    return quizzData;

    
}


export default function Quizz() {

    const [isIndex, setIsIndex] = useState(0);

    const data = useLoaderData();

    
    function handler(ev){

      let valid = document.querySelector('[data-valid=true]');
      valid.classList.add('valid');
      
      if(ev.target.dataset.valid == 'false'){
        ev.target.classList.add('unvalid');
      }
      
      let suiv = document.querySelector('#next');
      suiv.style.display = 'block';
    }

    function handlerQues(ev){
      let suiv = document.querySelector('#next');
      setIsIndex(isIndex+1)
    }

    
    let ques = data[isIndex].questions.map((question) => {
      console.log(question)
      return <Answer  title={question.answer} valid={question.valid} className={'quizz__list-item'} handler={handler}/>
    })


  return (
    <>
    <Link to="../" >
      <img src='../arrow.svg' className='arrow'></img>
    </Link>
    <section className='quizz'>
      <h3 className='quizz__title'>{data[0].title}</h3>
      <ul className='quizz__list'>
        {ques}
      </ul>
      <button className='quizz__next' id="next">
        Question Suivante
      </button>
    </section>
     </>
  );
}

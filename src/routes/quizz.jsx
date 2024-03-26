import { fetchQuizzData } from '../lib/loaders';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Answer from '../ui/Answer';
import React, { useState } from 'react';




export async function loader({ params }) {
  let quizzData = await fetchQuizzData(params.ageName);
  return {quizz : quizzData, age: params.ageName};


}


export default function Quizz() {

  const [isIndex, setIsIndex] = useState(0);

  const data = useLoaderData();


  function handler(ev) {

    let valid = document.querySelector('[data-valid=true]');
    valid.classList.add('valid');

    if (ev.target.dataset.valid == 'false') {
      ev.target.classList.add('unvalid');
    }

    let suiv = document.querySelector('#next');
    suiv.style.display = 'block';
  }

  function handlerQues() {
    let suiv = document.querySelector('#next');
    suiv.style.display = 'none';

    let answers = document.querySelectorAll('#answer');
    answers.forEach((ans) => {
      ans.classList.remove('valid')
      ans.classList.remove('unvalid')
    })
    setIsIndex(isIndex + 1)
  }

  function handlerRestart() {
    let suiv = document.querySelector('#next');
    suiv.style.display = 'none';

    let answers = document.querySelectorAll('#answer');
    answers.forEach((ans) => {
      ans.classList.remove('valid')
      ans.classList.remove('unvalid')
    })

    setIsIndex(0)
  }

  
  if (data.quizz[isIndex] != undefined) {
    let ques = data.quizz[isIndex].questions.map((question) => {
      return <Answer title={question.answer} valid={question.valid} className={'quizz__list-item'} handler={handler} />
    })

    return (
      <>
        <Link to={"../menu/" + data.age} >
          <img src='../arrow.svg' className='arrow'></img>
        </Link>
        <section className='quizz'>
          <div className="quizz__title-box ">
            <img src={"../requin-" + data.age + ".svg"} alt="" className="quizz__title-img"></img>
          </div>
          <h3 className='quizz__title'>{data.quizz[isIndex].title}</h3>
          <ul className='quizz__list'>
            {ques}
          </ul>
          <button className='quizz__next' id="next" onClick={handlerQues}>
            Question Suivante
          </button>
        </section>
      </>
    );
  }
  else{
    return (
      <>
        <Link to={"../menu/" + data.age} >
          <img src='../arrow.svg' className='arrow'></img>
        </Link>
        <section className='quizz'>
          <div className="quizz__title-box ">
            <img src={"../requin-" + data.age + ".svg"} alt="" className="quizz__title-img"></img>
          </div> 
          <h3 className='quizz__title'>Bravo tu as répondu à toutes les questions !</h3>
          <button className='quizz__restart' id="next" onClick={handlerRestart}>
            Recommencer !
           
          </button>
        </section>
      </>
    );
  }

}

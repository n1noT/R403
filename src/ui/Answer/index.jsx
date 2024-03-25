export default function Answer({title, valid, className, handler}){
    

    return(
        <li className={className} id="answer" onClick={handler} data-valid={valid}>
            <h4  className="quizz__list-title">
                {title}
            </h4>
        </li>
    )
}
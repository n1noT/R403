

export async function fetchAgeData(){
    let answer = await fetch('/src/lib/data/age-data.json');
    let data = await answer.json();
    return data;
}

export async function fetchOneAgeData(ageName){
    let answer = await fetch('/src/lib/data/menu-data.json');
    let data = await answer.json();
    
    return data[ageName];
}

export async function fetchQuizzData(ageName){
    let answer = await fetch('/src/lib/data/quizz-data.json');
    let data = await answer.json();
    data = data[ageName];
    // choose 3 random testimonies
    let ques = [];
    for(let i=0; i<3; i++){
        let index = Math.floor(Math.random() * data.length); // random index
        ques.push(data[index]); // add to testimonies
        data.splice(index, 1); // remove from data to avoid duplicates
    }
    return ques;
}


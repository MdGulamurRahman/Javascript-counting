//box-1
let countOne = 0;
let newProject = setInterval(project, 10);
function project(){
    countOne++;
    const getCountOne = document.getElementById("count_one").innerHTML = countOne;
    if(countOne === 300){
        clearInterval(newProject)
    }
}

//box-2
let countTwo = 0;
let newProjectTwo = setInterval(projectTwo, 10)
function projectTwo(){
    countTwo++;
    const getCountTwo = document.getElementById("count_two");
    getCountTwo.innerHTML = countTwo;
    if(countTwo === 200){
        clearInterval(newProjectTwo)
    }
}

//box-3
let countThree = 0;
let newProjectThree = setInterval(projectThree, 10)
function projectThree(){
    countThree++;
    const getCountThree = document.getElementById("count_three").innerHTML = countThree;
    if(countThree === 150){
        clearInterval(newProjectThree)
    }
}


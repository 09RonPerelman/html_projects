function firstFunc(array1){
const map1 = array1.map(x => x * 2);
console.log(map1);
}


function secondFunc(array2){
    const filt1 = array2.filter(element => typeof element == 'number')
    console.log(filt1);
}

function thirdFunc(array3){
    let sum = 0;
    const reduced = array3.sort(function(a, b){return a-b});
    for(let i = 0 ; i < reduced.length ; i ++ ){
        if(array3[i] !== array3[i + 1] && i !== reduced.length){
            sum += array3[i];
        }
    }
    console.log(sum);
}

function fourthFunc(array4){
   array4.forEach(element => {
    if(element.length >= 6){
        console.log(element);
    }
   });
}

function fifthFunc(array5){
    const indexFinder = array5.findIndex(element => element.id > 13)
    console.log(indexFinder);
}

function sixthFunc(){
let family = ['baby','mommy','daddy','grandma','grandpa','Lets go hunt'];
family.forEach(name => {console.log((`${name} shark ${'doo '.repeat(6)} \n`).repeat(3))});
}


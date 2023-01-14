let count = 10
let h1 = document.getElementById("timer");

function func (){
    // console.log(count);
    h1.innerText=count
    count--
    if(count<0){
        clearInterval(x);
        h1.innerText="Happy Independence Day"
    }
}

let x = setInterval(func, 1000)




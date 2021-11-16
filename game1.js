const input=document.querySelectorAll(".box");
console.log(input);

var isFlipped=true;
var firstBox;
var secondBox;

input.forEach((x)=>{x.addEventListener("click", flip)
// console.log(x)
});

function flip(){
    console.log(this);
    this.classList.add('flip');
    if(isFlipped){
        firstBox=this;
        isFlipped=false;

    }
    else{
    secondBox=this;
    isFlipped=true;
    check(firstBox,secondBox);
    }
}

function check(first,second){
    if(first.dataset.name===second.dataset.name){
        console.log("success");
        first.removeEventListener("click",flip);
        second.removeEventListener("click",flip);
        // setTimeout(()=>{  second.classList.remove("flip");  first.classList.remove("flip");},10000);
        

    }
    else{
    console.log("fail");
    setTimeout(()=>{  second.classList.remove("flip");  first.classList.remove("flip");},1200);
    reset();
    }
}


function reset() {
    isFlipped = true;
    firstBox = null;
    secondBox = null;

    input.forEach((x) => {
        x.addEventListener("click", flip)
        // console.log(x)
    });
    //    shuffle()
}

function shuffle() {
    input.forEach((x) => {
        var index = Math.floor(Math.random() * 16);
        x.style.order = index;
        console.log(index);
    });


}
shuffle();






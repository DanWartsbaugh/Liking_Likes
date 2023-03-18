var likesCounts=[9,12,9]

var a=document.querySelector("#count1")
function oneUp1(element){
    likesCounts[0]++
    a.innerText=likesCounts[0] + " Like(s)";
}

var b=document.querySelector("#count2")
function oneUp2(element){
    likesCounts[1]++
    b.innerText=likesCounts[1] + " Like(s)";
}

var c=document.querySelector("#count3")

function oneUp3(element){
    likesCounts[2]++
    c.innerText=likesCounts[2] + " Like(s)";
}


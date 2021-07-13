//==============BT1==============//

let sum = 0;
let n= 1;
let finalN;
while(sum<10000){
    sum = sum +n;
    n++   
}
let divResult1 = document.getElementById("result1");
let pResult1 = document.createElement("p")
pResult1.innerHTML = `Kết quả cần tìm là:   ${n}`;
divResult1.appendChild(pResult1)

//==============BT1==============//


//==============BT2==============//
let bt2 = document.getElementById("bt2").addEventListener("click", function(){
    let divResult2 = document.getElementById("result2");
    divResult2.innerHTML = "";
    divResult2.style.padding="4px 10px";
    divResult2.style.height="30px"
    let numX = +document.getElementById("numX").value;
    let numN = +document.getElementById("numN").value;
    let sum2 = 0;
    let pow = 1;
    for ( let i=1; i<=numN; i++){
        pow = i*numX;
        sum2 = sum2 +pow;
    }
    
    let pResult2 = document.createElement("p");
    
    pResult2.innerHTML=sum2
    divResult2.appendChild(pResult2)
    

})
//==============BT2==============//


//==============BT3==============//
let bt3 = document.getElementById("bt3").addEventListener("click", function(){
    let divResult3 = document.getElementById("result3");
    divResult3.innerHTML = ""
    let numN3 = +document.getElementById("numN3").value;
    let time3= 1
    for (let j=1; j<=numN3; j++){
        time3= time3 * j;
    }
    let pResult3 = document.createElement("p");
    pResult3.innerHTML=time3
    divResult3.appendChild(pResult3)
})
//==============BT3==============//


//==============BT4==============//
let bt4 = document.getElementById("bt4").addEventListener("click", function(){
    let divResult4 = document.getElementById("result4");
    let divContent = document.getElementById("content");
    divContent.classList.remove("d-none")
    
    let oddEven = document.getElementsByClassName("odd-even");
    console.log(oddEven);
    for(let m=0; m<10; m++){
        if (m%2 == 0){
            oddEven[m].classList.add("even");
            console.log(m);
        }else{
            oddEven[m].classList.add("odd");
            console.log(m);
        }
    }
})

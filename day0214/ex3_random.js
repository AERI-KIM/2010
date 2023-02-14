// 임의의 숫자를 구한다 Math.random()
var a=Math.random();
console.log(a);  // 0.0000 ~0.9999 사이의 실수형 난수 발생 
console.log("0~9사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){     //i 는 구하는 난수의 개수 
    let r=parseInt(Math.random()*10);  // *10 출력되는 숫자의 범위
    console.log(r);
}

console.log("0~99사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*100);
    console.log(r);
}

console.log("1~10사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*10)+1;  //초기 값이 0이 아닐 경우 +1 해줘야 됨
    console.log(r);
}

console.log("0~45사이의 난수 5개 구하기");
for(let i=1;i<=5;i++){
    let r=parseInt(Math.random()*45)+1;  // 45 뜻은 44 까지 구해라 라는 뜻 그래서 +1 해주면 =45까지 구해짐?? //  그냥 46 하면 안됨??
    console.log(r);
}
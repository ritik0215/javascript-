let score= "100abc";
console.log(typeof score);
let score1= Number(score);
console.log(typeof score1);
console.log(score1);


//"100"=>100
//true=>1
//false=>0
//null=>0
//undefined=>NaN
//"20acbbc"=>NaN

 let isloggedIn= "";

 let booleanisloggedIn= Boolean(isloggedIn);
    console.log(booleanisloggedIn);


 //for boolean
 //0=>false
//1=>true
//empty string=>false 
//non empty string=>true  


 let str1="hello";
 let str2="world";
 let str3= str1+str2;
    console.log(str3);
    console.log(typeof str3);   


console.log("5"+5);//55
console.log(5+3+"5");//85
console.log(5+5);       //10
console.log("5"+3+5);//535
console.log("5"+true);//5true
console.log("5"+false);//5false
console.log("5"+null);//5null
console.log("5"+undefined);//5undefined
console.log("5"+NaN);//5NaN
console.log("5"+Infinity);//5Infinity    

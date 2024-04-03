//-------->>>>>> Iterating through objects

let rectangle={
    length:2,
    breadth:4
};
//{For-in}

for(let key in rectangle){
    console.log(key,rectangle[key]);
}

//{For-of}-> can be applied onlt on iterables

for(let key of Object.entries(rectangle)){
    console.log(key);
}

if('length' in rectangle){
    console.log('present')
}
else{
    console.log('absent');
}
function  filter357(a,b){
    var n=[];
    for(var i=a;i<=b;i++){
        if(i%3!=0 & i%5!=0 & i%7!=0){
            n.push(i);
        }
    }
    return n;
}

console.log('5~10',filter357(5,10));
console.log('5~15',filter357(5,15));

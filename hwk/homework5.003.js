function isPrime(n){
    //a=2
    for(var i=2;i<=n;i++){
        if(n%i == 0){return false;}
    return true;    
    }
}

console.log('isPrime(6)',isPrime(6)); //F
console.log('isPrime(5)',isPrime(5)); //T
console.log('isPrime(401)',isPrime(401)); //T

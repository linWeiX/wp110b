function nj(n){
    var a=1;
    for(var i=1;i<=n;++i){
        a = a * i;
    }
    return a;
}

console.log('factorial(5)',nj(5));

// var a = parseInt(Deno.args[5]);
// console.log('factorial(a)',a);

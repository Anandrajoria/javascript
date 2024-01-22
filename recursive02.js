function facorial(n){
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return n*facorial(n-1);
    }
}

console.log(facorial(8))
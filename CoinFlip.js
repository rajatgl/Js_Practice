function coinFlip(){
    const heads = 0;
    let coinFlip = Math.floor(Math.random()*10)%2;
    if(coinFlip == heads){
	    console.log("Its Heads");
	    return;
    }else{
	    console.log("Its Tails");
    }
}
//flip coin 5 times
for(i=0;i<5;i++)
    coinFlip()
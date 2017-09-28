console.log("sing.js loaded");
let bottleInput = parseInt(prompt("Please let me know how many bottles you want."));
for(var i = bottleInput; i>0; i--){
	if(i === 2){
		console.log(
			`${i} bottles of beer on the wall,
${i} bottles of beer!
Take one down and pass it around,
${i-1} bottle of beer on the wall!`)
	}else if(i === 1){
		console.log(
			`${i} bottle of beer on the wall,
${i} bottle of beer!
Take one down and pass it around,
No more bottles...`)
	}else{
		console.log(
			`${i} bottles of beer on the wall,
${i} bottles of beer!
Take one down and pass it around,
${i-1} bottles of beer on the wall!`)
	}
}
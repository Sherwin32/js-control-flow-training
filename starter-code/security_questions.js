console.log("security_questions.js loaded");
let securityQuestions = [
	{question:'what?', expectedAnswer:'Yeah!'},
	{question:'Wanna hear a story?', expectedAnswer:'No'},
	{question:'What\'s your name?', expectedAnswer:'Why would I tell you?'},
	{question:'What should I ask you?', expectedAnswer:'I don\'t know'}
];

for(var i=0; i<securityQuestions.length; i++){
	var answer = prompt(securityQuestions[i].question);	
	if(answer!==securityQuestions[i].expectedAnswer){
		alert("WRONG ANSWER!");
		break;
	}
}

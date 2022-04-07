import questions from "./data";
var generatedSequence=[];
const max=36;
var i=0;
while(i<10){
    var x = Math.floor(Math.random()*max);
    if(generatedSequence.indexOf(x)===-1){
        generatedSequence.push(x);
        i=i+1;
    }
}

var generatedQuestions=[];
for(var j=0;j<10;j++){
    generatedQuestions.push(questions[generatedSequence[j]]);
}

export default generatedQuestions;



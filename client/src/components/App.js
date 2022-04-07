import React from 'react';
import Question from './Question';
import generatedQuestions from '../randomGenerator';
import './App.css';

function createQuestion(question){
    return(<Question
    id={question.varname} 
    key={question.varname}
    text={question.questiontext}
    option1={question.option1}
    option2={question.option2}
    option3={question.option3}
    option4={question.option4}
    option5={question.option5}
    option6={question.option6}
    option7={question.option7}
    />);
}

function App(){
    return(<div>
        <form method="post" action="/end">
        {generatedQuestions.map(createQuestion)}
        <br/><br/>
        <button type="Submit">Submit</button>
        </form>
        <a href="/download">Download CSV</a>
    </div>);  
}

export default App;
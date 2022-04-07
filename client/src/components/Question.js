import React from "react";

function Question(props){
    return(
        <div className="form-group">
            <label htmlFor="question"><h3 className="ques">{props.text}</h3></label>
            <input className="form-check-input" type="radio" name={props.text} value="Strongly Disagree"/><label htmlFor="form-check-label">{props.option1}</label><br/>
            <input className="form-check-input" type="radio" name={props.text} value="Disagree"/><label htmlFor="form-check-label">{props.option2}</label><br/>
            <input className="form-check-input" type="radio" name={props.text} value="Slightly Disagree"/><label htmlFor="form-check-label">{props.option3}</label><br/>
            <input className="form-check-input" type="radio" name={props.text} value="Neutral"/><label htmlFor="form-check-label">{props.option4}</label><br/>
            <input className="form-check-input" type="radio" name={props.text} value="Slightly Agree"/><label htmlFor="form-check-label">{props.option5}</label><br/>
            <input className="form-check-input" type="radio" name={props.text} value="Agree"/><label htmlFor="form-check-label">{props.option6}</label><br/>
            <input className="form-check-input" type="radio" name={props.text} value="Strongly Agree"/><label htmlFor="form-check-label">{props.option7}</label><br/>
            
        </div>
    )
}

export default Question;

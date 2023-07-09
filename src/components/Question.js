import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


export default function Question(props) {
    // console.log(props.question.currentQuestion)

    const [answerGiven, setAnswerGiven] = useState();
    const [showMessageBool, setShowMessageBool] = useState(false);
    const [showMessage, setShowMessage] = useState();



    const handleChange = (event) => {
        setAnswerGiven(event.target.value);
        // console.log(event.target.value);
    }
    const okHandler = (event) => {
        if (answerGiven == props.question.Answer) {
            setShowMessage("your answer is correct");
            props.setTotalScore(props.totalscore + 1)
            setShowMessageBool(true);
        }
        else {
            var wrongMessage = `Your answer is Wrong correct answer is ${props.question.Answer}`
            setShowMessage(wrongMessage)
            setShowMessageBool('true');
        }
    }
    const nextButtonHandler = () => {
        setAnswerGiven();
        setShowMessageBool(false);
        setShowMessage('');
        props.nextHandler();
    }

    useEffect(() => {
        console.log('Use effect called')
        setAnswerGiven();
        setShowMessageBool(false);
        setShowMessage('');
    }, [props.currentQuestion])


    return (
        <>
            <h2>{props.currentQuestion}</h2>
            <h3 data-testid="question">{props.question.Question}</h3><br />
            <input type="radio" name="answer" value={1} onChange={handleChange} checked={answerGiven == 1} data-testid="option-1" /> {props.question.Option1}<br />
            <input type="radio" name="answer" value={2} onChange={handleChange} checked={answerGiven == 2} data-testid="option-2" /> {props.question.Option2}<br />
            <input type="radio" name="answer" value={3} onChange={handleChange} checked={answerGiven == 3} data-testid="option-3" /> {props.question.Option3}<br />
            <input type="radio" name="answer" value={4} onChange={handleChange} checked={answerGiven == 4} data-testid="option-4" /> {props.question.Option4}<br />

            {showMessageBool && <p data-testid="validate-answer" style={{ color: showMessage === "your answer is correct" ? "green" : "red" }}>{showMessage}</p>}
            <button onClick={okHandler} data-testid="ok">Ok</button>
            <button onClick={nextButtonHandler} data-testid="next">Next</button>
        </>
    )
}
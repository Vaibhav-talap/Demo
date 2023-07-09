import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import questions from '../api/questionBank.json'
import Question from "../components/Question";

export default function Quiz() {

    const { id } = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalscore, setTotalScore] = useState(0);
    const [showFinalResult, setShowFinalResult] = useState(false);

    const nextHandler = () => {

        if (currentQuestion + 1 < questions[(id - 1)].questionbank.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setShowFinalResult(true);

        }
    }
    useEffect(() => {
        const identifier = setTimeout(() => {
            nextHandler();
        }, 10000);

        return () => {
            clearTimeout(identifier);
        }
    }, [currentQuestion])


    return (
        <>
            {showFinalResult ? (<div>
                <h3>Thanks for attempting the test</h3>
                <h1 data-testid="score">Your Score is :- {totalscore}</h1>
                <h3 data-testid="correct-question">Total Correct :- {totalscore}</h3>
                <h3 data-testid="incorrect-question">Total Incorrect :- {(questions[(id - 1)].questionbank.length) - totalscore}</h3>

            </div>) : (
                <Question question={questions[(id - 1)].questionbank[currentQuestion]} currentQuestion={currentQuestion + 1} nextHandler={nextHandler} totalscore={totalscore} setTotalScore={setTotalScore} />
            )
            }
        </>
    );

}
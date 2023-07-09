import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import questionnaires from '../api/questionnaire.json'

export default function Home() {

    return (
        <>
            <h1>Questionnaires</h1>
            {
                questionnaires.map((questionnaire, index) => (
                    <>
                        <h3 data-testid={`title-${questionnaire.title}`}>{questionnaire.title}</h3>
                        <p data-testid="questionnaire.number">No of Questions {questionnaire.questions}</p>
                        <Link to={`/questionnaire/${questionnaire.id}`}><button data-testid={"attempt"}>attempt Quiz</button></Link>

                    </>
                ))
            }
        </>
    )
}
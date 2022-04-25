import React, {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Answer from "./Answer";
import Start from "./Start";
import End from "./End";
import {useParams} from "react-router-dom";

let interval;

const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        if (step === 3) {
            clearInterval(interval);
        }
        getAllQuizes();
    }, [step]);
    const superId = useParams()

    const getAllQuizes = async () => {
        await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/' + superId.id,
            {
                headers: {
                    "X-Access-Token": '2471c203ed24f0cb2f19bd9062ec835f19a24e63bfd6e912dfba57fd0dc8c900',
                }
            })
            .then((response) => {
                // console.log(response.data)
                const myQuiz = response.data;
                setQuestions(myQuiz.questions);
                console.log(questions)
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const quizStartHandler = () => {
        setStep(2);
        interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    return (
        <div>
            <NavBar/>
            <div className="Quiz">


                {step === 1 && <Start onQuizStart={quizStartHandler}/>}


                {step === 2 && <Answer
                    data={questions[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={questions.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                />
                }
                {
                    step === 3 &&
                    <End
                        results={answers}
                        data={questions}
                        time={time}
                    />
                }
            </div>
        </div>
    )
}
export default Quiz;

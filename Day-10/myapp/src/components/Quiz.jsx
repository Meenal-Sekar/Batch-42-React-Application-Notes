import React, { useState } from "react";

function Quiz() {

const questions = [
{
questionText: "Who is Prime Minister of India?",
answerOptions: [
{ answerText: "Vijay Rupani", isCorrect: false },
{ answerText: "Manmohan Singh", isCorrect: false },
{ answerText: "Narendra Modi", isCorrect: true },
{ answerText: "Deep Patel", isCorrect: false },
],
},

{
questionText: "Who is CEO of Tata?",
answerOptions: [
{ answerText: "Jeff Bezos", isCorrect: false },
{ answerText: "Ratan Tata", isCorrect: true },
{ answerText: "Mukesh Ambani", isCorrect: false },
{ answerText: "Gautam Adani", isCorrect: false },
],
},

{
questionText: "Who is richest person in the world?",
answerOptions: [
{ answerText: "Jeff Bezos", isCorrect: false },
{ answerText: "Elon Musk", isCorrect: true },
{ answerText: "Mukesh Ambani", isCorrect: false },
{ answerText: "Warren Buffett", isCorrect: false },
],
},

{
questionText: "How many countries are in the world?",
answerOptions: [
{ answerText: "120", isCorrect: false },
{ answerText: "183", isCorrect: false },
{ answerText: "170", isCorrect: false },
{ answerText: "195", isCorrect: true },
],
},
];

// State
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);

const handleAnswerButtonClick = (isCorrect) => {

if (isCorrect) {
setScore(score + 1);
}

const nextQuestion = currentQuestion + 1;

if (nextQuestion < questions.length) {
setCurrentQuestion(nextQuestion);
} else {
setShowScore(true);
}

};

return (

<div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">

<div className="bg-white p-8 rounded-xl shadow-xl w-[400px] text-center">

<h1 className="text-3xl font-bold mb-6 text-gray-700">
Quiz App
</h1>

{showScore ? (

<div className="text-xl font-semibold text-green-600">
You scored {score} out of {questions.length}
</div>

) : (

<>

<div className="mb-6">

<div className="text-gray-500 mb-2">
Question {currentQuestion + 1} / {questions.length}
</div>

<div className="text-lg font-semibold">
{questions[currentQuestion].questionText}
</div>

</div>

<div className="grid gap-3">

{questions[currentQuestion].answerOptions.map((answerOption, index) => (

<button
key={index}
onClick={() =>
handleAnswerButtonClick(answerOption.isCorrect)
}
className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
>

{answerOption.answerText}

</button>

))}

</div>

</>

)}

</div>

</div>

);

}

export default Quiz;
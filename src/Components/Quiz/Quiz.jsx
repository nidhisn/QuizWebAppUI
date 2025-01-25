import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30); // Timer set to 30 seconds per question
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  useEffect(() => {
    axios
      .get(`http://localhost:8080/question/category/${category}`)
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch((error) => console.error(error));
  }, [category]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion(); // Automatically move to the next question
          return 30; // Reset timer for the next question
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedOption(selectedOption); // Track the selected option
    if (selectedOption === currentQuestion.right_answer) {
      setScore(score + 1);
    }

    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: selectedOption,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30); // Reset the timer for the next question
      setSelectedOption(null); // Reset selected option
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.quizContainer}>
      <div className={styles.header}>
        <span className={styles.questionCount}>
          {currentQuestionIndex + 1} of {questions.length} Question
        </span>
        <div className={styles.timer}>
          <img src="../images/timer.png" alt="Timer" />
          <span>{timeLeft}s</span>
        </div>
      </div>

      <hr
        style={{
          backgroundColor: "black",
          color: "black",
          borderColor: "black",
          width: "90%",
          height: "0.1px",
        }}
      />
      <div className={styles.questionCard}>
        <h3>{currentQuestion.questionTitle}</h3>
        <div className={styles.options}>
  {["option_1", "option_2", "option_3", "option_4"].map((option, index) => (
    <button
      key={index}
      onClick={() => handleAnswerClick(currentQuestion[option])}
      className={`${styles.optionsButton} ${
        selectedOption
          ? currentQuestion[option] === currentQuestion.right_answer
            ? styles.correct
            : currentQuestion[option] === selectedOption
            ? styles.inCorrect
            : ""
          : ""
      }`}
      disabled={!!selectedOption} // Disable buttons after selection
    >
      {currentQuestion[option]}
    </button>
  ))}
</div>

      </div>

      <div className={styles.nextButton}>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default Quiz;

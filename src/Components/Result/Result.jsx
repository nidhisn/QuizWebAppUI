import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./Result.module.css";
import { CircularProgress } from '@mui/joy';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams(); // Retrieve category from URL
  const { score, total } = location.state || { score: 0, total: 0 };

  const percentage = ((score / total) * 100).toFixed(2);

  const title =
  percentage >= 75
    ? "Congratulations! 🎉"
    : percentage >= 50
    ? " Good Job! 👏"
    : " Keep Trying!";

    const paragraph =
    percentage >= 75
      ? "Amazing work! You've demonstrated excellent understanding. Keep up the great work!"
      : percentage >= 50
      ? "Well done! You did a good job, but there's still room to grow. Review the topics and try again!"
      : "Don't worry! Every attempt is a step closer to success. Review and keep practicing to improve.";

  return (
    <div className={styles.resultContainer}>
      <h1>{title}</h1>

      <hr
        style={{
          backgroundColor: "#e1e3e4",
          color: "#e1e3e4",
          borderColor: "#e1e3e4",
          width: "50%",
          height: "0.01px",
        }}
      />
       <p>{paragraph}</p>
      <p className={styles.score}>
        Your quiz score is
      </p>
      <CircularProgress size="lg" determinate value={percentage}>
      {score}/{total}
     </CircularProgress>

      <div className={styles.buttonGroup}>
        <button onClick={() => navigate(`/quiz/${category}`)}>Retake Quiz</button>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
};

export default Result;

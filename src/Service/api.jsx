import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

// Fetch questions by category
export const fetchQuestionsByCategory = (category) => {
  return axios.get(`${API_BASE_URL}/question/category/${category}`);
};

// Create a quiz with the specified category, number of questions, and title
export const createQuiz = (category, numQuestions, title) => {
  return axios.post(`${API_BASE_URL}/quiz/create`, null, {
    params: { category, numQ: numQuestions, title },
  });
};

// Fetch quiz questions by quiz ID
export const fetchQuizQuestions = (quizId) => {
  return axios.get(`${API_BASE_URL}/quiz/get/${quizId}`);
};

// Submit the quiz responses
export const submitQuiz = (quizId, responses) => {
  return axios.post(`${API_BASE_URL}/quiz/submit/${quizId}`, responses);
};

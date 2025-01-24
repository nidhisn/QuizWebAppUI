import styles from './Home.module.css';
import Navigation from '../../Components/Navigation/Navigation';
import Button from '../Button/Button';

const buttonLabels = [
  'Java', 'Python', 'JavaScript', 'C++', 
  'Ruby', 'GoLang', 'Swift', 'Kotlin', 'Rust'
];

const Home = () => {
  return (
    <div className={`${styles.home_section}`}>
      <div className={`${styles.left_section}`}>
        <Navigation />
        <h2>QUIZ</h2>
        <h1>WHIZ</h1>
        <p>Test your wits, boost your knowledge, and conquer challenges – Quiz Whiz, where every question counts!</p>
      </div>

      <div className={`${styles.right_section}`}>
        {/* Category Container */}
        <div className={styles.category}>
          {buttonLabels.map((label, index) => (
            <Button key={index} label={label} />
          ))}
          <img src="../../images/OldComputer.png" alt="Category Icon" />
        </div>

        {/* Trivia and Login Section */}
        <div className={styles['trivia-login-container']}>
          <div className={styles.trivia}>
            <h3>Did you know?</h3>
            <p>Honey never spoils! Archaeologists found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.</p>
          </div>
          <div className={styles.login}>
            <h3>The game has various additions</h3>
            <p>One such addition is "States of the United States". In this addition, you will remember the location of all US states, their flags, and capitals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

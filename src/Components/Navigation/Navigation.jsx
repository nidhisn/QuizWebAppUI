import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className= {`${styles.navigation} container`}>
        <ul>
            <li>Home</li>
            <li>Setting</li>
            <li>About</li>
            <li>Login</li>

        </ul>
    </nav>
    
  )
}

export default Navigation
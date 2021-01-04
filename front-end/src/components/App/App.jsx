import styles from './App.module.css';

function App() {
  return (
    <div data-testid="app" className={styles.App}>
      {new Date().toLocaleTimeString()}
    </div>
  );
}

export default App;

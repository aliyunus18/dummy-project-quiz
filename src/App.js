import logo from './logo.svg';
import './App.css';

const startButton = document.getElementById('start')

startButton.addEventListener('click', startAnswer)

function startAnswer(){
  console.log('start answering')
  startButton.style.display="none";
}


function App() {
  return (
    <div>
      <h1>Begin answering some questions!</h1>      
    </div>
)}

export default App;

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  const studentName = "Taniksha Shah";
  const studentTitle = "Aspiring Machine Learning Engineer";
  const studentBio =
    "I'm a Computer Engineering student specializing in Data Science and Machine Learning. I build end-to-end ML systems — from data pipelines and model architecture to deployment — with a focus on turning research ideas into working, reliable products.";
  const skillsList = [
    "Python",
    "PyTorch",
    "Scikit-learn",
    "Pandas & NumPy",
    "SQL",
    "React",
    "Git & GitHub",
    "Data Visualization",
  ];

  return (
    <div className="page">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <div className="terminal-buttons">
            <span className="btn btn-red"></span>
            <span className="btn btn-yellow"></span>
            <span className="btn btn-green"></span>
          </div>
          <div className="terminal-title">student@portfolio: ~</div>
        </div>

        <div className="terminal-body">
          <Header name={studentName} title={studentTitle} />
          <main className="main-content">
            <About bio={studentBio} />
            <Skills skills={skillsList} />
          </main>
          <Footer name={studentName} />
        </div>
      </div>
    </div>
  );
}

export default App;
// import Login from './components/Login';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Audio from './components/Audio'
import Mood from './components/Mood';
//  class (bg-bg, text-white) for Login
function App() {

  return (
    <div className="relative min-h-screen overflow-auto">
        <Navbar />
        <Background />
        <Audio />
        <Mood />
    </div>
  );
}

export default App;

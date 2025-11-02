import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from '../Footer';
import './App.css'


function App() {
  return (
    <div className="App">
      <UserProfile 
        name="Yonas"
        age="32"
        bio="Loves visiting cities"
      />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}


export default App

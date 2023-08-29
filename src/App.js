import './App.css';
import { Header } from './components/header';
import { AfterHeader } from './components/afterheader';
import { LastSection } from './components/lastsection';
function App() {
  return (
    <div className="App">
      <Header />
      <AfterHeader />
      <LastSection />
    </div>
  );
}

export default App;

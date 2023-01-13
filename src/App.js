
import Feed from './components/Feed';
import './App.css';
import Sidebar from './components/Sidebar';

const   App =() => {
  return (
    <div className="App">
      {/* side bar */}
      <Sidebar />

      {/* feed */}
      <Feed/>
      {/* widgets */}

    </div>
  );
}

export default App;


import Feed from './components/Feed';
import './App.css';
import Sidebar from './components/Sidebar';
import  Widgets from './components/Widgets';

const   App =() => {
  return (
    <div className="app">
      {/* side bar */}
      <Sidebar />

      {/* feed */}
      <Feed/>
      {/* widgets */}
      <Widgets/> 
    </div>
  );
}

export default App;

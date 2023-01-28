import { Routes, Route, Navigate } from "react-router-dom"
import Feed from './components/feed/Feed';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';

const App = () => {
  return (
    <div className="app">
      {/* side bar */}
      <Sidebar />

      {/* feed */}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />


        <Route path="/home" element={<Feed />} />
        <Route path="/about" element={<Sidebar />} />
        <Route path="contact" element={<Widgets />} />
      </Routes>


      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;

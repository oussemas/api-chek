import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
     
       <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<Profile />} />

        </Routes>
    </div>
  );
}

export default App;

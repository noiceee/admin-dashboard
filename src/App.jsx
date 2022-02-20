import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './app.scss';
import Home from "./pages/home/Home";
import { Routes, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  let activePage = 'home';
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar activePage={activePage}/>
        <Routes>
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

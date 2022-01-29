import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './app.scss';
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;

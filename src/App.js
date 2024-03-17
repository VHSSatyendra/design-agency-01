// import './App.css';
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import Team from "./components/team/Team";
import Values from "./components/values/Values";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="p-4 w-screen h-screen md:p-10 overflow-x-hidden">
      <NavBar/>
      <Home/>
      <Work/>
      <Values/>
      <Team/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;

// Using import keyword to connect to and bring CSS from CSS file
import "./App.css";
// Importing the Header component, "from" keyword is used to bring in/reference the file path
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutMe from "./components/aboutMe/AboutMe";
import Employees from "./components/employeeInformation/Employees";

// This is a Functional Component: it is declared with the function keyword, the name of the func is the component name(Capitalized/PascalCase)
function App() {
  // Functional Components have a single return
  return (
    // JSX will only allow ONE JSX ELEMENT to be returned (that element can contain child/many elements)
    <div className="App">
      {/* To use an imported component: it gets written/called as a self closing tag. */}
      <Header />
      <AboutMe />
      <Employees />
      <Footer />
    </div>
  );
}

// How the Functional Component gets exported: export default component-name/function-name (Needs to match!)
export default App;

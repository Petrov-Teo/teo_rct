// import logo from "./logo.svg";
import "./App.css";
import ClassButton from "./ext/ClassButton";
import ClassForm from "./ext/ClassForm";
import ClassTitle from "./ext/ClassTitle";

function App() {
  return (
    <div>
      <ClassTitle title="Welcome To Our Page" />
      <ClassButton buttonText="Click me" />
      <ClassForm idNAme="Name" leableText="Your Name" type="text" placeplaceholderName="Your Name" />
    </div>
  );
}
export default App;

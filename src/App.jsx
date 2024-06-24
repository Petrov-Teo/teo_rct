// import logo from "./logo.svg";
import "./App.css";
import ClassButton from "./ext/ClassButton";
import ClassForm from "./ext/ClassForm";
import ClassImg from "./ext/ClassImg";
import ClassTitle from "./ext/ClassTitle";

function App() {
  return (
    <div>
      <ClassTitle title="Welcome To Our Page" />
      <ClassButton buttonText="Click me" />
      <ClassForm idNAme="Name" leableText="Your Name" type="text" placeholder="Your Name" />
      <div className="d-flex justify-content-around">
        <ClassImg
          img="https://img.freepik.com/free-photo/photorealistic-galaxy-background_23-2151064374.jpg?size=626&ext=jpg&ga=GA1.1.1037142912.1719244743&semt=ais_user"
          alt="space_IMG"
        />
        <ClassImg
          img="https://img.freepik.com/free-photo/3d-abstract-space-sky-with-stars-nebula_1048-8320.jpg?size=626&ext=jpg&ga=GA1.1.1037142912.1719244743&semt=ais_user"
          alt="space_IMG"
        />
        <ClassImg
          img="https://img.freepik.com/foto-gratuito/spazio-galassia-sfondo-ai-generativo_191095-467.jpg?t=st=1719247368~exp=1719250968~hmac=d8e4588148eedbaaf450a7a2925e9f8eee27999a7019c913843750414ddb659b&w=1800"
          alt="space_IMG"
        />
        <ClassImg
          img="https://img.freepik.com/foto-gratuito/pianeta-immaginario-con-cielo-notturno-colorato-stelle-e-nebulosa_1048-7926.jpg?t=st=1719247529~exp=1719251129~hmac=2fd573a5f7d0b8c02974915dbf93949cbc483f70b0d35d3e23075900cc7d83a3&w=1380"
          alt="space_IMG"
        />
      </div>
    </div>
  );
}
export default App;

import Banner from "./componentes/Banner/Banner";
import TextInput from "./componentes/InputText/TextInput";

function App() {
  return (
    <div>
      <Banner />
      <TextInput label="Nome" placeholder="Digite seu nome" />
      <TextInput label="Cargo" placeholder="Digite seu cargo" />
      <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;

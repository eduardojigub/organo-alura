import Dropdown from "../Dropdown/Dropdown";
import TextInput from "../InputText/TextInput";
import "./Form.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput label="Nome" placeholder="Digite seu nome" />
        <TextInput label="Cargo" placeholder="Digite seu cargo" />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Time" itens={times} />
      </form>
    </section>
  );
};

export default Form;

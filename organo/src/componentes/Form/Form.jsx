import Button from "../Button/Button";
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

  const onSaveForm = (e) => {
    console.log("Form was submitted");
    e.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={onSaveForm}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextInput
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextInput label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown obrigatorio={true} label="Time" itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;

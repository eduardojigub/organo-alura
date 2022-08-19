import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import TextInput from "../InputText/TextInput";
import "./Form.css";
import { useState } from "react";

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

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSaveForm = (e) => {
    console.log("Form was submitted", nome, cargo, imagem, time);
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
          value={nome}
          onChange={(valor) => setNome(valor)}
        />
        <TextInput
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          onChange={(valor) => setCargo(valor)}
        />
        <TextInput
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onChange={(valor) => setImagem(valor)}
        />
        <Dropdown
          valor={time}
          onChange={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={times}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;

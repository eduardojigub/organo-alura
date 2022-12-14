import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Form from "./componentes/Form/Form";
import Time from "./componentes/Time/Time";
import Footer from "./componentes/Footer/Footer";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Ux e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE95F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [users, setUsers] = useState([]);

  const addedUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        onFormSubmit={(user) => addedUser(user)}
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          users={users.filter((user) => user.time === time.nome)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

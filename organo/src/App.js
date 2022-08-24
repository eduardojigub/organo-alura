import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Form from "./componentes/Form/Form";
import Time from "./componentes/Time/Time";

function App() {
  const [users, setUsers] = useState([]);

  const addedUser = (user) => {
    console.log(user);
    setUsers([...users, user]);
  };

  return (
    <div>
      <Banner />
      <Form onFormSubmit={(user) => addedUser(user)} />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data-Science" />
    </div>
  );
}

export default App;

import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Form from "./componentes/Form/Form";

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
    </div>
  );
}

export default App;

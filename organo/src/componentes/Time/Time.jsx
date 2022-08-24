import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    props.users.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.users.map((user) => (
            <Colaborador
              key={user.nome}
              nome={user.nome}
              cargo={user.cargo}
              imagem={user.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;

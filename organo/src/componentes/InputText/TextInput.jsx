import "./TextInput.css";

const TextInput = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
};

export default TextInput;

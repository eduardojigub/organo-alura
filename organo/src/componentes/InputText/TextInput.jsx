import "./TextInput.css";

const TextInput = (props) => {
  const onType = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={onType}
        value={props.valor}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;

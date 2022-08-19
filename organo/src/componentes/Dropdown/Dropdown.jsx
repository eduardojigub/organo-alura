import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.onChange(e.target.value)}
        required={props.obrigatorio}
        value={props.value}
      >
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

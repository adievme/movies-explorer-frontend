import './FilterCheckbox.css';

function FilterCheckbox({ short, updateShort }) {
  return (
    <div className="checkbox">
      <input 
        type="checkbox" 
        className="checkbox__ios" 
        checked={short}
        onChange={() => updateShort(!short)}
      />
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
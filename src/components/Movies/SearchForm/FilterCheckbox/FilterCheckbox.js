import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <input type="checkbox" className="checkbox__ios" />
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
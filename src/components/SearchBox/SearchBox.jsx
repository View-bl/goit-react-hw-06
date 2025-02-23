import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name); 

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };

  return (
    <input
      type="text"
      placeholder="Пошук контактів..."
      value={filter}
      onChange={handleChange} 
      className={css.input}
    />
  );
};

export default SearchBox;
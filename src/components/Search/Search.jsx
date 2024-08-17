import { searchValue } from "../../redux/contacts/searchSlice";
import { useDispatch } from "react-redux";
import style from '../ContactWrapper/ContactWrapper.module.css';

export const Search = () => {
   const dispatch = useDispatch();
   const handleOnChange = e => dispatch(searchValue(e.target.value));


   return (
      <div className={style.searchWrapper}>
         <input
            className={style.searchInput}
            type="text"
            name="searchBar"
            placeholder="Search..."
            onChange={handleOnChange}
            autoComplete="off"
         />
      </div>
   );
}
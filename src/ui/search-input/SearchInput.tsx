import { Search } from "lucide-react";
import s from './SearchInput.module.css'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchQuery } from "../../services/slices/gameSlice";

export default function SearchInput() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue ] = useState('');
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    dispatch(setSearchQuery(value))
  }
  return (
    <div className={s.search_input}>
      <div>
        <Search size={24} className={s.search_icon}/> 
        <input 
        type="text"
        placeholder='Поиск'
        className={s.input}
        value={searchValue}
        onChange={handleSearch}
        />
      </div>
    </div>
  )
}

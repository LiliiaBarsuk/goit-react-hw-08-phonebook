import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import { Input, Label } from "./Filter.styled";


export const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilter);
  
  const saveFilterValue = evt => {
    dispatch(setFilter(evt.target.value))
  };

  return (
    <Label>
      Find contacts by name
      <Input value={filterValue} name='filter' type='text' onChange={saveFilterValue}></Input>
    </Label>
  )
}

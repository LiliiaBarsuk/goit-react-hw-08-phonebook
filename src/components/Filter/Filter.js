import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";
import { Input, Label } from "./Filter.styled";


export const Filter = () => {
  const dispatch = useDispatch();
  
  const saveFilterValue = evt => {
    dispatch(setFilter(evt.target.value))
  };

  return (
    <Label>
      Find contacts by name
      <Input name='filter' type='text' onChange={saveFilterValue}></Input>
    </Label>
  )
}

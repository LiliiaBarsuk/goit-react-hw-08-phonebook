import { Input, Label } from "./Filter.styled";
import PropTypes from 'prop-types';

export const Filter = ({ onSaveFilterValue }) => {      
  return (
    <Label>
      Find contacts by name
      <Input name='filter' type='text' onChange={onSaveFilterValue}></Input>
    </Label>
  )
}
      
Filter.propTypes = {
  onSaveFilterValue: PropTypes.func.isRequired,
}

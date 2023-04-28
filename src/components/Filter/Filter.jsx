import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import Form from 'react-bootstrap/Form';
import { Label, Input, SearchIcon } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  return (
    <Form>
      <Label>
        <SearchIcon />
        <Input
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          onChange={handleFilter}
        />
      </Label>
    </Form>
  );
};
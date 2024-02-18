import P from 'prop-types';
import './styles.css';

export const TextInput = ({ handleChange, searchValue }) => {
  return <input onChange={handleChange} value={searchValue} type="search" placeholder="Enter your search" />;
};

TextInput.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};

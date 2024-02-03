import "./styles.css";

export const TextInput = ({ actionFn, inputValue }) => {
  return (
    <input
      onChange={actionFn}
      value={inputValue}
      type="search"
      placeholder="Enter your search"
    />
  );
};

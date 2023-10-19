import SearchIcon from "@mui/icons-material/Search";
function SearchInputField(props) {
  return (
    <div className={props.className}>
      <input
        onChange={props.onChange}
        type={props.type && props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        defaultValue={props.defaultValue}
      />

      <SearchIcon className="search-bar-icon" />
    </div>
  );
}

export default SearchInputField;

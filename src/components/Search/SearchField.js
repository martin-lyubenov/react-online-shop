

function SearchField({ onSearch, searchList }) {
  function onSubmitHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { searchQuery } = Object.fromEntries(
      [...formData].map(([k, v]) => [k, v.trim()])
    );

    const searchQueryResult = searchList.filter((item) => {
      const name = item.name.toLowerCase();
      console.log(name);
      const query = searchQuery.toLowerCase();
      if (name.includes(query)) {
        return name;
      }
      return undefined;
    });

    onSearch(searchQueryResult);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="search" name="searchQuery" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchField;



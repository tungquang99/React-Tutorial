import React, { useRef } from "react";
import { useState } from "react";
function Search(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const typingTimeputRef = useRef(null);

  function handleSearch() {
    const srch = document.querySelector("#srch").value;
    const slct = document.querySelector("#slct").value;
    setSearch(srch);
    setSelect(slct);
    if (!onSubmit) return;

    if (typingTimeputRef.current) {
      clearTimeout(typingTimeputRef.current);
    }

    const formValues = {
      search: srch,
      select: slct,
    };
    typingTimeputRef.current = setTimeout(() => {
      onSubmit(formValues);
    }, 300);
  }

  return (
    <div>
      <form className="d-flex flex-wrap align-items-center">
        <div className="form-group">
          <input
            type="text"
            style={{ width: 150, margin: "5px 0px" }}
            placeholder="Tìm kiếm...."
            value={search}
            className="search"
            id="srch"
            onChange={handleSearch}
          />
        </div>
        <div className="form-group">
          <select
            style={{ width: 130, margin: "5px" }}
            id="slct"
            value={select}
            className="search"
            onChange={handleSearch}
          >
            <option value="">Chọn Mạng</option>
            <option value="viettel">Viettel</option>
            <option value="vinaphone">Vinaphone</option>
            <option value="mobifone">Mobifone</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Search;

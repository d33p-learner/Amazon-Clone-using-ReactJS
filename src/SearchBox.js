import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
        <Form onSubmit={submitHandler} className="header__searchInput" inline>
        <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Products..."
            className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        </Form>
        <div>
            <Button color="#cd9042" type="submit" className="header__searchIcon">
                <SearchIcon/>
            </Button>
        </div>
    </>
  );
};

export default SearchBox;

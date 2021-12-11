import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./search.css";
import { BiSearchAlt } from "react-icons/bi";

export default class Search extends Component {
  render() {
    return (
      <div className="group-search">
        <div className="search">
          <h3>Bạn cần tìm kiếm thông tin gì ?</h3>
          <InputGroup className="mb">
            <Stack direction="horizontal" gap={4}>
              <FormControl
                className="me-auto"
                aria-label="Text input with dropdown button"
                placeholder="Nhập công ty, từ khóa..."
              />

              <DropdownButton
                bg="danger"
                variant="light"
                title="Nghề nghiệp "
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                bg="danger"
                variant="light"
                title="Công ty"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Button className="btn-search">
                <span>
                  {" "}
                  <BiSearchAlt />
                  Tìm kiếm
                </span>
              </Button>
            </Stack>
          </InputGroup>
        </div>
      </div>
    );
  }
}

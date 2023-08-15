import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const daysRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const navigation = useNavigate();

  const searchHandler = async () => {

    const location =  locationRef.current.value;
    const days =  daysRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || days === "" || maxGroupSize === "") {
      return alert("All fields are mandatory..!");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getSearch?title=${location}&days=${days}&maxGroupSize=${maxGroupSize}`);

    if (!res.ok) {
      alert("Something went wrong");
    }

    const result = await res.json();
    navigation(
      `/tours/search?title=${location}&days=${days}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4 form">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Days</h6>
              <input
                type="number"
                placeholder="No of days"
                ref={daysRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="No of people" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

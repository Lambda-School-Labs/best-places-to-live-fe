import React, { useState } from "react";
import useForm from "react-hook-form";
import { fetchLocations } from "../actions/locations";
import { connect } from "react-redux";
import Error from "./Error";

function SearchByCity({ history, fetchLocations, isFetching, error }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const fetchResult = await fetchLocations({ searchTerm: data.location });
    //If no error, push user to new page else
    return !error ? history.push("/search") : null;
  };

  console.log(errors);

  return (
    <>
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="location"
          name="location"
          ref={register({ required: true, minLength: 1 })}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  const { isFetching, error } = state.locationsReducer;
  return {
    isFetching,
    error
  };
};

export default connect(
  mapStateToProps,
  { fetchLocations }
)(SearchByCity);

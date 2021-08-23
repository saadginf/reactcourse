import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import Select from "react-select";
import { getCountriesList } from "../actions/countriesActions";

const Add = (props) => {
  useEffect(() => {
    if (!props.countries.length) {
      props.getCountries();
    }
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div className="add-container">
      <form id="adding-form" className="form" onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label className="text-info">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-danger">Title is required</span>
          )}
        </div>

        <div className="form-group">
          <label className="text-info">Edition</label>
          <br />
          <input
            type="text"
            name="eventEdition"
            id="eventEdition"
            className="form-control"
            {...register("eventEdition", { required: true })}
          />
          {errors.eventEdition && (
            <span className="text-danger">Edition is required</span>
          )}
        </div>
        <div className="form-group">
          <label className="text-info">Start Date</label>
          <br />
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="form-control"
            {...register("startDate", { required: true })}
          />
          {errors.startDate && (
            <span className="text-danger">Start Date is required</span>
          )}
        </div>
        <div className="form-group">
          <label className="text-info">End Date</label>
          <br />
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="form-control"
            {...register("endDate", { required: true })}
          />
          {errors.endDate && (
            <span className="text-danger">End Date is required</span>
          )}
        </div>

        <div className="form-group">
          <label className="text-info">Color</label>
          <br />
          <select
            {...register("bgColor", { required: true })}
            className="form-control"
          >
            <option value="#179DE0">Blue</option>
            <option value="#FC3545"> Red</option>
            <option value="#F4D511">Yellow</option>
            <option value="#52C652">Green</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-info">Country</label>
          <br />
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={props.countries.length ? props.countries : null}
              />
            )}
          />
        </div>
        <input
          type="submit"
          name="submit"
          value="Submit "
          className="btn btn-info"
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ countries }) => ({
  loading: countries.loading,
  countries: countries.countries,
});

const mapDispatchToProps = {
  getCountries: getCountriesList,
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);

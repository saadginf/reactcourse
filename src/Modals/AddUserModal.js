import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import scc from "../assets/success.png";

const AddUserModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  const [success, setSuccess] = useState(false);

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      onHide={() => {
        props.close();
        setSuccess(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {success ? <h2>User Added</h2> : <h2>Add User</h2>}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!success && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="forme-group form-fields">
              <label htmlFor="username">UserName:</label>
              <input
                className="form-control"
                name="username"
                placeholder="UserName"
                type="text"
                {...register("username", { required: true })}
              />
            </div>
            <div className="forme-group form-fields">
              <label htmlFor="password">PassWord:</label>
              <input
                className="form-control"
                name="password"
                placeholder="PassWord"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
            <p></p>
            <div className="button-form">
              <button type="submit" className="btn btn-success add-btn">
                Save
              </button>
            </div>
            {Object.keys(errors).length != 0 && (
              <p className="text-danger">{"Invalid Inputs"}</p>
            )}
          </form>
        )}
        {success && (
          <div className="success-vector">
            <img src={scc} alt="" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.close();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddUserModal;

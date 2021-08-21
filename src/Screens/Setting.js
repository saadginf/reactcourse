import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddUserModal from "../Modals/AddUserModal";
import AddCountryModal from "../Modals/AddCountryModal";
import "./Setting.css";
const Setting = () => {
  const data = [
    {
      id: 1,
      username: "admin",
      appRoles: [
        {
          id: 1,
          roleName: "admin",
        },
        {
          id: 2,
          roleName: "user",
        },
      ],
    },
    {
      id: 2,
      username: "wolf",
      appRoles: [
        {
          id: 1,
          roleName: "admin",
        },
      ],
    },

    {
      id: 3,
      username: "wolf2",
      appRoles: [
        {
          id: 1,
          roleName: "admin",
        },
        {
          id: 2,
          roleName: "user",
        },
      ],
    },
  ];
  const [showModal, setshowModal] = useState(false);
  const [showCountModal, setshowCountModal] = useState(false);
  return (
    <div>
      <AddUserModal show={showModal} close={() => setshowModal(false)} />
      <AddCountryModal
        show={showCountModal}
        close={() => setshowCountModal(false)}
      />
      <div className="users-table-container">
        <h5>Users</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {data.length
              ? data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    {user.appRoles.map((role) => (
                      <>
                        <span key={role.id}>{role.roleName + "; "}</span>
                      </>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
      <div className="users-table-container">
        <h5>Settings</h5>
        <div className="settings-buttons">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setshowModal(true)}
          >
            Add User
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setshowCountModal(true)}
          >
            Add Country
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;

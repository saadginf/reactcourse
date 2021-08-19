import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddUserModal from "../Modals/AddUserModal";
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
  return (
    <div>
      <AddUserModal show={showModal} close={() => setshowModal(false)} />
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
                      <p>{role.roleName}</p>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </div>
      <div>
        <Button onClick={() => setshowModal(true)}>ADD User</Button>
      </div>
    </div>
  );
};

export default Setting;

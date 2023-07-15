import React, { useState } from "react";
import PropTypes from "prop-types";
import baseUrl from "../../baseUrl.js";

// components

import TableDropdown from "../Dropdowns/TableDropdown.js";
export default function CardTable(props) {
  const [users, setUsers] = useState(props.userData);
  const deleteUser = (id) => {
    console.log(id);
    const newUsers = users.filter((users) => {
      return users._id !== id;
    });
    setUsers(newUsers);
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 cardPrimary  break-words w-full mb-6 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg "}>
                All Users : ({users.length})
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Sr. No.
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Username
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  E-mail
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Role
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Update/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && (
                <div className="my-6 text-center">No User Found</div>
              )}
              {users.map((item, index) => {
                return (
                  <tr>
                    <td className="border-t-0 px-6 align-middle text-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {index + 1}
                    </td>
                    {/*                     
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={item.image}
                        className="h-12 w-12       rounded-full border"
                        alt="..."
                      ></img>{" "}
                      <span className={"ml-3 font-bold "}>{item.title}</span>
                    </th> */}

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                      {item.name}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.userName}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.email}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.role}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="CurdIcons" F>
                        <button>
                          <i className="bi  bi-pencil-square"></i>
                        </button>
                        <button
                          onClick={() => {
                            deleteUser(item._id);
                          }}
                        >
                          <i className="bi bi-trash3"></i>
                        </button>{" "}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

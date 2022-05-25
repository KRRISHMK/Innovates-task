import React from "react";

const Table = (props) => {
  let { list, fork } = props;
  return (
    <div className="container">
      <table className="table">
        <thead>
          {list && list.length > 0 && (
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Language</th>
              <th scope="col">Description</th>
              <th scope="col">Size</th>
            </tr>
          )}
        </thead>
        <tbody>
          {list && list.length > 0 ? (
            list
              .filter((item) => item.fork === fork)
              .map((data) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.language}</td>
                  <td>{data.description}</td>
                  <td>{data.size}</td>
                </tr>
              ))
          ) : (
            <tr className="text-center">
              <span className="fw-bold">No Github UserName Found</span>
            </tr>
          )}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

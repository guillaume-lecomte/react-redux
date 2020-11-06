import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default ({ bookItem: { id, title, author }, remove }) => (
  <Fragment>
    <td>{title}</td>
    <td>{author}</td>
    <td>
      <button
        className="deleteButton"
        onClick={() =>
          window.confirm("Are you sure you wish to delete this book?") &&
          remove(id)
        }
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </td>
  </Fragment>
);

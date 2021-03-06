import React from "react";
import { Alert } from "react-bootstrap";

const errMsg = (errors) => {
  if (errors) {
    return Object.values(errors).map((item, id) => {
      return (
        <div key={id} className={`user__error__box`}>
          <Alert variant="danger">{item.msg}</Alert>
        </div>
      );
    });
  } else {
    return null;
  }
};

const serverErr = (errors) => {
  if (errors) {
    return <Alert variant="danger">{errors}</Alert>;
  } else {
    return null;
  }
};

export { errMsg, serverErr };

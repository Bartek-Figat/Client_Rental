import React from "react";
import { Alert } from "react-bootstrap";

const errMsg = (errors) => {
  if (errors) {
    return Object.values(errors).map((item, id) => {
      return (
        <div key={id} className={`user__error__box`}>
          <Alert variant="danger">{item}</Alert>
        </div>
      );
    });
  } else {
    return null;
  }
};

export { errMsg };

import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const ContextData = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <p>
        Student Name is {a.state.name} and their roll number is {a.state.roll_no}
      </p>
    </div>
  );
};

export default ContextData;

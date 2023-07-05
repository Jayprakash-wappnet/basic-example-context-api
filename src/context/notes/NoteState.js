import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const state1 = {
    name: "John",
    roll_no: "31"
  };
  const [state, setState] = useState(state1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Petter",
        roll_no: 33
      });
    }, [1000]);
  };
  return <NoteContext.Provider value={{ state, update }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;

import { Edit } from "tabler-icons-react";
import "./styles/buttons.css";

function Primary(props) {
  return (
    <>
    <button>{props.text}</button>
    </>
  )
}

export const ButtonEdit = () => {
   return (
      <>
         <button className="button-edit">
            <Edit />
            <p>Edit</p>
         </button>
      </>
   )
}

export default Primary;

import { Edit } from "tabler-icons-react";
import "./buttons.css";

function Primary(props) {
  return (
    <>
    <button>{props.namanya.type.hello}</button>
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
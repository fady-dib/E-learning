import { useState } from "react";
import Button from "../Button";

interface EnrollProps {
    enrollData : {
        name:string,
        instructor: string
    }
}
const Enroll =({ enrollData }:EnrollProps)=> {
    const {  } = enrollData;

    const [showComponent, setShowComponent] = useState(false);

const handleClick = () => {

}

    return (
      <>
   
      </>
    );
  }  


  export default Enroll
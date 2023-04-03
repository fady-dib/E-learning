import { useState } from "react";
import Button from "../Button";
import Enroll from "../Enroll/index";

interface ClassProps {
    classData : {
        name:string,
        instructor: string
    }
}
const Class =({ classData }:ClassProps)=> {
    const { name, instructor } = classData;

    const [showComponent, setShowComponent] = useState(false);

const handleClick = () => {
    setShowComponent(true);
}

    return (
      <>
      <div className="class-container border">
        <h2 className="class"> Class: {name}</h2>
        <p className="class">Instructor: {instructor}</p>
        <Button name="Enroll" handleClick={handleClick}></Button>
        {showComponent && <Enroll enrollData={classData} />}
      </div>
      </>
    );
  }  


  export default Class
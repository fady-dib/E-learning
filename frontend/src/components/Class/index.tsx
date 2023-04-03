
interface ClassProps {
    classData : {
        name:string,
        instructor: string
    }
}
const Class =({ classData }:ClassProps)=> {
    const { name, instructor } = classData;
    return (
      <>
      <div className="user-container border">
        <h2 className="user"> Class: {name}</h2>
        <p className="user">Instructor: {instructor}</p>
      </div>
      </>
    );
  }  


  export default Class
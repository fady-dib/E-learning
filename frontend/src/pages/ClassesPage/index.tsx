import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import Class from '../../components/Class';
import "../../components/Class/index.css"


interface ClassData {
    name: string;
    instructor: string;

}

const ClassesPage = () => {

    const [Classes, setClasses] = useState([]);

    const token = localStorage.getItem('token');

    const getClasses = () => {
        axios.get('http://localhost:3002/class/classes', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setClasses(response.data)
        })
    }


    useEffect(() => {
      
        getClasses()
    },)




    return (
        <>
            <div>
                <Navbar></Navbar>

                <div className='classes-content'>
                    <h2 className='list'>Classes List</h2>
                    <div className="table-container">
                        {Classes.length > 0 ? (
                            Classes.map((classData, index) => (
                                <React.Fragment key={index}>
                                    <Class key={classData} classData={classData} />
                                </React.Fragment>
                            ))
                        ) : (
                            <p>No classes found.</p>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ClassesPage
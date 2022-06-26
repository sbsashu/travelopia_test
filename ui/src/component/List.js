import React, { useState, useEffect } from "react";
import {getTraveDetails} from "../utils"
import {Link} from "react-router-dom"

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getTraveDetails().then(data => setList(data.data))
    }, [])
   
    return (
        <div className="container">
          <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope="col">Number Of traveller</th>
                    <th scope="col">Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 && list.map((t, i) => (
                        <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td>{t.country}</td>
                        <td>{t.noofperson}</td>
                        <td>{t.currency}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <Link to="/"className="btn btn-warning">Back</Link>
        </div>
    )
}

export default List;
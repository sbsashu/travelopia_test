import React, { useState } from "react";
import {addTravllerDetail} from "../utils"
import {toast} from "react-toastify"
import { Link } from "react-router-dom";

const TravelForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        country: '',
        noofperson: '',
        currency: ''
    })
    const { 
        name,
        email,
        country,
        noofperson,
        currency
    } = form;
    
    const onChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        if(name && email && country && noofperson && currency) {
            addTravllerDetail(form).then(data => {
                    setForm({
                        ...form,
                        name: '',
                        email: '',
                        country: '',
                        noofperson: '',
                        currency: ''
                    })
                    toast.success("Traveller detail success fully added")
            })
            .catch(err => {
                if(err.response.status === 302) {
                    toast.error("Email already used")
                } else {
                    toast.error("Somthing went wrong")
                }
            })
        }
    }
   
    return (
        <div className="container">
          <form onSubmit={onFormSubmit}>
              <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Name</label>
                        <input type="text" className="form-control" name="name" required onChange={onChange} value={name} placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" name="email" required onChange={onChange} value={email} placeholder="Email" />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputState">Where you want to go ?</label>
                    <select name="country"  onChange={onChange} value={country}  required className="form-control">
                        <option defaultValue={"Choose ..."}>Choose...</option>
                        <option name="0" value="India">India</option>
                        <option name="1" value="Africa">Africa</option>
                        <option name="2" value="Europe">Europe</option>
                    </select>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputPassword4">No of travller</label>
                    <input type="text" className="form-control" onChange={onChange} value={noofperson} required  name="noofperson" />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputPassword4">Currency($)</label>
                    <input type="text" className="form-control"  onChange={onChange} value={currency} required  name="currency" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/list" className="btn btn-primary ml-2">All Traveller</Link>
                </form>
        </div>
    )
}

export default TravelForm;
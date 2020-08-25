import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";

import "./AddCategory.scss";


const initialForm = {
    addCategory: "",
}

const AddCategory = () => {

    const [formState, setFormState] = useState(initialForm);

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [serverErrors, setServerErrors] = useState("");

    const [error, setErrors] = useState(initialForm)

    const [form, setForm] = useState({});



    return(
        <form>
        <h1>Create a Category</h1>
        <p>Organize your articles into cateogries.</p>
        <label>
            Category name:
        </label>
            <input
            id="name"
            type="text"
            name="name"
            // value={}
            // onChange={}
            />
        <label>
            Description:
        </label>
            <input
            id="desc"
            type="text"
            name="desc"
            />
          
            <button className="create-btn" disabled={buttonDisabled} type="submit">
                Create Category
            </button>               
                   
        </form>
    )
}



export default AddCategory;
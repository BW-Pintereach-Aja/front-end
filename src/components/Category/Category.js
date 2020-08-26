
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import AddCategory from "../AddCategory/AddCategory";
import NewArticle from "../NewArticle/NewArticle";

import "./Category.scss";

const Category = (props) => {

    const [showModal, setShowModal] = useState(false);

    function openModal(){
        setShowModal(true);
      }

    function closeModal(){
    setShowModal(false);
    }

    

        return (
          <main>        
            <Modal handleClose={closeModal} show={showModal}>
                <AddCategory />
            </Modal>

            <button 
            className="newcat-btn"
            type="button" 
            onClick={openModal}
            >
              + New Category
            </button>
            {/* <button 
            className="newart-btn"
            type="button" 
            onClick={openModal}
            >
              + New Article
            </button> */}

            
          </main>
        );
}

const Modal = ({show, children, handleClose}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <button className="cancel-btn" type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
          {children}
        </section>
      </div>
    );
  };

  



export default Category;
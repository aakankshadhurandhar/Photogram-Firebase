import React from 'react'
import Button from '@material-ui/core/Button'

import DeleteIcon from '@material-ui/icons/Delete';
import { db } from '../firebase/config';
const noteref=db.collection('images')
function Modal({ selected,setSelected }) {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
          setSelected(null);
        }
      }
    const deleteButtonhandler=()=>{
        noteref.doc(selected.id).delete();
        setSelected(null);
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selected.url} alt="enlarged pic"/>
            <Button variant="contained"
            color="default"
            className="ebut"
            startIcon={<DeleteIcon />}
            onClick={deleteButtonhandler}></Button>
        </div>
    )
}

export default Modal

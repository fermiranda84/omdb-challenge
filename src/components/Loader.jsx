import React from "react"
import Modal from 'react-bootstrap/Modal'


export const Loader = (props) => {

    return (

        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        dialogClassName="modalLoading modal-header border-0"
        className='bg-white'
      >
        <Modal.Body>
            <h6 className="mt-3 text-center">Cargando...</h6>
        </Modal.Body>
      </Modal>

    )
}
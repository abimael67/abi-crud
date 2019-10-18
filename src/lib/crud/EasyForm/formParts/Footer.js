import React from 'react'

export const FormFooter = ({ saveCallback, deleteCallback, createCallback, mode, goBack, saveButtonDisabled }) => {

    return (
        <div className="row col-lg-12 col-sm-12">
            <div className="col-lg-6 col-sm-12"></div>
            <div className="col-lg-6 col-sm-12" style={{ textAlign: 'right' }}>
                {mode === 'edit' ? (<React.Fragment>
                    <button className="btn btn-danger">Eliminar</button>{" "}
                    <button className="btn btn-info" disabled={saveButtonDisabled} onClick={() => saveCallback()}>Guardar</button>{" "}
                </React.Fragment>) : mode === 'new' ? <button className="btn btn-success" disabled={saveButtonDisabled} onClick={() => createCallback()}>Create</button> : ''}
                {" "}
                <button onClick={() => goBack()} className="btn btn-default">Back</button>
            </div>
        </div>
    )
}
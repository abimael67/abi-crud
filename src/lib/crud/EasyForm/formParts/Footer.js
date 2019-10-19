import React from 'react'
import {ActionModes} from '../../Util/enum'
export const FormFooter = ({ saveCallback, deleteCallback, createCallback, mode, goBack, saveButtonDisabled }) => {

    return (
        <div className="row col-lg-12 col-sm-12">
            <div className="col-lg-6 col-sm-12"></div>
            <div className="col-lg-6 col-sm-12" style={{ textAlign: 'right' }}>
                {mode === ActionModes.Update? (<React.Fragment>
                    <button className="btn btn-danger">Delete</button>{" "}
                    <button className="btn btn-info" disabled={saveButtonDisabled} onClick={() => saveCallback()}>Save</button>{" "}
                </React.Fragment>) : mode === ActionModes.Insert ? <button className="btn btn-success" disabled={saveButtonDisabled} onClick={() => createCallback()}>Create</button> : ''}
                {" "}
                <button onClick={() => goBack()} className="btn btn-default">Back</button>
            </div>
        </div>
    )
}
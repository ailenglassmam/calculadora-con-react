import React from "react";
import '../styles/Btn-clear.css';

const BotonClear = (props) => (
    <div className="btn-clear" onClick={props.limpiarDisplay}>
        {props.children}
    </div>
);

export default BotonClear;
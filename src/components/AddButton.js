import React from 'react';

export default function AddButton(props) {
    return (
        <button id={props.code} onClick={props.add} data-testid="add-button">
            {props.operator}
        </button>
    );
}

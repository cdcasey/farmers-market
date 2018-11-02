import React from 'react';

export default function RemoveButton(props) {
    return (
        <button id={props.code} onClick={props.add} data-testid="remove-button">
            -
        </button>
    );
}

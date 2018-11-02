import React from 'react';

export default function Button(props) {
    return (
        <button id={props.code} onClick={props.add} data-testid="add-button">
            +
        </button>
    );
}

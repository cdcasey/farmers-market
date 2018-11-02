import React from 'react';

export default function Button(props) {
    return (
        <button
            id={props.code}
            onClick={props.addOrRemove}
            data-testid="add-button"
        >
            {props.operator}
        </button>
    );
}

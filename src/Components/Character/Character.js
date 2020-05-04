import React from 'react';

const characters = (props) => {
    const styles = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <div style={styles} onClick={props.clicked}>
            {props.charlist}
        </div>
    );
}

export default characters;
import React from 'react'

const Heading = ({heading}) => {
    return (
        <div
            style={{
                textAlign: 'center',
                color: 'white',
                marginBottom: "30px"
            }}
        >
            <h1>{heading}</h1>
        </div>
    )
}

export default Heading
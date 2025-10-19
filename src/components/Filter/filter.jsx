import React from 'react'

const Filter = ({ filterText, onFilter, onClear }) => {
    return (
        <>
            <input
                className='input border-blue-200 h-8'
                id="search"
                type="text"
                placeholder="Filter By Name"
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
            />
            < button className='btn btn-sm btn-warning' onClick={onClear}>
                X
            </ button>
        </>
    )
}

export default Filter

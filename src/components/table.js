import React from 'react'

const mapHeaders = function(headers) {
    return headers.map((x) => 
        <th key={x}>{x}</th>
    );
}

const mapRows = function(rows) {
    return rows.map((x) =>
      <tr key={x._rid}>
        <th>{x.date}</th>
        <th>{x.organiser}</th>
        <th>{x.establishment}</th>
        <th><button className='button is-primary'>Rate!</button></th>
      </tr>
    );
}
const Table = (props) => (
    <table className="table">
        <thead>
            <tr>
                {mapHeaders(props.headers)}
            </tr>
        </thead>
        <tbody>
            {mapRows(props.rows)}
        </tbody>
    </table>
)

export default Table

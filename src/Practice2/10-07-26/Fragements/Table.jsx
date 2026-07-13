import React from 'react'

function Row(){
    return(
    <>
        <td>Nithin</td>
        <td>25</td>
    </>
    )
}

function Table() {
  return (
    <table border='1'>
        <tbody>
            <tr>
                <Row/>
            </tr>
        </tbody>
    </table>
  )
}

export default Table
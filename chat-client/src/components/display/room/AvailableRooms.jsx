import React from 'react'
import { Container, Table } from 'reactstrap'

function AvailableRooms() {

    return (
        <>
            <div >
                <Table hover>
                    <thead>
                        <tr>
                            <th>
                                Available Rooms
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>
                                Room 1
                            </th>
                        </tr>
                        <tr>
                            <th scope='row'>
                                Room 2
                            </th>
                        </tr>
                        <tr>
                            <th scope='row'>
                                Room 3
                            </th>
                        </tr>
                        <tr>
                            <th scope='row'>
                                Room 4
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default AvailableRooms
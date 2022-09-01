
import React, { useState } from 'react'
import { useEffect } from 'react'   
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, FormGroup, Label } from 'reactstrap'
import Layout from '../../components/Layout'
import EditableTable from '../../components/Table'
import { OrderPage } from '../../newFile'
import axios from 'axios'
function admin() {
    const [showModal, setShowModal] = useState(false)
    const [positionsColumns, setpositionsColumns] = useState([])
    const [rowData, setRowData] = useState(OrderPage)
    const newEntry = {...OrderPage[0]}
    function getColumns(data) {
        const columns = Object.keys(data[0])?.map(item => ({
            name: item,
            selector: row => row[item]
        }))
        console.log(columns);
        return columns
    }
    useEffect(() => {
        setpositionsColumns(() => getColumns(OrderPage))
    }, [])
    console.log(rowData);

    async function saveData(){
        const data = rowData.filter(item=>item.tradingsymbol!=='')
        console.log(data.length);
        const responce = await axios.post('/api/saveData',{
            data: data,
            field:'OrderPage'
        })

    }

    return (
        <Layout>
            {/* <Modal isOpen={showModal} toggle={() => setShowModal(prev => !prev)} >
                <ModalHeader toggle={() => setShowModal(prev => !prev)}>Add Position</ModalHeader>
                <ModalBody>
                    {positionsColumns.map(item => {
                        return (
                            <FormGroup>
                                <Label for={item.name}>
                                    {item.name}
                                </Label>
                                <Input type='text' name={item.name} />
                            </FormGroup>
                        )
                    })}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setShowModal(prev => !prev)}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() => setShowModal(prev => !prev)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal> */}
            <div style={{
                margin: 10,

            }}>
                <Button style={{ float: 'right', margin: 5 }} size='md' color='primary' onClick={()=>saveData()}>Save</Button>
                <Button style={{ float: 'right', margin: 5 }} size='md' color='primary' onClick={() => setRowData(prev=>([...prev,newEntry]))}>Add</Button>
                <EditableTable data={rowData} setData={setRowData} />
                {/* <DataTable columns={positionsColumns} data={OrderPage} /> */}
            </div>
        </Layout>

    )
}

export default admin
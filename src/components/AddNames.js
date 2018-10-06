import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'

export default class AddNames extends Component {
  constructor(props){
    super(props)
    this.handleRowDelete  = this.handleRowDelete.bind(this)
    this.handleRowEdit = this.handleRowEdit.bind(this)
  }
  handleRowEdit(row){
    this.props.onPersonEdit(row.id)
  }
  handleRowDelete(row){
    this.props.deletePerson(row.id)
  }
  render() {
    let columns = [
      {
        dataField: 'id',
        text: 'S.No',
        hidden: true
      },
      {
        dataField: 'name',
        text: 'Name'
      },
      {
        dataField: 'contact',
        text: 'Mobile Number'
      },
      {
        dataField: 'exists',
        isDummyField: true,
        text: 'Action',
        editable: false,
        formatter: (cellContent, row) => {
          if(row.exists) {
            return(<button type='button' onClick={() => {this.handleRowDelete(row)}} >Delete</button>)
          }
        }
      }
    ]
    return (
    <div>
      <BootstrapTable 
      keyField='id' 
      columns={columns} 
      data={this.props.data} 
      cellEdit={ cellEditFactory({ 
        mode: 'click', 
        blurToSave: true, 
        afterSaveCell: (oldValue, newValue, row) => { this.handleRowEdit(row)}
       })}/>
      <Link to='/restrictions'>
        <button type="button">
          Next
        </button>
      </Link>
    </div>)
  }
}

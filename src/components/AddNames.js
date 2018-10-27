import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export default class AddNames extends Component {
  constructor(props) {
    super(props)
    this.handleRowDelete = this.handleRowDelete.bind(this)
    this.handleRowEdit = this.handleRowEdit.bind(this)
  }
  handleRowEdit(row) {
    this.props.onPersonEdit(row.id)
  }
  handleRowDelete(row) {
    this.props.deletePerson(row.id)
  }
  render() {
    let nextButton = this.props.data.length > 3 ? (<Link to='/restrictions' className="no-link"><div className="btn btn-next mb-4 btn-block">Next</div></Link>) : (<div className="alert alert-danger">Hey, add at least 3 friends!!</div>)
    let columns = [
      {
        dataField: 'id',
        text: 'S.No',
        hidden: true
      },
      {
        dataField: 'sNo',
        text: '#',
        formatter: (cell, row, rowIndex) => { return rowIndex + 1 },
        isDummyField: true,
        editable: false,
        headerClasses: "h5",
        classes: "h6",
        style: {
          width: "5vw"
        }
      },
      {
        dataField: 'name',
        text: 'Name',
        headerClasses: "h5",
        classes: "h6",
        style: {
          width: "40vw"
        }
      },
      {
        dataField: 'contact',
        text: 'Contact',
        headerClasses: "h5",
        classes: "h6",
        style: {
          width: "40vw"
        }
      },
      {
        dataField: 'exists',
        isDummyField: true,
        text: 'Action',
        headerClasses: "h5",
        editable: false,
        formatter: (cellContent, row) => {
          if (row.exists) {
            return (<button type='button' className="btn btn-sm btn-danger shadow" onClick={() => { this.handleRowDelete(row) }} ><FontAwesomeIcon icon={faTrashAlt} /><span className="d-none d-md-block">Delete</span></button>)
          }
        },
        style: {
          width: "15vw"
        }
      }
    ]
    return (
      <div className="container">
        <BootstrapTable keyField='id'
          columns={columns}
          bordered={false}
          rowClasses="bg-light shadow-sm rounded my-2 py-2"
          data={this.props.data}
          cellEdit={cellEditFactory({
            mode: 'click',
            blurToSave: true,
            afterSaveCell: (oldValue, newValue, row) => { this.handleRowEdit(row) }
          })} />
        <div>
          {nextButton}
        </div>
      </div>)
  }
}

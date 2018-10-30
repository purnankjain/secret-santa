import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

export default class AddNames extends Component {
  constructor(props) {
    super(props)
    this.handleRowDelete = this.handleRowDelete.bind(this)
    this.handleRowEdit = this.handleRowEdit.bind(this)
    this.state = {
      isValid: true
    }
  }
  handleRowEdit(row) {
    this.props.onPersonEdit(row.id)
  }
  handleRowDelete(row) {
    this.props.deletePerson(row.id)
  }
  validateData(people) {
    let isValid = true
    people.forEach((person) => {
      let isNonAlpha = new RegExp(/[^a-zA-Z]/)
      let isNonNumeric = new RegExp(/[^\d]/)
      if(person.exists && (isNonAlpha.test(person.name) || person.name.length < 2 || isNonNumeric.test(person.contact) || person.contact.length !== 10)){
        isValid = false
      }
    })
    return isValid
  }
  render() {
    let validData = this.validateData(this.props.data)
    let link = <Link to='/restrictions' className="no-link"><div className="btn btn-next mb-4 btn-block">Next</div></Link>
    let validButton = (this.props.data.length > 3) ? (link) : (<div className="alert alert-danger">Hey, add at least 3 friends!!</div>)
    let nextButton = (validData) ? (validButton) : (<div className="alert alert-danger">Invalid Data</div>)

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
        headerClasses: "header-text",
        classes: "row-text",
        style: {
          width: "5vw"
        }
      },
      {
        dataField: 'name',
        text: 'Name',
        headerClasses: "header-text",
        classes: "row-text",
        style: {
          width: "40vw"
        },
        formatter: (cell, row, rowIndex) => {
          if ((new RegExp(/[^a-zA-Z]/).test(cell) || cell.length < 2 ) && row.exists) {
            return (<div key={rowIndex}>{cell}&nbsp;<FontAwesomeIcon icon={faExclamationTriangle} className="text-warning" title="Invalid Name" /></div>)
          }
          return (<div key={rowIndex}>{cell}</div>)
        }
      },
      {
        dataField: 'contact',
        text: 'Contact',
        headerClasses: "header-text",
        classes: "row-text",
        style: {
          width: "40vw"
        },
        formatter: (cell, row, rowIndex) => {
          if ((new RegExp(/[^\d]/).test(cell) || cell.length !== 10 ) && row.exists) {
            return (<div key={rowIndex}>{cell}&nbsp;<FontAwesomeIcon icon={faExclamationTriangle} className="text-warning" title="Invalid Contact" /></div>)
          }
          return (<div key={rowIndex}>{cell}</div>)
        }
      },
      {
        dataField: 'exists',
        isDummyField: true,
        text: 'Action',
        headerClasses: "header-text",
        editable: false,
        formatter: (cellContent, row) => {
          if (row.exists) {
            return (<button type='button' className="btn btn-sm btn-danger shadow" onClick={() => { 
              this.handleRowDelete(row) 
              this.forceUpdate()
            }} ><FontAwesomeIcon icon={faTrashAlt} /><span className="d-none d-md-inline-block">&nbsp;Delete</span></button>)
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
            afterSaveCell: (oldValue, newValue, row, column) => {
              column.editorStyle = { background: 'white' };
              this.handleRowEdit(row)
              this.forceUpdate()
            }
          })} />
        <div>
          {nextButton}
        </div>
      </div>)
      
  }
}

const validateData = (props, propIndex, componentName) => {
  let value = props[propIndex]
  if (typeof value.exists !== 'boolean') {
    return new Error(propIndex + ' in ' + componentName + ' is not a boolean')
  }
  if (!value.exists) {
    return
  }
  if (typeof value.id !== 'number') {
    return new Error(JSON.stringify(value) + ' in ' + componentName + ' does not have id as number')
  }
  if (typeof value.name !== 'string') {
    return new Error(propIndex + ' in ' + componentName + ' is not a string')
  }
  if (!new RegExp(/\d{10}/).test(value.contact)) {
    return new Error(JSON.stringify(value) + ' in ' + componentName + ' does not have contact in valid format')
  }
  if (!Array.isArray(value.restrictions)) {
    return new Error(propIndex + ' in ' + componentName + ' is not an array')
  }
  if (value.name.length > 15 || value.name.length < 0) {
    return new Error('The name should be between 1 to 15 characters')
  }
  if (value.contact.length !== 10) {
    return new Error('The contact number should be 10 digits')
  }
  value.restrictions.forEach(restriction => {
    if (typeof restriction !== 'string') {
      return new Error(propIndex + ' in ' + componentName + ' is not an array of strings')
    }
  });
}

AddNames.propTypes = {
  onPersonEdit: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(validateData)
}
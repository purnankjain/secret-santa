import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class RuleBook extends Component {
  render() {
    let columns = [{
      dataField: 'ruleNo',
      text: 'id',
      hidden: true
    },
    {
      dataField: 'sNo',
      text: '#',
      formatter: (cell, row, rowIndex) => { return rowIndex + 1 },
      isDummyField: true,
      style: {
        width: "10%"
      },
      editable: false
    },
    {
      dataField: 'rule',
      text: 'Rule',
      style: {
        width: "75%"
      }
    },
    {
      dataField: 'exists',
      text: 'Action',
      isDummyField: true,
      formatter: (cellContent, row, rowIndex) => {
        if (row.rule !== '') {
          return (<button type='button' className="btn btn-danger btn-sm" onClick={() => { this.props.handleDelete(row) }} ><FontAwesomeIcon icon={faTrashAlt} /><span className="d-none d-md-inline-block">&nbsp;Delete</span></button>)
        }
      },
      editable: false,
      style: {
        width: "15%"
      }
    }]
    return (<div>
      <label className="text-primary h5">Add Rules</label>
      <BootstrapTable
        keyField='ruleNo'
        columns={columns} data={this.props.rules}
        bordered={false}
        rowClasses="bg-light shadow-sm rounded my-2 py-2"
        cellEdit={cellEditFactory({
          mode: 'click',
          blurToSave: true,
          afterSaveCell: (oldValue, newValue, row) => {
            this.props.handleRuleEdit(row, oldValue)
          }
        })}
      />
    </div>)
  }
} 
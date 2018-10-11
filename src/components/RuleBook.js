import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
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
      formatter: (cell, row, rowIndex) => { return rowIndex + 1},
      isDummyField: true,
      editable: false
    },
    {
      dataField: 'rule',
      text: 'Rule'
    },
    {
      dataField: 'exists',
      text: 'Action',
      isDummyField: true,
      formatter: (cellContent, row, rowIndex) => {
        if(row.rule !== '') {
          return(<button type='button' onClick={() => {this.props.handleDelete(row)}} >Delete</button>)
        }
      },
      editable: false
    }]
    return(<div>
      <BootstrapTable 
      keyField = 'ruleNo'
      columns = { columns } data = {this.props.rules}
      cellEdit={cellEditFactory({
        mode:'click', 
        blurToSave: true, 
        afterSaveCell: (oldValue, newValue, row) => {
          this.props.handleRuleEdit(row, oldValue)} 
      })} 
      />
    </div>)
    }
  }
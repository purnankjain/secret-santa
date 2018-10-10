import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
export default class RuleBook extends Component {
  render() {
    console.log('called render')
    let columns = [{
      dataField: 'ruleNo',
      text: 'id',
      hidden: true
    },
    {
      dataField: 'sNo',
      text: '#',
      formatter: (cell, row, rowIndex) => { console.log('rendering serial' + (rowIndex + 1)) ; return rowIndex + 1},
      isDummyField: true,
      editable: false
    },
    {
      dataField: 'rule',
      text: 'Rule'
    },
    {
      dataField: 'delete',
      text: 'Action',
      isDummyField: true,
      formatter: (cellContent, row, rowIndex) => {
        console.log('checking' + rowIndex)
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
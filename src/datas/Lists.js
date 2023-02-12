import React, { Component } from 'react'
import Header from './Header';
import './Header.css';
import{ Table } from 'react-bootstrap';

class Lists extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('check') == null)
            localStorage.setItem('check', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('check'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('check', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('check', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }


    render() {
        return (
            <div>
                <Header
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <hr />
                <div className="body">
                    <h1>Entries</h1>
                <Table striped bordered hover className="table">
  <thead>
    <tr>
    
      <th> Name</th>
      <th>cocktail</th>
      <th>points</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.list.map((item, index) => {
        return <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.Cocktail}</td>
            <td>{item.points}</td>
            <td><button onClick={() => this.handleEdit(index)}>Edit</button> <button onClick={() => this.handleDelete(index)}>Delete</button></td>
            
        </tr>
    })}
  </tbody>
</Table>
</div>
            </div>
        )
    }
}

export default Lists;

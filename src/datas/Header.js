import React, { Component } from 'react'
import './Header.css';

class Header extends Component {

    state = {
        ...this.object()
    }

    object() {
        if (this.props.currentIndex === -1)
            return {
                Name: '',
                Cocktail: '',
                points: '',
             
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.object() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    reset =(e)=> {
        this.setState("");
    }

    render() {
        return (
            <div className="catch">

                <h1>Add Entry</h1>
            <form onSubmit={this.handleSubmit} autoComplete="off" >
                <label className="ride">Name</label>
                <input name="Name" placeholder="Enter your name" className="restau" onChange={this.handleInputChange} value={this.state.Name} /><br />
                <label className="ride">Select cocktail</label>

                < input name="Cocktail" placeholder="Cocktail" className="restau" onChange={this.handleInputChange} value={this.state.Cocktail} /><br />
                <label className="ride">Points(0 to 10)</label>
                < input name="points" placeholder="enter points" className="restau" onChange={this.handleInputChange} value={this.state.points} /><br />
             
                <button type="submit" className="btn">Submit</button>
                <button type="submit" className="btn1" onclick={()=> {this.reset()}}>Reset</button>
            </form>
            </div>
        )
    }
}

export default Header;


// app.ja
     
{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#home">FE Task</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  

  </Nav>
  <Nav>
    <Nav.Link href="#deets">info</Nav.Link>
    <Nav.Link eventKey={2} href="#memes">
      task
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>

<List /> */}
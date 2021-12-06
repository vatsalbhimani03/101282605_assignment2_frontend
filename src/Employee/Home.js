import React, { Component } from 'react'
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';

const DataBase_url = 'http://localhost:9090/api/employees/';

const Employees = props => (

    <tbody>
        <tr>
            <td>{props.employee.FirstName}</td>
            <td>{props.employee.LastName}</td>
            <td>{props.employee.email}</td>
            <td class="d-flex justify-content-around">
                <Link to={"/edit/" + props.employee._id} >
                    <button className="btn-warning">
                        <a href="#" class="btn a-btn-slide-text">
                        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        <span><strong>Edit</strong></span>            
                        </a>
                    </button>
                </Link>
                <Link to={"/home"}  >
                    <button className="btn-danger" onClick={(e) => { props.empDelete(props.employee._id) }}>
                        <a href="#" class="btn a-btn-slide-text">
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            <span><strong>Delete</strong></span>            
                        </a> 
                    </button>
                </Link>
                <Link to={"/view/" + props.employee._id} >
                    <button className="btn-info">
                        <a href="#" class="btn a-btn-slide-text">
                            <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                            <span><strong>View</strong></span>            
                        </a>
                    </button>
                </Link>
            </td>

        </tr>
    </tbody>
)

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			employee: [] 
		};
    }

    componentDidMount() {
        axios.get(DataBase_url)
            .then(res => {
                console.log(res.data)
                const emp = res.data
                this.setState({ emp })
            })
            .catch((error) => {
                console.log(error);
            })


    }
	empDelete(id) {

        axios.delete(DataBase_url + id)
            .then(res => { console.log(res.data) });

        window.location.reload(false);
    }

    empList() {
        return this.state.employee.map(emp => {
            return <Employees className="card-deck card" employee={emp} key={emp._id} empDelete={this.empDelete} />;
        })
    }

    render() {
        return (
            <div>
                <div class="container-xl">
                    <div class="table-responsive">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h2><b>Employee</b> Management</h2>
                                    </div>
                                    <div class="col-sm-6">
                                        <Link to={"/add"} >
                                            <a href="#" class="btn btn-success a-btn-slide-text">
                                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                                <span><strong>Add New Employee</strong></span>            
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                {this.empList()}
                            </table>
                        </div>
                    </div>        
                </div>
            </div>
        )
    }
}

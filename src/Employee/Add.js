import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

const DataBase_url = 'http://localhost:9090/api/employees/';

export default class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            FirstName: '',
            LastName: '',
            email: '',
            employee: []
        }
    }

    componentDidMount = () => {
        axios.get(DataBase_url)
            .then(res => {
                this.setState({
                    FirstName: res.data.FirstName,
                    LastName: res.data.LastName,
                    email: res.data.email
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(DataBase_url)
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        employee: res.data.map(
                            emp => emp.FirstName
                            ),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeFName = (e) => {
        this.setState({
            FirstName: e.target.value
        })
    }

    onChangeLName = (e) => {
        this.setState({
            LastName: e.target.value
        })
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onSubmit = (e) => {

        const employees = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email
        }

        console.log(employees);

        axios.put(DataBase_url, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <div class="modal-header">						
                    &nbsp;<h4 class="modal-title">Add Employee</h4>&nbsp;
				</div>
                <div id="addEmployeeModal" class="modal fade" className="row">
					<div class="modal-dialog" className="container col-md-8 mx-auto">
						<div class="modal-content" className="row">
                            <div className="col">
                            </div>
                            <div class="modal-body" className="col-6">	
                                <form onSubmit={this.onSubmit} action="/view">				
									<div class="form-group">
										<label>First Name</label>
										<input type="text" class="form-control" required 
                                        value={this.state.FirstName}
                                        onChange={this.onChangeFName}/>
									</div>
                                    <div class="form-group">
										<label>Last Name</label>
										<input type="text" class="form-control" required 
                                        value={this.state.LastName}
                                        onChange={this.onChangeLName}/>
									</div>
									<div class="form-group">
										<label>Email Id</label>
										<input type="email" class="form-control" required 
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}/>
									</div>
								
                                    <div class="modal-footer">
                                        
                                        <a href="/view"><input href="/view" type="button" class="btn btn-warning" data-dismiss="modal" value="Cancel" /></a>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        <input type="submit" class="btn btn-success" value="Add" />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
                                </form>
                            </div>
                            <div className="col">
                            </div>
						</div>
					</div>
				</div>
            </div>
        )
    }
}

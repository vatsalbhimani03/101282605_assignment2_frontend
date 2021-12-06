import React, { Component } from 'react'
import axios from 'axios';
import './Home.css';

const DataBase_url = 'http://localhost:9090/api/employees/';

export default class View extends Component {

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
        axios.get(DataBase_url + this.props.match.params.id)
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

    render() {
        return (
            <div>
                <div class="modal-header">						
                    &nbsp;<h4 class="modal-title">Employee Information</h4>&nbsp;
				</div>
                <div id="addEmployeeModal" class="modal fade" className="row">
					<div class="modal-dialog" className="container col-md-8 mx-auto">
						<div class="modal-content" className="row">
                            <div className="col">
                            </div>
                            <div class="modal-body" className="col-6">	
									<br/>
                                    <div class="form-group">
                                        First Name: {this.state.FirstName}
									</div>
                                    <div class="form-group">
										Last Name: {this.state.LastName}
									</div>
									<div class="form-group">
										Email Id: {this.state.email}
									</div>
								
                                    <div class="modal-footer">
                                        <a href="/home"><input href="/view" type="button" class="btn btn-success" data-dismiss="modal" value="OK" /></a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </div>
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

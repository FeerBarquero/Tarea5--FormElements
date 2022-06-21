import React, {Component} from "react";
import Employee from "./Employee";

class EmployeeAdd extends Component{
    initialState = {
        id:'',
        name: '',
        job: '',
        birthdate: '',
        active:false,
        employeenumber:'',
        department:'',
        gender:"female",

    };

    state = this.initialState;

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]:value,
        });
    };

    handleActiveChange = e => {
        const {checked} = e.target;
        this.setState({
            active:checked,
        });
    };

    handleSubmit= (e) =>{
        e.preventDefault();
        const {hire} = this.props;
        hire(this.state);
        this.setState(this.initialState);
    };

    render(){
        const {id, name, job, birthdate, active, notes, employeenumber, department,gender} = this.state;
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="id">Id</label>
                <input 
                type="text" 
                name="id" 
                id="id" 
                value={id} 
                placeholder="Enter id here"
                onChange={this.handleChange}
                />
                <label htmlFor="employeenumber">Employee number</label>
                <input 
                type="number" 
                name="employeenumber" 
                id="employeenumber" 
                value={employeenumber} 
                placeholder="Enter your employee number here"
                onChange={this.handleChange}
                />
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                value={name} 
                placeholder="Enter name here"
                onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input 
                type="text" 
                name="job" 
                id="job" 
                value={job}  
                placeholder="Enter job here"
                onChange={this.handleChange}
                />
                <label htmlFor="birthdate">Birth date</label>
                <input 
                type="date" 
                name="birthdate" 
                id="birthdate" 
                value={birthdate} 
                placeholder="Enter birthdate here"
                onChange={this.handleChange}
                />
                <label htmlFor="active">Active</label>
                <input 
                type="checkbox" 
                name="active" 
                id="active" 
                checked={active} 
                placeholder="Enter state here"
                onChange={this.handleActiveChange}
                />
               <fieldset>
               <legend>Gender</legend>
              <div>
             <input type="radio" id="gender" name="gender" value="female"
             checked={gender === 'female'}
             onChange={this.handleChange}
             />
            <label for="Female">Female</label>
            </div>
           <div>
           <input type="radio" id="gender" name="gender" value="male"
           checked={gender === 'male'}
           onChange={this.handleChange}
           />
           <label for="Male">Male</label>
            </div>
            <div>
              <input type="radio" id="gender" name="gender" value="other"
                checked={gender === 'other'}
                onChange={this.handleChange}
              />
           <label for="Other">Other</label>
           </div>
            </fieldset>

                <label htmlFor="notes">Notes</label>
                <input 
                type="text" 
                name="notes" 
                id="notes" 
                value={notes} 
                placeholder="Enter your note here"
                onChange={this.handleChange}
                />
               <label for="department">Department</label>
               <select id="department" onChange={this.handleChange} name="department" placeholder="Enter your department here" value={department} form="department">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               </select>
            
                <input type="submit" value="Hire"/>
            </form>
        );
    }
}

export default EmployeeAdd;
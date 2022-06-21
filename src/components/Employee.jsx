import React, {Component} from 'react';

class Employee extends Component{
   formatGender(gender){
      return gender.toUpperCase();
   }
   render(){
      const { name, job, fire, id, birthdate,active, notes,employeenumber,department,gender} = this.props;
       return(
        <tr>
         <td>{employeenumber}</td>
          <td>{name}</td>
          <td>{job}</td>
          <td>{birthdate}</td>
          <td>{active ? "Yes":"No"}</td>
          <td>{notes}</td>
          <td>{department}</td>
          <td>{this.formatGender(gender)}</td>
   
          
          <td>
             <button onClick={()=> fire(id)}>Fire</button>
          </td>
        </tr>
           
       );
   }
}

export default Employee;
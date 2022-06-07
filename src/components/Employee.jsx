import React, {Component} from 'react';

class Employee extends Component{
   render(){
      const { name, job, fire, id} = this.props;
       return(
        <tr>
          <td>{name}</td>
          <td>{job}</td>
          <td>
             <button onClick={()=> fire(id)}>Fire</button>
          </td>
        </tr>
           
       );
   }
}

export default Employee;
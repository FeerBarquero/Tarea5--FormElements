import React, {Component} from 'react';
import Employee from './Employee';
import EmployeeAdd from './EmployeeAdd';

class EmployeeList extends React.Component{
state = {
    
    employees : []
};

   fireEmployee = (id) =>{
       const { employees } = this.state;
       this.setState({
       employees : employees.filter((employee) => {
           return employee.id !== id;
       })
    });
   };   

hireEmployee = employee =>{
  this.setState({
    employees:[...this.state.employees, employee],
  });
}

   render(){
       
       return(
        <>
           <table>
               <thead>
                   <tr>
                       <th>Employee number</th>
                       <th>Name</th>
                       <th>Job</th>
                       <th>Birth Date</th>
                       <th>Active</th>
                       <th>Notes</th>
                       <th>Department</th>
                       <th>Gender</th>
                   </tr>
               </thead>
               <tbody>
                   {this.state.employees.map(employee =>(
                     <Employee 
                     key={employee.id}
                     id ={employee.id} 
                     name={employee.name}
                     job={employee.job}
                     birthdate= {employee.birthdate}
                     active= {employee.active}
                     notes= {employee.notes}
                     employeenumber= {employee.employeenumber}
                     department= {employee.department}
                     gender= {employee.gender}
                     fire={this.fireEmployee}
                     />
                    ))}
               </tbody>
           </table>
           <hr />
           <EmployeeAdd
             hire={this.hireEmployee}
           />
           </>
       );
   }
}

export default EmployeeList;
import React, {Component} from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component{
   render(){
       const employees = [
           {
               name:'Fernanda',
               job:'CEO',
           },
           {
            name:'Juan',
            job:'Manager',
        },
        {
            name:'Fran',
            job:'Designer',
        },
        {
            name:'Jose',
            job:'Developer',
        },
       ];

       return(
           <table>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Job</th>
                   </tr>
               </thead>
               <tbody>
                   {employees.map(employee =>(
                     <Employee name={employee.name} job={employee.job}/>
                    ))}
               </tbody>
           </table>
       );
   }
}

export default EmployeeList;
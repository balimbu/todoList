import {useState} from 'react';

const ToDo = () => {

    let [tasks,setTasks] = useState([]); // a hook in react

    let [taskDetails,setTaskDetails] = useState(''); // hook in react

    let [num, setNum] = useState(0); // hook with initial value as 0

    // let arr = []; // empty array
    let clickHandler = () =>{
        //console.log('in click handler button');
        // arr.push(taskDetails); // adding values to the array
        // tasks.push(taskDetails); // adding values to the array
        // setTasks(tasks);
        //console.log(arr);
        // console.log(tasks);
        let taskObj = {"serialnum": num, "details":taskDetails };
        tasks.push(taskObj);
        console.log(tasks);
        setTasks(tasks);
        console.log(tasks);
        num++; // increment num
        setNum(num);
    }

    let onChangeHandler = (e)=>{
        //console.log(e.target.value); // e is the synthetic event 
        setTaskDetails(e.target.value);
        console.log(taskDetails);
    }
    return ( 
        <div className = "container-fluid">
            Should see the table below
                <div className="table-responsive">
                    <table className="table table-primary table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> # </th>
                                <th scope="col"> Task </th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                tasks.map( (element) => {
                                    return(
                                    <tr key = {element} >
                                        <td> {element.serialnum} </td>
                                        <td> {element.details} </td>
                                    </tr>
                                    
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>  
                Task details <input type ="text" onChange = {onChangeHandler}/>
                {/* <button className ="bg-primary"> Add </button> */}
                <button onClick = {clickHandler} className = "bg-primary"> Add </button>
        </div>
     );
}
 
export default ToDo;
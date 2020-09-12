console.log("js");
$().ready(readyNow);

let totalMonthly = 0;//setting global variable to reference for the total monthly calculation


function readyNow(){
    console.log("jquery linked and ready");
// set up what my page is going to look like

$('body').append(`
<header><h1>Salary Calculator</h1></header>
<h2>Add Employee</h2>
<br>
<input type="text" id="fNameInput" placeholder ="First Name"/>
<input type="text" id="lNameInput" placeholder ="Last Name"/>
<input type="number" id="idInput" placeholder ="ID Number"/>
<input type="text" id="titleInput" placeholder ="Title"/>
<input type="number" id="annualSalaryInput" placeholder ="Annual Salary"/>
<button id="submitButton">Submit</button>
<h2>Employees</h2>
<br>
<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th> </th>
        </tr>
    </thead>
    <tbody id="employeeTable">
    </tbody>
</table>

`);

//click handler for the submit button that call addToTable
$('#submitButton').on('click',addToTable);
}



function addToTable(){
    //setting inputs to variables to make them easier to work with
    let fName = $('#fNameInput').val();
    let lName = $('#lNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    //console.log(`${fName},${lName},${id},${title},${annualSalary}`);//loging the variables to test inputs before passing into dom
    //append the table with the inputs
    $('#employeeTable').append(`
    <tr>
        <td>${fName}</td><td>${lName}</td><td>${id}</td><td>${title}</td><td>${annualSalary}</td><td><button class="deleteRow">Delete</button></td>
    </tr>
    `)
    totalMonthly += Number(annualSalary);
    console.log(totalMonthly);
}
console.log("js");
$().ready(readyNow);

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
        </tr>
    </thead>
</table>

`);
}
//console.log("js");//make sure js is linked correctly
$().ready(readyNow);//telling jquery when document is ready run readyNow

let totalMonthly = 0;//setting global variable to reference for the total monthly calculation


function readyNow() {
    // console.log("jquery linked and ready");//making sure jquery runs the readyNow function

    // set up structure of html to append

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
<h3 id="totalMonthly">Total Monthly: $${totalMonthly.toFixed(2)}</h3>

`);

    //click handler for the submit button that call addToTable
    $('#submitButton').on('click', addToTable);


    //click handler for delete buttons on employee record this listenes
    //to the body for a click from an item with the class deleteRow
    //and then runs the function deleteEmployee
    $('body').on('click', '.deleteRow', deleteEmployee);


    return true;
}//end readyNow



function addToTable() {
    //setting inputs to variables to make them easier to work with

    let fName = $('#fNameInput').val();
    let lName = $('#lNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();

    //console.log(`${fName},${lName},${id},${title},${annualSalary}`);//loging the variables to test inputs before passing into dom

    //append the table with the inputs
    if (fName != "" && lName != "" && id != "" && title != "" && annualSalary != "") {//checking for empty inputs as long as all are not empty continue else it will alert the user
        //append to the table with id employeeTable the inputs
        $('#employeeTable').append(`
    <tr>
        <td>${fName}</td><td>${lName}</td><td>${id}</td><td>${title}</td><td class="annualSalaryTable">${annualSalary}</td><td><button class="deleteRow">Delete</button></td>
    </tr>
    `);
        totalMonthly += Number(annualSalary);//update totalMonthly with the new salary passed into the input 
        // console.log(`Total Monthly variable is: ${totalMonthly}`);//checking to see what total monthly variable is
        if (totalMonthly / 12 > 20000) {//checking if totalMonthly is over $20,000
            $('#totalMonthly').css("color", "white");//if over 20,000 we will change text color to white
            $('#totalMonthly').css("background-color", "red");//if over 20,000 we will change background color to red
        };

        $('#totalMonthly').text(`Total Monthly: $ ${(totalMonthly / 12).toFixed(2)}`);//update total monthly on the dom since it was updated on line 72 inside this function
        $('#fNameInput').val("");//clear input
        $('#lNameInput').val("");//clear input
        $('#idInput').val("");//clear input
        $('#titleInput').val("");//clear input
        $('#annualSalaryInput').val("");//clear input

    } else {
        alert("Please leave no input blank"); //provides pop up that tell user to leave no input blank
    }
    return true;
}// end addToTable







function deleteEmployee(event) {
    let grabAnnualSalary = $(event.target).parent().parent().children('.annualSalaryTable').text();
    //recieving the data held within the .annualSalaryTable that is closest to our row we delete
    //I went up the tree 2 parents and then back down to the child with the class annualSalaryTable then i got the inner html text within that <td>


    //console.log(grabAnnualSalary); // this is how i was testing where i was in the tree before i found the data i wanted
    if (confirm("Are you sure you want to DELETE this employee")) {//making sure we really want to delete the employee as long as we confirm yes we will proceed.
        $(event.target).closest('tr').remove();//removes the closest <tr> which is the row the button is in 
        totalMonthly -= Number(grabAnnualSalary);//subtracting the salary that we just deleted
        $('#totalMonthly').text(`Total Monthly: $ ${(totalMonthly / 12).toFixed(2)}`);//updating the total monthly running tab since we just changed
        //it in the lines above
        if (totalMonthly / 12 < 20000) {//checking to see if the salary we just subtracted puts us back under the maximum allowed
            $('#totalMonthly').css("color", "black");//resetting css font color to black if less than max
            $('#totalMonthly').css("background-color", "rgb(187, 180, 180)");//resetting css background color to white if less than max
        }
    }
    return true;
}// End deleteEmployee


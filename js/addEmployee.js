$(document).ready(function(){

$('#btnAdd-id').click ((e) =>{
    e.preventDefault();
    let first_Name = $('#firstN').val();
    let last_Name = $('#lastN').val();
    let gender = $('#gender').val();
    let age = Number($('#age').val());
    let email = ($('#email').val());
    let address = $('#address').val();
    let city = $('#city').val();
    let department = $('#dept').val();
    let level = Number ($('#level').val());


    $.ajax ({
        url: `http://localhost:4000/users`,
        method: 'post',
        data: {
            first_Name, last_Name, gender, age: Number(age), email, address, city, department, level: Number(level), Status: '', salary: "0"
        },
        success: function(e){
            window.location.replace('./employee_page.html')
            alert("Employee was added successfully");
        },

    })

    
    
    })
})

//get the url parameters
var url = new URL(location.href).search;
var search_params = new URLSearchParams(url);
var eid = search_params.get("id");

const eUrl = "http://localhost:4000/users/" + eid
$.ajax({
    url: eUrl,
    method: "get",
    success: function(data){
        //populate
        $('#ufirstN').val(data.first_Name);
        $('#ulastN').val(data.last_Name);
        $('#ugender').val(data.gender);
        $('#uage').val(data.age);
        $('#uaddress').val(data.address);
        $('#uemail').val(data.email);
        $('#ucity').val(data.city);
        $('#udept').val(data.department);
        $('#ulevel').val(data.level);
        // $('#ustatus').text(data.Status);
        // $('#usalary').text(data.salary);
    }
})

$('#btnEdit-id').click ((e) =>{
    e.preventDefault();
    let first_Name = $('#ufirstN').val();
    let last_Name = $('#ulastN').val();
    let gender = $('#ugender').val();
    let age = Number($('#uage').val());
    let email = ($('#uemail').val());
    let address = $('#uaddress').val();
    let city = $('#ucity').val();
    let department = $('#udept').val();
    let level = Number ($('#ulevel').val());
    let Status = $('#ustatus').text();
    let salary = $('#usalary').text();

    $.ajax ({
        url: eUrl,
        method: 'put',
        data: {
            first_Name, last_Name, gender, age: Number(age), email, address, city, department, level: Number(level), Status: Status, salary: salary
        }
    }) 
    .done((e) => {
        window.location.replace('./employee_page.html')
        $('#uage').val('');
        $('#ufirstN').val('');
        $('#ulastN').val('');
        $('#ugender').val('');
        $('#uage').val('');
        $('#uemail').val('');
        $('#uaddress').val('');
        $('#ucity').val('');
        $('#udept').val('');
        $('#ulevel').val('');
        $('#ustatus').val('');
        $('#usalary').val('');

    

    alert("Employee has been successfully Updated");
    })
})

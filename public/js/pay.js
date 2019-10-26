$(document).ready(function(){
    
    $('#payAll').click(function(event){
        event.preventDefault();
    
        $.get("http://localhost:4000/payRoll", function(pData){
            //Data is returned
                //inner loop to get user profile
                $.get("http://localhost:4000/users", function(userData){
                    for (let j = 0; j < userData.length; j++){
                        const toBePaid = pData[parseInt(userData[j].level) - 1].Amount
                        //to post
                        currentSalary = Number(userData[j].salary)
                        const sum = currentSalary + toBePaid
                        const paidDate = new Date();
                        const paidString = "Last Paid On: " + String(paidDate).slice(0, 24)
                        console.log(paidString)
                        const update = {
                            first_Name: userData[j].first_Name,
                            last_Name: userData[j].last_Name,
                            gender: userData[j].gender,
                            age: userData[j].age,
                            email: userData[j].email,
                            address : userData[j].address,
                            city: userData[j].city,
                            department: userData[j].department,
                            level: userData[j].level,
                            Status: paidString,
                            salary: sum
                        }
                        
                        nUrl = "http://localhost:4000/users/" + userData[j].id
    
                        //put here
                        $.ajax({
                            url: nUrl,
                            method: "put",
                            dataType: "json",
                            data: update,
                            success: function(){
                                console.log("Salary Paid")
                                window.location.reload();
                            }
    
                        })
    
                    }
                })
        }) 
    
    })
    
})

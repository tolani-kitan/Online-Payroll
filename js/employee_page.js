
$(document).ready(function(){
    $.ajax({
        url: 'http://localhost:4000/users',
        method: 'get',
    }).done((e)=>{
            for (let i = 0; i < e.length; i++){
                $('#tbody').append(
                    `<tr>
                    <td>${i + 1}
                    </td>
                        <td>
                           ${e[i].first_Name} 
                           </td>
                        <td>
                        ${e[i].last_Name} 
                        </td>
                        <td>
                        ${e[i].department}
                        </td>
                        <td>
                            ${e[i].level}
                            </td>
                        <td>
                            ${e[i].Status}
                            <td>
                            <button type="button" class="btn btn-primary delete-btn" id="del-${e[i].id}">Delete</button>
                            </td>
                            <td>
                            <a href="editEmp.html?id=${e[i].id}" class="btn btn-primary" id="edt-${e[i].id}">View Profile</a>
                            </td>
                        
                        </tr>`
                   
                        )
    
                    }
                    $('.delete-btn').on('click',(e)=>{
                        let id = e.target.id.split('del-').join('')
                
                        $.ajax({
                            url:`http://localhost:4000/users/${id}`,
                            method: 'delete'
                        }).done((e)=>{
                        window.location.replace("./employee_page.html")
                        })
                    })
    
    
                })
    
                $('#raj').click ((e) =>{
                    e.preventDefault();
                    window.location.replace('./addEmployee.html')
                })

               
})
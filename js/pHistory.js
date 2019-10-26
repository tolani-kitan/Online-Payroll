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
                        ${e[i].Status}
                        </td>
                        <td>
                            ${e[i].salary}
                            </td>
                        </tr>`
                   
                        )
    
                    }
    
    
                })
    
                $('#prevPage').click ((e) =>{
                    e.preventDefault();
                    window.location.replace('./employee_page.html')
                })

               
})
function generateManagerCard(manager) {
    return `
    <div class="card" style="width: 18rem;">
       <div class ="cardBody">
       <h4 class="cardTitle">Manager</h4>
       <h5 ${manager.name}</h5>
       <div class="card" style="width: 16rem;">
         <ul class="list-group list-group-flush">
         <li class="list-group-item"><strong>ID:</strong> ${manager.id}</li>
         <li class="list-group-item"><strong>Email:</strong><br> ${manager.email}</li>
         <li class="list-group-item"><strong>Office Number:</strong> ${manager.officeNumber}</li>
         </ul>
       </div>
       </div>
    </div>`
}



module.exports = generateHTML;
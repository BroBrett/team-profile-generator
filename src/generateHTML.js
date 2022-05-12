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
    </div>`;
}

function generateEngineerCard(engineer) {
  return `
  <div class="card" style="width: 18rem;">
     <div class ="cardBody">
     <h4 class="cardTitle">Manager</h4>
     <h5 ${engineer.name}</h5>
     <div class="card" style="width: 16rem;">
       <ul class="list-group list-group-flush">
       <li class="list-group-item"><strong>ID:</strong> ${engineer.id}</li>
       <li class="list-group-item"><strong>Email:</strong><br> ${engineer.email}</li>
       <li class="list-group-item"><strong>Github:</strong> ${engineer.officeNumber}</li>
       </ul>
     </div>
     </div>
  </div>`;
}

function generateInternCard(Intern) {
  return `
  <div class="card" style="width: 18rem;">
     <div class ="cardBody">
     <h4 class="cardTitle">Manager</h4>
     <h5 ${Intern.name}</h5>
     <div class="card" style="width: 16rem;">
       <ul class="list-group list-group-flush">
       <li class="list-group-item"><strong>ID:</strong> ${Intern.id}</li>
       <li class="list-group-item"><strong>Email:</strong><br> ${Intern.email}</li>
       <li class="list-group-item"><strong>School:</strong> ${Intern.officeNumber}</li>
       </ul>
     </div>
     </div>
  </div>`;
}

module.exports = team => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <script src="https://kit.fontawesome.com/a51943e840.js" crossorigin="anonymous"></script>
  <title>Team Generator</title>
</head>
<body>
  <header>My Team</header>
  <div class="team-cards">
      ${generateCards(team)}
  </div>
</body>
</html>`
};

module.exports = generateHTML;
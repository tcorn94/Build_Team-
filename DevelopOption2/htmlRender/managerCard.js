
// create a function that holds the html that will out put the manager
function managerCard(data){
    return `
    <div class="card employee-card">
    ${data.name}

    ${data.getRole()}

    ${data.id}

    ${data.email}

    </div>
    
    `

}
// export managerCard

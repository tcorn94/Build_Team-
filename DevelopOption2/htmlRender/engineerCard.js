
// create a function that holds the html that will out put the engineer
function engineerCard(data){
    return `
    <div class="card" style="width: 18rem;">
    <img src="https://www.st-andrews.ac.uk/dpl/1.5.0/assets/docs/images/placeholders/200x200.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${data.name}</h5>
      <p class="card-text">Role: ${data.getRole()}.</p>
      <p class="card-text"> ID#: ${data.id}.</p>
      <p class="card-text">  Email: ${data.email}.</p>
    
    </div>
  </div>
    
    `

}

// export the engineer card

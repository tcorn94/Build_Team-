
// create a function that holds the html that will output the main body of the html and will take in the data from the other cards
function mainRender(data){
    return `
   
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Page</title>
     
      </head>
    
      <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Your Team</h1>
        <p class="lead">A list of your teammates and their contact info.</p>
      </div>
    </div>
        <script src="js/scripts.js"></script>
      </body>
    </html>

   
`
}
// export mainRender

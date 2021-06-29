// Opening HTML code to be used to generate page...
let htmlString = [`
<!DOCTYPE html>
<html lang="en">
        
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Link to reset stylesheet -->
        <link rel="stylesheet" href="./assets/reset.css">
        <!-- Link to Materialize CSS framework -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <!-- Link to Materialize icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Link to Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        <!-- Link to stylesheet -->
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Team Profile</title>
    </head>
        
    <body>
        <!-- title bar -->
        <nav>
            <div class="nav-wrapper" id="nav-wrapper">
                <h1 class="center">My Team</h1>
            </div>
        </nav>

        <div class="container">    
            
            <div class="row">
            `
]

// Function to add the manager inputs into HTML that creates an employee card 
const generateMgrHTML = (emp) => {
        
    let mgrCard = `
                <!-- mgr card  -->
                <div class="col s12 m6 l4">
                    <div class="card small">
                        <div class="card-content mgr">
                            <span class="card-title">${emp.getName()}</span>
                            <p><span><i class="material-icons">business_center</i></span>&nbsp;&nbsp;${emp.getRole()}</p>
                        </div>
                        <div class="card-action">
                            <div class="id ">
                                <span>ID: </span><span>${emp.getId()}</span>
                            </div>
                            <div class="">
                                <span>Email: </span><a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a>
                            </div>
                            <div class="">
                                <span>Office: </span><span>${emp.getOffice()}</span>
                            </div>
                        </div>
                    </div>
                </div>
    `

    // add Manager's card to the existing HTML
    htmlString.push(mgrCard)
    
    // set the HTML string to include the newly added Manager card
    return htmlString
}

// Function to add the intern inputs into HTML that creates an employee card 
const generateIntCards = (emp) => {
        
    let intCard = `
                <!-- intern card  -->
                <div class="col s12 m6 l4">
                    <div class="card small">
                        <div class="card-content intern">
                            <span class="card-title">${emp.getName()}</span>
                            <p><span><i class="material-icons">lightbulb</i></span>&nbsp;&nbsp;${emp.getRole()}</p>
                        </div>
                        <div class="card-action">
                            <div class="id">
                                <span>ID: </span><span>${emp.getId()}</span>
                            </div>
                            <div>
                                <span>Email: </span><a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a>
                            </div>
                            <div>
                                <span>School: </span><span>${emp.getSchool()}</span>
                            </div>
                        </div>
                    </div>
                </div>
    `
    // add intern's card to the existing HTML
    htmlString.push(intCard)

    // set the HTML string to include the newly added intern card
    return htmlString
}

// Function to add the engineer inputs into HTML that creates an employee card 
const generateEngCards = (emp) => {
        
    let engCard = `
                <!-- engineer card  -->
                <div class="col s12 m6 l4">
                    <div class="card small">
                        <div class="card-content engineer">
                            <span class="card-title">${emp.getName()}</span>
                            <p><span><i class="material-icons">build</i></span>&nbsp;&nbsp;${emp.getRole()}</p>
                        </div>
                        <div class="card-action">
                            <div class="id">
                                <span>ID: </span><span>${emp.getId()}</span>
                            </div>
                            <div>
                                <span>Email: </span><a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a>
                            </div>
                            <div>
                                <span>GitHub: </span><a href="https://github.com/${emp.getGitHub()}" target="_blank">${emp.getGitHub()}</a>
                            </div>
                        </div>
                    </div>
                </div>
    `
    // add engineer's card to the existing HTML
    htmlString.push(engCard)

    // set the HTML string to include the newly added engineer card
    return htmlString
}

// ending HTML to close html code after last employee card div has been added to html string
let endHTMLString = [`
            </div>
            
        </div>

        <footer></footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    </body>

</html>
`]

// Function to add end of HTML to html string
const generateEndHTML = () => {
    // add ending HTML to the existing HTML string
    htmlString.push(endHTMLString)
    // set the HTML string to include the newly added end HTML
        return htmlString
}

// Function to join the array of HTML strings together and remove commas to create one fluid HTML doc
const generateHTML = () => {
    return htmlString.join("");
}

// Export the methods to use in index.js
module.exports = {
    generateEngCards,
    generateIntCards,
    generateMgrHTML,
    generateEndHTML,
    generateHTML
}
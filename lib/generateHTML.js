const fs = require('fs')

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

let endHTMLString = [
                `</div>
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>

        </html>`
]

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
    htmlString.push(mgrCard)
    
    return htmlString
}

const generateIntCards = (emp) => {
    // let intCards = [];
    
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
    htmlString.push(intCard)
    return htmlString
}

const generateEngCards = (emp) => {
    // let engCards = [];
    
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
    htmlString.push(engCard)
    return htmlString
}

const generateEndHTML = () => {
    htmlString.push(endHTMLString)
    return console.log(htmlString.join(" "))
}

const generateHTML = () => {
    return htmlString.join("");
}

// generateEngCards(testEmp)

// testArr = [];
// testCard = `<div class="col s12 m6 l3">
// <div class="card blue-grey darken-1">
//   <div class="card-content white-text">
//     <span class="card-title">Employee Name</span>
//     <p><span><i class="material-icons">work</i></span>Employee role</p>
//   </div>
//   <div class="card-action">
//     <a href="#">ID: </a>
//     <a href="#">Email: </a>
//     <a href="">Office: </a>
//   </div>
// </div>
// </div>`
// function testing(arr,test) {
//     arr.push(test);
// }
// testing(testArr,testCard)
// console.log(testArr);
// console.log(testArr.join())
// fs.writeFile('index.html',testArr.join(),(err) => {
//     err ? console.error(err) : console.log('html created!');
// })


// module.exports = generateHTML
module.exports = {
    generateEngCards,
    generateIntCards,
    generateMgrHTML,
    generateEndHTML,
    generateHTML
}
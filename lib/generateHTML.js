const fs = require('fs')

let htmlString = [
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!-- Link to reset stylesheet -->
            <link rel="stylesheet" href="./assets/reset.css">
            <!-- Link to Materialize CSS framework -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <!-- Link to Materialize icons -->
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <!-- Link to stylesheet -->
            <link rel="stylesheet" href="./assets/style.css">
            <title>Team Profile</title>
        </head>
        
        <body>
            <div class="container">
                
                <nav>
                    <div class="nav-wrapper">
                        <h1 class="center">My Team</h1>
                    </div>
                </nav>
        
                
                <div class="row">
                    <!-- card  -->`
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
                    <div class="col s12 m6 l3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">${emp.getName()}</span>
                                <p><span><i class="material-icons">work</i></span>${emp.getRole()}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">ID: ${emp.getId()}</a>
                                <a href="#">Email: ${emp.getEmail()}</a>
                                <a href="">Office: ${emp.getOffice()}</a>
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
                    <div class="col s12 m6 l3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">${emp.getName()}</span>
                                <p><span><i class="material-icons">work</i></span>${emp.getRole()}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">ID: ${emp.getId()}</a>
                                <a href="#">Email: ${emp.getEmail()}</a>
                                <a href="">Office: ${emp.getSchool()}</a>
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
                    <div class="col s12 m6 l3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title">${emp.getName()}</span>
                                <p><span><i class="material-icons">work</i></span>${emp.getRole()}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">ID: ${emp.getId()}</a>
                                <a href="#">Email: ${emp.getEmail()}</a>
                                <a href="">Office: ${emp.getGitHub()}</a>
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
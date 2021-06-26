const fs = require('fs')

const generateMgrHTML = (emp) => {
        
    let mgrCard = `<div class="col s12 m6 l3">
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
    
    return console.log(mgrCard) 
}

// module.exports = generateMgrHTML
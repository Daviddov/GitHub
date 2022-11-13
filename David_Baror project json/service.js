let theRequest =  {};
let sum = 0;





function requestSender(type, url, resHandeler, header = {}, body = null) {
    let loader = document.querySelector(".loader");
    loader.style.display = "block";

    const xhr = new XMLHttpRequest();
    xhr.open(type, url);

    Object.keys(header).forEach((key) => {
        xhr.setRequestHeader(key, header[key]);
    });

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => {
        theRequest = xhr
        console.log(theRequest);
        loader.style.display = "none";
        switch (theRequest.status) {
            case 201:
                window.location.reload();
                alert('Created');
                resHandeler();
                break;
            case 200:
                theRequest.data = JSON.parse(xhr.responseText)
                resHandeler(theRequest.data);
                break;
            default:
                alert(JSON.stringify(theRequest.responseText));
                break;
        }
    }
    xhr.send(body);
}

let courseIdCounter = 0

class Course {
    constructor(element) {
        courseIdCounter++
        const section = document.createElement('section');
        section.innerText =`${courseIdCounter}.
         ${element.title}`;
        section.className = section
        const course = conteiner.appendChild(section);

        course.onclick = () => {
            const idCourse = element._id;
            sessionStorage.setItem('idCourse', idCourse); 
            window.location.href = './course-details.html?idCourse='+ element._id;
        }
    }
}
            

function randerToHtml(name, tag) {
    const element = name;
    const section = document.createElement(tag);
    section.innerText = element;
    const course = conteiner.appendChild(section);
}


function checkLogin() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
        const loginDate = new Date(user.date);
        const nowDate = new Date;
        const timePass = nowDate - loginDate;
        if (timePass > 60 * 60 * 1000) {
            logout()
        } else {
            const header = document.querySelector('#header')
            const p = document.createElement('h4');
            p.innerText = 'Welcome ' + user.fullName;
            const name = header.appendChild(p)
        }
    } else {
        location.href = './index.html'
    }
}



function login(res) {
    if (res) {
        res.data[0].date = new Date
        const userData = JSON.stringify(res.data[0])
        localStorage.setItem('user', userData);
        location.href = './courses.html'
    }
}
function loginButton() {
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;
    if (email && password) {
        const header = { 'name': email, "password": password }
        requestSender('GET', url, login, header)
    }
}

function logout() {
    localStorage.setItem('user', null);

}

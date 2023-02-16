// let submit = document.querySelector('#submit')
// let userName = document.querySelector('#name')
// let userPhone = document.querySelector('#phone')


// let person = {}
// let listOfUsers = []
// submit.addEventListener('click', function(e){
//     e.preventDefault()
//     person.name = userName.value 
//     person.phone = userPhone.value
//     listOfUsers.push(person)
//     person = {}
// })



let $form = document.querySelector('form')
let $showUsersBtn = document.querySelector('button')
let $list = document.querySelector('#list')
let $sort = document.querySelector("#sort")
let $search = document.querySelector("#seacrh")

$form.submit.addEventListener('click', createUser)

let person = {}
let listOfUsers = []
function createUser(e){
   e.preventDefault()

   person.name = $form.name.value 
   person.phone = $form.phone.value
   person.email = $form.email.value

   listOfUsers.push(person)
   person = {}
   $form.reset()
   dataToJSON(listOfUsers)
}

// JSON.stringify

function dataToJSON(data){
    let str = JSON.stringify(data)
    sendData(str)
}

function sendData(dataJSON){
    localStorage.setItem("list", dataJSON)
}

function getData(key){
    let data = localStorage.getItem(key)
    return JSONToData(data)
}

function JSONToData(json){
     return JSON.parse(json)
}

$showUsersBtn.addEventListener('click', showUsers)


function showUsers(){
    let data = getData('list')
    data.forEach(element => {
        $list.insertAdjacentHTML('afterbegin', `
        <div class="user">
             <h1>${element.name}</h1>
             <h2>${element.phone}</h2>
        </div>
    `)
    })
}

function showUsers() {
    let data = getData('list')
    
    $list.innerHTML = ""
    
    data.forEach(element => {
        $list.insertAdjacentHTML('afterbegin', `
             <div class="user">
                <h1>${element.name}</h1>
                <h2>${element.phone}</h2>
             </div>
            `)
    })
}
$sort.addEventListener("click", Sort)

function Sort() {
    let data = getData("list")

    data.sort(function(a,b){
        if(a.name < b.name){
            return 1
        }else if(a.name > b.name){
            return -1 
        }else{
            return 0
        }
    })

    $list.innerHTML = ""
    
    data.forEach(element => {
        $list.insertAdjacentHTML('afterbegin', `
             <div class="user">
                <h1>${element.name}</h1>
                <h2>${element.phone}</h2>
             </div>
            `)
    })
}

$search.addEventListener("input", Search)

function Search() {
    let data = getData("list")
    $list.innerHTML = ""
    data.filter(function(item) {
        if($search.value == item.name.split("").splice(0, $search.value.length).join("").toLowerCase()){
             return $list.insertAdjacentHTML('beforeend',`
             <div class="user">
                <h1>${item.name}</h1>
                <h2>${item.phone}</h2>
            </div>
             `)
        }
    })
}





// let $title = document.querySelector('h2')

// $title.textContent = "JavaScript"
// $title.innerHTML = "innerHTML JS"
// $title.insertAdjacentHTML('afterbegin', `
// <div class = "user">
//      From JS insertHTML
// </div>
// ` )

// console.log(`2 + 2 = ${2+2}`) //интерполяция




let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// const tabs = [
//     {url:"https://www.linkedin.com/in/zefasil-mulu/"}
// ]
// localStorage.clear()
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads) {
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `<li>
                            <a href=${leads[i]} target='_blank'> '${leads[i]}' </a>
                      </li>`
        // const li = document.createElement("li")
        // li.textContent = leads[i]
        // ulEl.append(li)
    }
    console.log(listItems)
    ulEl.innerHTML = listItems
}
inputBtn.addEventListener("click", (event) => {
    // console.log("Button clicked")
    if(inputEl.value !== "") {
        myLeads.push(inputEl.value)
        // for(let i = 0;i < myLeads.length; i++) {
        // input = input + " " + myLeads[i]
        // console.log(ulEl)
        //}
        // ulEl.innerHTML += "<br>"
        // ulEl.textContent = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        inputEl.value = ""
    }
})

// function renderLead() {
//     let listItem = "<li>" + inputEl.value + "</li>"
//     ulEl.innerHTML += listItem
// }


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)


})
tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

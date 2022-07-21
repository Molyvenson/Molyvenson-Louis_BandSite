function showsSection() {

let ul = document.getElementById("info")
let infoSectionArray = ["Date","Venue", "Location"]

for ( var i = 0; i < infoSectionArray.length; i++){
    let infosList = document.createElement("li")
    infosList.classList.add('infoList');
    document.getElementsByTagName('li')
    infosList.innerHTML =  (infoSectionArray[i])
    ul.appendChild(infosList)
}

let data = ['Ram', 'Shyam', 'Sita', 'Gita' ];
  
let  = document.getElementById("sectionContainer");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})


}






showsSection();
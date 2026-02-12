//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
let form =document.getElementById("form");

function addData(data){
	let tbody=document.getElementById("book-list");
	let tr=document.createElement("tr");
	let td1=document.createElement("td");
	let td2=document.createElement("td");
	let td3=document.createElement("td");
	let td4=document.createElement("td");
	let button=document.createElement("button");
	td1.textContent=data.title;
	td2.textContent=data.author;
	td3.textContent=data.isbn;
	button.textContent="delete";
	td4.classList="delete";
	td4.append(button)
	tr.append(td1,td2,td3,td4);
	tbody.append(tr);
}
form.addEventListener("submit", function (event){
	event.preventDefault();
	let formData=new FormData(event.target);
	let title=formData.get("title");
	let author=formData.get("author");
	let isbn=formData.get("isbn");
	let data={title,author,isbn};
	addData(data);
})

document.getElementById("book-list").addEventListener("click",function(event){
	if(event.target.tagName="button"){
		if(event.target.parentNode.classList.contains("delete")){
			event.target.parentNode.parentNode.remove()
		}
	}
})
	
})
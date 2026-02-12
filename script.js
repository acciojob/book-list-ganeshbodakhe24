document.addEventListener("DOMContentLoaded", function(){

	let form = document.getElementById("form");

	function addData(data){
		let tbody = document.getElementById("book-list");

		let tr = document.createElement("tr");

		let td1 = document.createElement("td");
		let td2 = document.createElement("td");
		let td3 = document.createElement("td");
		let td4 = document.createElement("td");

		let button = document.createElement("button");

		td1.textContent = data.title;
		td2.textContent = data.author;
		td3.textContent = data.isbn;

		button.textContent = "Delete";
		button.classList.add("delete");

		td4.append(button);
		tr.append(td1, td2, td3, td4);
		tbody.append(tr);
	}

	form.addEventListener("submit", function(event){
		event.preventDefault();

		let formData = new FormData(event.target);

		let data = {
			title: formData.get("title"),
			author: formData.get("author"),
			isbn: formData.get("isbn")
		};

		addData(data);
	});

	document.getElementById("book-list").addEventListener("click", function(event){

		if (event.target.classList.contains("delete")) {
			event.target.closest("tr").remove();
		}

	});

});

const image=document.createElement("img");
image.src="https://josipmisko.com/img/books/The-Road-to-React.jpg";
image.width="150";
image.height="150";

const h4=document.createElement("h4");
h4.innerText="Price: 120/-";

const child=document.createElement("div");
child.className="card";
child.appendChild(image);
child.appendChild(h4);

const parent=document.getElementById("root");
parent.appendChild(child);
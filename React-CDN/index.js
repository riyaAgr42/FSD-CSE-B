function Book(props){
const image=React.createElement("img",
  {
    src:props.image,
    width:"150",
    height:"150",
    alt:"Book Image"
  },null);

  const h4=React.createElement("h4",null,"Price:"+ props.price +"/-");

  const child=React.createElement("div",{
    className:"card"
  },image,h4);
return (child);
}

// const image=React.createElement("img",
//   {
//     src:"https://josipmisko.com/img/books/The-Road-to-React.jpg",
//     width:"150",
//     height:"150",
//     alt:"Book Image"
//   },null);

//   const h4=React.createElement("h4",null,"Price:345/-");

//   const child=React.createElement("div",{
//     className:"card"
//   },image,h4);


const books=[
  {image:"https://m.media-amazon.com/images/I/613i1dMgs1L._UF1000,1000_QL80_.jpg",price:"123"},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoEh58ZaqXOk4OPNr1wP_3lHGXsmMgOPtgQ&s",price:"563"},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvlPV5X16QddxppGL_BqohptBO9RMU3d3EA&s",price:"343"}
]

  // const parent=document.getElementById("root");
  // const root=ReactDOM.createRoot(parent);
  // root.render(React.createElement(Book,{
  //   image:"https://josipmisko.com/img/books/The-Road-to-React.jpg",
  //   price:"389"
  // }));

  const bookList=books.map(p=>(
    React.createElement(Book,{image:p.image,price:p.price})
  ));

  const bookele=React.createElement("div",{className:"book-list"},bookList)
  const parent=document.getElementById("root");
  const root=ReactDOM.createRoot(parent);
  root.render(bookele);
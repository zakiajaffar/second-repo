function changeSizeOfCircle(){
	let circle= document.querySelector("div");
	let newSize =parseInt(Math.random()*500) + "px";
	circle.style.width=parseInt(Math.random()*500) + "px";

	circle.style.height=newSize+"px";
	circle.style.borderColor= newSize+"px";
	circle.style.backgroundColor= "pink";
	circle.style["font-Size"]= (newSize/ 100) + "em";
	circle.style["background-color"]= parseInt(Math.random() * color.length);
}






















// let carObject={
// 	"name": "BMW",
// 	"model": 2018,
// 	"price": "1M",
// 	"vehicle" : "DKB789",
// 	"color" : "Black"
// }
// console.log("Vehicle Name=" + carObject["name"]);
// console.log("model=" + carObject["model"]);
// console.log("Price=" + carObject["price"]);
// console.log("vehicle =" + carObject["vehicle"]);
// console.log("color =" + carObject.color);
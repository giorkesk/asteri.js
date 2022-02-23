class Popup{
	constructor(){
		this.title="";
		this.text="";
		this.buttons="";
		this.style=new BasicStyle();
		this.domElement=document.createElement("div");
		this.titleElem=document.createElement("h2");
		this.titleElem.innerText=this.title;
		this.textElem=document.createElement("p");
		this.textElem.innerText=this.text;
		this.domElement.appendChild(this.titleElem);
		this.domElement.appendChild(this.textElem);
		this.domElement.style.display="none";
		document.body.appendChild(this.domElement);
		this.show=function(){
			this.domElement.style.display="block";
		}
	}
}
function showPopup(title="",text=""){
	let popup=new Popup();
	popup.title=title;
	popup.text=text;
	popup.show();
}
export{showPopup};

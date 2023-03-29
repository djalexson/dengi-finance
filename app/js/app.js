// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'



document.addEventListener('DOMContentLoaded', () => {

	const burger = document.querySelector(".header__nav--burger");
	const body = document.body;
	const nav = document.querySelector(".header__nav");
	const overlay = document.querySelector(".overlay");
	let scrollW = window.innerWidth - document.documentElement.offsetWidth;
	
	function toggleNav() {
		burger.classList.toggle("burger__active");
		if (burger.classList.contains("burger__active")) {
			nav.classList.add("active");
			body.style.overflowY = "hidden";
			body.style.paddingRight = `${scrollW}px`;
			overlay.classList.add("active");

		} else {
			nav.classList.remove("active");
			body.style.overflowY = "";
			body.style.paddingRight = "";
			overlay.classList.remove("active");
		}
	}
	
	document.addEventListener("click", function (e) {
		if (e.target.classList.contains("header__nav--burger")) {
			toggleNav();
		}
		if (e.target.classList.contains("overlay")) {
			toggleNav();
		}
	});
	
	window.addEventListener("resize", function () {
		if (window.innerWidth > 1000 && burger.classList.contains("burger__active")) {
			toggleNav();
		}
		scrollW = window.innerWidth - document.documentElement.offsetWidth;
	});
	
	
})
let	detetBoot=0;
class SelectWrapper {
	constructor(selectElement, options = {}) {
		
		if (typeof selectElement === 'string') {
			const selectorType = selectElement.substring(0, 1);
      this.selectElement = selectorType === '#' ? document.getElementById(selectElement.substring(1)) :
			selectorType === '.' ? document.querySelectorAll(selectElement).length > 1 ? SelectWrapper.createAndWraps(selectElement,options) : document.querySelectorAll(selectElement) :
			document.getElementsByTagName(selectElement).length > 1 ? SelectWrapper.createAndWraps(selectElement,options) : document.getElementsByTagName(selectElement)[0] ;
    } else {
			this.selectElement = selectElement;
    }
		if (this.selectElement ==  undefined) return;
		
    
		
		this.wrapper = document.createElement('div');
		this.wrapper.className = 'select-wrapper';
		this.selectElement.parentNode.insertBefore(this.wrapper, this.selectElement);
		this.wrapper.appendChild(this.selectElement);
		
		this.displayElement = document.createElement('div');
		this.displayElement.className = 'select-display';
		this.wrapper.appendChild(this.displayElement);
		
		this.options = {
			onChange: null,
			listTag: 'ul',
			listItemTag: 'li',
			wrapperClass: '',
			placeholder: "", 
			listItemClass: '',
			activeClass: 'active',
			...options,
		}; 
			this.listElement = document.createElement(this.options.listTag);
			this.listElement.className = 'select-list';
			if (this.options.wrapperClass !== '') {
				this.wrapper.classList.add(this.options.wrapperClass);
			}
			this.wrapper.appendChild(this.listElement);
	
			this.selectElement.style.display = 'none';
			if(Object.entries(options).length == 0) options={placeholder:""};
			this.placeholder(this.selectElement,options);
			this.render();
			this.eventSub();
			this.eventC();

		

  }
placeholder(selectElement,optionsObj){
const optionsEl=selectElement.options;

let hasAD;
let hasAS;
let hasEL= optionsObj.placeholder;
let hasBL= true;
for (let i = 0; i <optionsEl.length; i++) {
	const e = optionsEl[i]
	hasAD = e.hasAttribute("disabled");
	hasAS=e.hasAttribute("selected");
	if((hasAD || hasAS) && !hasEL ){
		
		this.displayElement.innerText = e.text;
	
		e.remove()
		hasBL=false;
	}
}
	
	if(typeof hasEL === "string" && detetBoot==0) {
		this.displayElement.innerText = hasEL ;
		
	}else if(Array.isArray(hasEL)){
		this.displayElement.innerText = hasEL[detetBoot];
	}else if(hasBL){
				this.displayElement.innerText = optionsEl[0].text;
	}		

detetBoot++;
}
  get isOpen() {
    return this.wrapper.classList.contains('open');
  }

  open() {
    this.wrapper.classList.add('open');
  }

  close() {
    this.wrapper.classList.remove('open');
  }

  selectValue(value) {
    const listItems = this.listElement.querySelectorAll(this.options.listItemTag);
    listItems.forEach(listItem => {
      if (listItem.getAttribute('data-value') === value) {
        listItem.click();
      }
    });
  }

  render() {
	
		const options = this.selectElement.options;
    
		const fragment = document.createDocumentFragment();
   
		for (let i = 0; i < options.length; i++) {
      const option = options[i];
      const listItem = document.createElement(this.options.listItemTag);
     
			listItem.innerHTML = option.text;
			if(option.value == ""){
				
				option.value=i
				listItem.setAttribute('data-value', i);

			}else{

				listItem.setAttribute('data-value', option.value);
			}

			
      if (this.options.listItemClass !== '') {
        listItem.classList.add(this.options.listItemClass);
      }
      fragment.appendChild(listItem);
    }
    this.listElement.appendChild(fragment);

    this.selectedOption = options[this.selectElement.selectedIndex];
 //   this.displayElement.innerText = this.selectedOption.text;
  }
 
eventC() {
   document.addEventListener('click', (event) => {
      // если кликнули вне SelectWrapper, то закрыть его
      if (!this.wrapper.contains(event.target)) {
        this.close();
      }
    });
  }
	
	

  eventSub () {
    this.wrapper.addEventListener('click', () => {
      this.isOpen ? this.close() : this.open();
    });

    const listItems = this.listElement.querySelectorAll(this.options.listItemTag);
    listItems.forEach(listItem => {
			listItem.addEventListener('click', () => {
				const value = listItem.getAttribute('data-value');
        this.selectElement.value = value;
				this.selectedOption = this.selectElement.options[this.selectElement.selectedIndex];
				this.displayElement.innerText = this.selectedOption.text;
			

        listItems.forEach(item => {
          item.classList.remove(this.options.activeClass);
        });

        listItem.classList.add(this.options.activeClass);

        if (this.options.onChange !== null) {
          this.options.onChange(value);
        }
      });
    });
  }
//  eventSub () {

	//document.addEventListener('click', (event) => {
	//	const listItem = event.target.closest(this.options.listItemTag);
	//	const  wrapperList = event.target.closest(".select-wrapper");
	//	const listItemContainer = document.querySelectorAll(this.options.listItemTag)
	//	if(wrapperList) this.isOpen ? this.close() : this.open();
	//	if (listItem) {
	//		const value = listItem.getAttribute('data-value');
	//		this.selectElement.value = value;
	//		this.selectedOption = this.selectElement.options[this.selectElement.selectedIndex];
	//		if (this.selectedOption) {
        
  //      this.displayElement.innerText = this.selectedOption.text;
  //    }			
	//		listItemContainer.forEach(item => {
	//				item.classList.remove(this.options.activeClass);
	//			});
	//		listItem.classList.add(this.options.activeClass);
	
	//		if (this.options.onChange !== null) {
	//			this.options.onChange(value);
	//		}
	//	}
	//});
	//}	
  static createAndWraps(classList, options) {
		const selectElements = document.querySelectorAll(classList) 
   const plac=options.placeholder !== "" || Array.isArray(options.placeholder) ? options.placeholder : "";
		selectElements.forEach(selectElement => {
      new SelectWrapper(selectElement,{placeholder:plac,});
    });
  }
}

const mySelectWrapper = new SelectWrapper("select");

//let scrollW = window.innerWidth - document.documentElement.offsetWidth;
//let isElClicked = false;

//document.addEventListener('DOMContentLoaded', () => {
//  document
//    .querySelector('.header__nav--burger')
//    .addEventListener('click', () => {
//      document
//        .querySelector('.header__nav--burger')
//        .classList.toggle('burger__active');

//      isElClicked = !isElClicked;

//      if (isElClicked) {
//        document.body.style =
//          'overflow: hidden; padding-right:' + scrollW + 'px;';

//        document.querySelector('.header__nav').style =
//          'visibility: visible; opacity: 1; transform: translateX(0)';
//      } else {
//        document.body.removeAttribute('style');

//        document.querySelector('.header__nav').style =
//          'visibility: hidden; opacity: 0; transform: translateX(100%)';
//      }
//    });
//});

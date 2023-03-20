// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
let anim={
	secIn: [300,300,100],
	secOut: [300,200,1100],
	styles: 
	(val)=>{
		return[
			"opacity:"+val[0] ,
			"transform: translateX("+val[1]+")",
			"visibility:"+val[2]]
	}
}
const nav=document.querySelector(".header__nav")
function  openCloaseNav(sec,nameClass ){
	nav.classList.toggle("active")
	nav.addEventListener("transitionrun", () => {
		console.log('transition is running');
	});
	nav.addEventListener("transitionend", () => {
		console.log('transition is end ');
	}) ;

	sec.forEach((i, e )=> {
		setTimeout(()=>{
			nav.style.cssText+=nameClass[e]

		},i)
		
	});


}
// Custom JS
let scrollW= window.innerWidth - document.documentElement.offsetWidth;
	document.addEventListener('click', function(e){		
		if (e.target.className != null) {
		if (e.target.className == "header__nav--burger" || e.target.className == "header__nav--burger burger__active") {
			document.querySelector(".header__nav--burger").classList.toggle("burger__active")			
			if(document.querySelector(".burger__active") != null){
				openCloaseNav(anim.secIn,anim.styles(["1","0","visible"]))
				document.body.style="overflow-y: hidden; padding-right:"+scrollW+"px;"		
				
			}else{
				openCloaseNav(anim.secOut,anim.styles(["0","100%","hidden"]))
				
				document.body.removeAttribute("style") 				}
				
			}
		}})
		const mQuery = window.matchMedia('(min-width: 1000px)')
		
		function MobileResize(e) {   
			if (e.matches) {     
				if(nav.hasAttribute("style")){
					document.body.removeAttribute("style") 	
					nav.classList.remove("active")
					
					document.querySelector(".header__nav--burger").classList.remove("burger__active")			
			nav.removeAttribute("style")
		}
   }
} 
// Set up event listener 
mQuery.addEventListener('change',MobileResize)
MobileResize(mQuery)
})

export default ()=>
{



/* Responsive Font sizes */


window.onload = ()=>
{
    document.documentElement.style.setProperty('--inner-width', (-window.innerWidth * -window.innerWidth) / 390);
    
}


window.addEventListener('resize', ()=>
{
    document.documentElement.style.setProperty('--inner-width', (-window.innerWidth * -window.innerWidth) / 390);
    console.log(document.documentElement.style.cssText)
})





}


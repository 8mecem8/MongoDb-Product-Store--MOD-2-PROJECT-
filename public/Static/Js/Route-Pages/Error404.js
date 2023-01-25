import MMenu from '../components/Mobile-Menu.js'
import Navigation from '../components/Navigation-Component.js'
import { iconMenuButtonFunction } from '../Sup-files/Util.js'

export default  class Error404 
{
    constructor()
    {
        document.title = this.constructor.name
            
    }

    
    /******************************************************************/
    /* -----------------Dynamic Content Function--------------------- */
    async _uti_Func()
    {
        iconMenuButtonFunction()

    }


    /******************************************************************/
    /* ---------------Dom Element Render Function-------------------- */
    async _render()
    {
       
    return`
       
    <main class='main-content'>

    ${ await MMenu()}
    ${ await Navigation(null)}



        <section class='main-content-section'>

            <h1 class="error"> Page not Found !! </h1> <h3><br> Please check the address or the link </h3>

        </section> 

    </main>
       `
    }
}
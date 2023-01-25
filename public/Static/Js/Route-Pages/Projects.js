import MMenu from '../components/Mobile-Menu.js'
import Navigation from '../components/Navigation-Component.js'
import { iconMenuButtonFunction } from '../Sup-files/Util.js'



export default  class Projects 
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
    ${ await Navigation(this.constructor.name)}


        <section class='main-content-section'>


            <h1>The Title is Projects  Page Section 1</h1>
            <div>Pragraph for the Projects  Page Section 1<div>









        </section>
        

    </main>
        `
    }
}




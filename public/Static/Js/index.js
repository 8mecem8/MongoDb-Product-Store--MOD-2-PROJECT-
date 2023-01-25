import setResponsiveFontsize from './Sup-files/ResponsiveFontSizes.js'
import {home} from './Route-Pages/Home.js'

/******************************************************************/
/* ---------------Responsive Font Size Function------------------ */
setResponsiveFontsize()









async function Start() 
{
    //Execute if there is pre-render helper funcition 
    home._pre_Func ? await  home._pre_Func() : null
    //Render Home screen   
    await home._render()
    //Execute if there is post-render helper funcition 
    home._uti_Func ? await home._uti_Func() : null
}





Start() 
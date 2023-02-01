export default async function Navigation(props)
{
    
    

    return`
        <nav class="nav-section">


            <section class="nav-icon--menu">

                <header>
                    <button class='icon-menu-button'>&#9776;<span>enu</span></button>
                </header>
            
            </section>

            <section class="nav-logo">

                <header>
                    L<span>ogo</span>
                </header>
            
            </section>

            
            <section class="nav-links">

                <menu>
                    <li class="nav-unselected ${props === 'Home' ? 'nav-selected' : '' }"><a href='/#/'>Home</a></li>
                    <li class="nav-unselected ${props === 'Products' ? 'nav-selected' : '' }"><a href='/#/'>Products</a></li>
                    <li class="nav-unselected ${props === 'About' ? 'nav-selected' : '' }"><a href='/#/about'>About</a></li>
                </menu>
            
            </section>

            
        
        
        
        </nav>
    `
}
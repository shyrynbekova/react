import { Link } from 'react-router-dom';
import logoIcon from '/logo.png'
import korzinkaIcon from '/icon.svg'


function HeaderLogo() {
return (
    <header className='header'>
        <div className='logo-conteiner'>
        <img src={logoIcon} alt="Логотип"></img>
        </div>
        <p>Quick Meal</p>


                
                <div className='links'>
                <Link to='/' >Home</Link>
                <Link to='/categories' >All restaurants</Link>

                <button className='link-btn'>
                    <img src={korzinkaIcon} alt='korzina'></img>


                </button>


                </div>

                
            
            </header>
    )

    }
export default HeaderLogo;
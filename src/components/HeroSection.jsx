import { Link } from 'react-router-dom';
import BaseButton from './BaseButton';
import heroImg from '/hero-img.png';


function HeroSection() {
    return (
        <div className='hero'>
            <h1><span className="bold">Hungry?</span>Find your next meal</h1>
            <Link to={'/categories'}>
            <BaseButton>See all restaurants</BaseButton>
            </Link>
            <img src={heroImg} alt="" />
        </div>
    )
}

export default HeroSection;
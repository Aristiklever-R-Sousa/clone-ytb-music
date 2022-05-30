import { FaChromecast } from 'react-icons/fa';
import { ProfileInterface } from '../../pages/Home';

import { AiOutlineSearch } from 'react-icons/ai'

import logo from '../../assets/ytb_music_logo.svg';
import './index.scss';


function Navbar({urlAvatar}: ProfileInterface) {
    return (
        <header className='flex'>
            <div className='flex item-header'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className='flex'>
                    <li className='flex enabled'>Início</li>
                    <li className='flex disabled'>Explorar</li>
                    <li className='flex disabled'>Biblioteca</li>
                    <li className='flex disabled'>Upgrade</li>
                    <li className='flex disabled'>
                        <AiOutlineSearch />
                        <span>
                            Pesquisar
                        </span>
                    </li>
                </ul>
            </nav>
            <div className='flex item-header'>
                <FaChromecast />
                <div className='round'>
                    <img src={urlAvatar} alt="profile" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;

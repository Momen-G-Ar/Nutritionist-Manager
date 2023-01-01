import './header.css';

import React from 'react';
import { Heartbeat, House } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='left'>
                <span>
                    <Heartbeat size={45} color="#01660c" weight="fill" />
                </span>
                <span>
                    nutritionist clinic
                </span>
            </div>
            <div className='right'>
                <span onClick={() => { navigate('/home-page', { replace: true }); }}>
                    <House size={32} color="#01660c" weight="fill" />
                </span>
            </div>
        </div>
    );
};

export default Header;
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

import profile from '../../assets/profile_photo.jpg';
import './index.scss';
import Card, { CardInterface } from "../../components/Card";


function Home() {
    const [musicsForYou, setMusicsForYou] = useState<CardInterface[]>([]);
    
    useEffect(() => {
        async function getCards() {
            const cards = await fetch('http://localhost:3001/foryou').then((res) => res.json());

            setMusicsForYou(cards);
        }

        getCards();
    }, []);

    return (
        <>
            <Navbar />
            <div className="content">
                <div className="flex content-header">
                    <div className="round profile-img">
                        <img src={profile} alt="perfil" />
                    </div>
                    <div className="header-infors">
                        <span> ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR</span> <br />
                        <span> Olá, Klever Sousa</span>
                    </div>
                </div>
                <div className="flex card-container">
                    {
                        musicsForYou.map((music: CardInterface) => (
                            <Card
                                key={music.id}
                                id={music.id}
                                album={music.album}
                                channel={music.channel}
                                musicName={music.musicName}
                                urlImage={music.urlImage}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Home;

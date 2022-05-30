import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Card, { CardInterface } from "../../components/Card";

import './index.scss';

interface ProfileInterface {
    id?: number;
    profileName?: string;
    urlAvatar: string;
}

function Home() {
    const [profile, setProfile] = useState<ProfileInterface>({id: 0, profileName: '', urlAvatar: ''});
    const [musicsForYou, setMusicsForYou] = useState<CardInterface[]>([]);
    
    useEffect(() => {
        async function getProfile() {
            const profile = await fetch('http://localhost:3001/profile/1').then((res) => res.json());

            setProfile(profile);
        }

        getProfile();
    }, []);

    useEffect(() => {
        async function getCards() {
            const cards = await fetch('http://localhost:3001/foryou').then((res) => res.json());

            setMusicsForYou(cards);
        }

        getCards();
    }, []);


    return (
        <>
            <Navbar urlAvatar={profile.urlAvatar} />
            <div className="content">
                <div className="container-content-header">
                    <div className="flex content-header">
                        <div className="round profile-img">
                            <img src={profile.urlAvatar} alt="perfil" />
                        </div>
                        <div className="header-infors">
                            <span> ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR</span> <br />
                            <span> Olá, {profile.profileName}</span>
                        </div>
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

export type {
    ProfileInterface
}

export default Home;

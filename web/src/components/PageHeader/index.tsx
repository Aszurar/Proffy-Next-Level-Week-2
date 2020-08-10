import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// Informando para o componente que ele vai receber uma propriedade chamada title do tipo string
interface PageHeaderProps{
    title: string;   
    description?: string;          
}
// Ainda é necessário transformar a função em um tipo que receba propriedades react, então coloque ela em uma
// constante da maneira abaixo, informando que é um componente ReactFunction Components
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p>}

                {props.children}
            </div>
            
        </header>
    );
}

export default PageHeader;
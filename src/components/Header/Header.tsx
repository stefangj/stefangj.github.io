import { FC } from 'react';
import { HeaderProps } from '../../types';
import './Header.css';

export const Header: FC<HeaderProps> = ({
  headline,
  title,
  intro,
  contacts,
}) => {
  return (
    <header className='header'>
      <div className='profile-image'>
        <img src='/profile.jpg' alt='profile' height={200} width={200}/>
      </div>
      <div className='who-am-i'>
        <div>
          <h1>{headline}</h1>
          <h6>{title}</h6>
          <p>{intro}</p>
        </div>
      </div>
      <ul className='contacts'>
        {contacts.map(({ type, text, href, icon }) => {
          return (
            <li key={type} className='item'>
              <a href={href} target='_blank' rel='noreferrer'>
                <img src={icon} alt={type} />
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

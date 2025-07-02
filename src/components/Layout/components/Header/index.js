
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUpload, faCloudUpload, faMessage, faUser, faCoins, faAssistiveListeningSystems, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images  from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import avatar1 from '~/components/AccountItem/avatar/uifaces-popular-image (1).jpg'; 

const cx=classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
          title: 'Language',
          data: [
            { 
              type: 'language',
              code: 'en',
              title: 'English',
            },
            { 
              type: 'language',
              code: 'vi',
              title: 'Tiếng Việt',
            },
            { 
              type: 'language',
              code: 'fr',
              title: 'Françe',
           
            },
          ],
        }
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
    },
    
];
function Header(){ 
  
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setSearchResult([]);
      },0);
    }, []);
    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
              // Handle language change logic here 
              break;
              default:
        }
    };

    const currentUser = true;// Replace with actual user authentication logic

    const userMenu =[ 
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@nguyenvana',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings'
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    }
  ]

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                  <div className={cx('logo')}>
                    <img className={cx('logo_img')} src={images.logo} alt="TikTok" />
                  </div>
                  <HeadlessTippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (                
                          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                              <h4 className={cx('search-title')}>
                                Accounts
                              </h4>
                              <AccountItem/>
                              <AccountItem/>
                              <AccountItem/>
                              <AccountItem/>
                            </PopperWrapper>
                          </div>
                     )}
                 >
                  <div className={cx('search')}>
                    <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}> 
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
             
                      <button className={cx('search-btn')}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                  </div>
                  </HeadlessTippy>
                    <div className={cx('actions')}>
                  {currentUser ? (
                    <>
                     <Tippy trigger='click' content='Upload video' placement='bottom'>
                        <button className={cx('actions-btn')}>
                          <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>
                      <Tippy trigger='click' content='Message' placement='bottom'>
                        <button className={cx('actions-btn')}>
                          <FontAwesomeIcon icon={faMessage} />
                        </button>
                      </Tippy>
                      
                    </>
                  ): (
                  <>
                      <Button text>
                          Upload
                      </Button>
                      <Button primary>
                          Log in
                      </Button>    
                     
                  </>
                  )}  
                  <Menu
                        items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                          <img src={avatar1} className={cx('user-avatar')} width={100} alt='Nguyen Van A' />
                        ): (
                          <button className={cx('more-btn')}>
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                       </button>
                       )}
                     </Menu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header
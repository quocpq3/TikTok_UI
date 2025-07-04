

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins,  faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import Button from '~/components/Button';
import styles from './Header.module.scss'
import images  from '~/assets/images';
import Menu from '~/components/Popper/Menu';

import { ActivityIcon, MessageIcon, UploadIcon } from '../../../Icons';
import Images from '~/components/Images';
import Search from '../Search';

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

                  <Search/>
                  
                    <div className={cx('actions')}>
                  {currentUser ? (
                    <>
                     <Tippy trigger='click' content='Upload video' placement='bottom'>
                        <button className={cx('actions-btn')}>
                          <UploadIcon/>
                        </button>
                     </Tippy>
                      <Tippy trigger='click' content='Message' placement='bottom'>
                        <button className={cx('actions-btn')}>
                          <MessageIcon/>
                        </button>
                      </Tippy>
                      <Tippy trigger='click' content='Activity' placement='bottom'>
                        <button className={cx('actions-btn')}>
                          <ActivityIcon/>
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
                          <Images 
                            src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/482003380_1694815024457558_5229809777836645635_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEoqdTgmU6wSDwpH93yXx0lnAZfhEv_W7mcBl-ES_9buQItCHvR0jBxyjPI_cLAPzLH62EnnebQL-PVvNVV67tq&_nc_ohc=dIwjxJWQyY4Q7kNvwG3-_Nr&_nc_oc=AdnpwGqvahY5Tt8NmxO_9NamNNui8w6hLUOGUpB4VypvxyGkDJt7LlWwu99WAZP2Ix8&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=UVYQLkeUwPdbd5efRKcVew&oh=00_AfPiyjd0PRmHycOoHqoSKky4nXkuuOc9vGdcLDZWPzURnw&oe=686C8994"
                            className={cx('user-avatar')} 
                            width={100} 
                            alt='Nguyen Van A' 
                            fallBack="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/476514354_1676042533001474_8240066952359594913_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFOT0i1t17yU5pXMt7hUcbfuogoe7XaYf26iCh7tdph_X0hv7-hgGCWRRYkvy8b38v3E7unizerPKbNj41JQw24&_nc_ohc=o1ABSXMxtwEQ7kNvwEGxt9y&_nc_oc=AdmToqE6RRn3U6qlJgLdin9j33qCGAElVHhJARIVTzSk4qQLmbHJ2ngbWv19RlCvJio&_nc_zt=24&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=vmyKpUoH41Tvj6cbKFSXfg&oh=00_AfPHFQFS7438Z3L58ilBuJM9aY67-ypbKosBECokDkHl-g&oe=686C8ACE"
                            />
                            
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
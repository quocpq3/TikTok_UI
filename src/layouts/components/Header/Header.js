import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import config from '~/config';

import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { ActivityIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Images from '~/components/Images';
import Search from '../Search';
// import routes from '../../../config/routes';

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
        },
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
const Header = function () {
    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle language change logic here
                break;
            default:
        }
    };

    const currentUser = false;

    const userMenu = [
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
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 z-10 flex justify-center w-full h-header-height shadow-sm bg-white">
                <div className="h-full w-layout-width px-layout-spacer flex items-center justify-between">
                    <div className="flex">
                        <Link to={config.routes.home}>
                            {' '}
                            <img className="h-[42px] w-[118px]" src={images.logo} alt="TikTok" />
                        </Link>
                    </div>

                    <Search />

                    <div className="flex items-center">
                        {currentUser ? (
                            <>
                                <Tippy trigger="click" content="Upload video" placement="bottom">
                                    <button className="bg-transparent text-2xl text-[#161823] px-3 py-1 cursor-pointer">
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy trigger="click" content="Message" placement="bottom">
                                    <button className="bg-transparent text-2xl text-[#161823] px-3 py-1 cursor-pointer">
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy trigger="click" content="Activity" placement="bottom">
                                    <button className="bg-transparent text-2xl text-[#161823] px-3 py-1 cursor-pointer">
                                        <ActivityIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Images
                                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/476514354_1676042533001474_8240066952359594913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFOT0i1t17yU5pXMt7hUcbfuogoe7XaYf26iCh7tdph_X0hv7-hgGCWRRYkvy8b38v3E7unizerPKbNj41JQw24&_nc_ohc=LOT0lJXoj6UQ7kNvwEY1Mcs&_nc_oc=AdnOmeVHG1H-tmRwafWV01_l9GQtsXPwfSto7Xl_f7qb1A5dcy42uMskQzbzzUIt5wg&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=g9VrwNZUp4g1rwgEF5VL_g&oh=00_AfQjMtiTrTcTzjU-4WUB7GArThBrATw-DmJwvOr6Gy3UYg&oe=68786950"
                                    className="w-8 h-8 object-cover rounded-full ml-3 cursor-pointer"
                                    width={100}
                                    alt="Nguyen Phu Quoc"
                                    fallBack="https://png.pngtree.com/png-clipart/20210311/original/pngtree-error-404-glitch-effect-png-image_6033747.jpg"
                                />
                            ) : (
                                <button className="ml-5 text-xl bg-transparent px-2 py-1 cursor-pointer">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

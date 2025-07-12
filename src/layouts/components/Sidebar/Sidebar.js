import classNames from 'classnames/bind';
import  styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, {MenuItem} from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome, faHomeUser, faUser, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccount from '../../../components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar(){
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem  title="For You" to={config.routes.home}  
                icon ={<FontAwesomeIcon className={cx('icon')} icon={faHome}
               
            />
                }
                activeIcon={<FontAwesomeIcon className={cx('active-icon')} icon={faHomeUser}/>}
                />
                <MenuItem title="Following" to={config.routes.following} 
                icon ={<FontAwesomeIcon className={cx('icon')}  icon={faUser}
                
            />
                }
                activeIcon={<FontAwesomeIcon className={cx('active-icon')} icon={faUserGroup}/>}
                />
                <MenuItem title="LIVE" to={config.routes.live} 
                icon ={<FontAwesomeIcon className={cx('icon')} icon={faVideoCamera}
               
            />
                }
                activeIcon={<FontAwesomeIcon className={cx('active-icon')} icon={faCamera}/>}
                />
            </Menu>
            <SuggestedAccount label="Suggested accounts"/>
            <SuggestedAccount label="Following accounts"/>
        </aside>
    );
}

export default Sidebar
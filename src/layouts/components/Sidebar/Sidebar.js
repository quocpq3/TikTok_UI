import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faHome, faHomeUser, faUser, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccount from '../../../components/SuggestedAccounts/SuggestedAccounts';

const Sidebar = function () {
    return (
        <aside className="w-sidebar-width pt-5 pb-[26px] pl-2 -ml-[18px]">
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon className="w-8 h-8 text-current" icon={faHome} />}
                    activeIcon={<FontAwesomeIcon className="w-8 h-8 text-current" icon={faHomeUser} />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon className="w-8 h-8 text-current" icon={faUser} />}
                    activeIcon={<FontAwesomeIcon className="w-8 h-8 text-current" icon={faUserGroup} />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon className="w-8 h-8 text-current" icon={faVideoCamera} />}
                    activeIcon={<FontAwesomeIcon className="w-8 h-8 text-current" icon={faCamera} />}
                />
            </Menu>
            <SuggestedAccount label="Suggested accounts" />
            <SuggestedAccount label="Following accounts" />
        </aside>
    );
};

export default Sidebar;

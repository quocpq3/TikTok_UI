import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ title, to, icon, activeIcon }) {
    // nav.isActive được dùng trong NavLink
    return (
        <NavLink
            className={({ isActive }) =>
                `flex items-center p-2 text-lg font-bold rounded transition-colors duration-200 ease-in-out hover:bg-hover-bg ${
                    isActive ? 'text-primary' : ''
                }`
            }
            to={to}
        >
            {({ isActive }) => (
                <>
                    <span className={`flex ${isActive ? 'hidden' : ''}`}>{icon}</span>
                    <span className={`flex ${isActive ? '' : 'hidden'}`}>{activeIcon}</span>
                    <span className="ml-[15px]">{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;

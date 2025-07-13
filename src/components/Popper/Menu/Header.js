import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Header = function ({ title, onBack }) {
    return (
        <header className="relative h-[50px] -mt-2 flex-shrink-0">
            <button className="w-[50px] h-full bg-transparent cursor-pointer" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{title}</h4>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;

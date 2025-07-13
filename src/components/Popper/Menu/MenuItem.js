import Button from '~/components/Button';
import PropTypes from 'prop-types';

function MenuItem({ onClick, data }) {
    const classes = `w-full justify-start rounded-none font-semibold py-[11px] px-4 leading-[1.8rem] hover:bg-hover-bg ${
        data.separate ? 'py-[10px] px-4 border-t border-border-light' : ''
    }`;

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;

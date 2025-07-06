import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";// Adjust the path as necessary
import Images from '~/components/Images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Images 
        fallBack ="https://png.pngtree.com/png-clipart/20210311/original/pngtree-error-404-glitch-effect-png-image_6033747.jpg"
        className={cx('avatar')} src={data.avatar} alt={data.avatar} />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
            </h4>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </Link>
  ); 
}

AccountItem.propTypes ={
  data: PropTypes.object.isRequired
}
export default AccountItem;
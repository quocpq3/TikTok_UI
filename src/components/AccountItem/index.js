import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import avatar1 from './avatar/uifaces-popular-image (1).jpg'; // Adjust the path as necessary


const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')} src={avatar1} alt="Hoaaa" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
  ); 
}
export default AccountItem;
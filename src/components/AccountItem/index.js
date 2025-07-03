import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";// Adjust the path as necessary


const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/482003380_1694815024457558_5229809777836645635_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEoqdTgmU6wSDwpH93yXx0lnAZfhEv_W7mcBl-ES_9buQItCHvR0jBxyjPI_cLAPzLH62EnnebQL-PVvNVV67tq&_nc_ohc=dIwjxJWQyY4Q7kNvwG3-_Nr&_nc_oc=AdnpwGqvahY5Tt8NmxO_9NamNNui8w6hLUOGUpB4VypvxyGkDJt7LlWwu99WAZP2Ix8&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=UVYQLkeUwPdbd5efRKcVew&oh=00_AfPiyjd0PRmHycOoHqoSKky4nXkuuOc9vGdcLDZWPzURnw&oe=686C8994" alt="Hoaaa" />
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
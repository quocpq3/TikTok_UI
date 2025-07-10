
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img 
                className={cx('avatar')}
                src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e937578eaad19317502c9a7f6c10c8ff~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1df01390&x-expires=1752303600&x-signature=qQil21LdDqgBEe8uQpV%2FNxR4Rew%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1'
                alt=''/>   
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                <strong>quocphhh</strong>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}> Nguyễn Phú Quốc</p>
            </div>
        </div>
    )
}


AccountItem.propTypes ={
    
}
export default AccountItem;
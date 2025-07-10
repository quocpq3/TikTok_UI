import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from './../../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function AccountPreview(){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img 
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e937578eaad19317502c9a7f6c10c8ff~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1df01390&x-expires=1752303600&x-signature=qQil21LdDqgBEe8uQpV%2FNxR4Rew%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1" 
                alt=""/>
                    <Button className={cx('follow-btn')} primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocphhh</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    </p>
                <p className={cx('name')}> Nguyễn Phú Quốc</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>5.8M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}



export default AccountPreview;
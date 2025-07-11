
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview'

const cx = classNames.bind(styles)

const AccountItem = function() {

    const renderPreview = (props,acc) =>{
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={acc}/>
                </PopperWrapper>
            </div>
        )
    }
    const accountsSuggested = [
        {       
            id:1,
            img:'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e937578eaad19317502c9a7f6c10c8ff~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1df01390&x-expires=1752303600&x-signature=qQil21LdDqgBEe8uQpV%2FNxR4Rew%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1',
            username: 'quocphh',
            name: 'Nguyễn Phú Quốc'
        },
        {
            id:2,
            img:'https://techijack.com/wp-content/uploads/2021/03/check-facbook-avatar.jpg',
            username:'tuietngan',
            name:'Tuyết Ngân',
        },
        {
            id:3,
            img:'https://scr.vn/wp-content/uploads/2020/08/Avatar-FB-cute.jpg',
            username:'hoaminzy',
            name:'Hòa Minzy',
        },
        {
            id:4,
            img:'https://www.themobileindian.com/wp-content/uploads/2021/06/facebook-avatar-main.jpg',
            username:'phuthodien',
            name:'Chị Phiến',
        }
    ]

    return (
        <div>
        {accountsSuggested.map((acc) => (
           <Tippy
                key={acc.id}
                interactive   
                delay={[800,0]}
                offset={[-20,5]}
                placement='bottom'
                render={(props) => renderPreview(props, acc)}
            >
                        
                    <div  className={cx('account-item')}>
                        <img 
                        className={cx('avatar')}
                        src={acc.img}       
                        alt=''/>   
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                        <strong>{acc.username}</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>{acc.name}</p>
                    </div> 
                    </div>
           </Tippy>
        ))}
        </div>
    )
}


// AccountItem.propTypes ={
    
// }
export default AccountItem;
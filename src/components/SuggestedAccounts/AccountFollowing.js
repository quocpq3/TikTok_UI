
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
        id: 1,
        img: 'https://randomuser.me/api/portraits/men/45.jpg',
        username: 'tranduong88',
        name: 'Trần Đăng Dương'
    },
    {
        id: 2,
        img: 'https://randomuser.me/api/portraits/women/32.jpg',
        username: 'minhanh07',
        name: 'Lê Minh Anh'
    },
    {
        id: 3,
        img: 'https://randomuser.me/api/portraits/men/67.jpg',
        username: 'hoangnam99',
        name: 'Hoàng Văn Nam'
    },
    {
        id: 4,
        img: 'https://randomuser.me/api/portraits/women/12.jpg',
        username: 'ngocdiep22',
        name: 'Ngọc Diệp'
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
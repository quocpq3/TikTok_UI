import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import PropTypes from 'prop-types'
import AccountItem from "./AccountItem";
import AccountFollowing from './AccountFollowing'

const cx = classNames.bind(styles)

const SuggestedAccount = function({label}) {
    return(
       <>
            {label === 'Suggested accounts' ? (
                <div className={cx('wrapper')}>
                    <p className={cx('label')}>{label}</p>
                    <AccountItem/>
                    <p className={cx('more-btn')}>See all</p>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <p className={cx('label')}>{label}</p>
                    <AccountFollowing/>
                    <p className={cx('more-btn')}>See all</p>
                </div>
            )}
        </>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired
}
export default SuggestedAccount;
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './DeafaultLayout.module.scss'
import Header from "~/layouts/components/Header";
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles)
const DefaultLayout = function({children}){
    return(
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                {children}
                </div>
            </div>
        </div>
    );

}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout
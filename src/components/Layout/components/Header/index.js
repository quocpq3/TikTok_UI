
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';


import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss'
import images  from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx=classNames.bind(styles);
function Header(){ 
  
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        setSearchResult([]);
      },0);
    }, []);
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                  <div className={cx('logo')}>
                    <img className={cx('logo_img')} src={images.logo} alt="TikTok" />
                  </div>
                  <Tippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (                
                          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                              <h4 className={cx('search-title')}>
                                Accounts
                              </h4>
                              <AccountItem/>
                              <AccountItem/>
                              <AccountItem/>
                              <AccountItem/>
                            </PopperWrapper>
                          </div>
                     )}
                 >
                  <div className={cx('search')}>
                    <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}> 
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
             
                      <button className={cx('search-btn')}>
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                  </div>
                  </Tippy>
                  <div className={cx('actions')}>
                    <Button text>
                        Upload
                    </Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Log in
                    </Button>     
                         
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header
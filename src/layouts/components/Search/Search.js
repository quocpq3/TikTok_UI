import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/services/searchServices'
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss'

const cx=classNames.bind(styles);
const Search = function(){
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    
    const debounced = useDebounce(searchValue, 500);
    
    const inputRef = useRef()
    useEffect(() => {
        if(!debounced){
            setSearchResult([]);

            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
}, [debounced]);
    
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <div>
            <HeadlessTippy 
                        appendTo={()=> document.body}
                        interactive
                        visible={showResult && searchResult.length > 0}
                        render={attrs => (                
                              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                  <h4 className={cx('search-title')}>
                                    Accounts
                                  </h4>
                                  {searchResult.map((result)=>(
                                    <AccountItem key={result.id} data={result}/>
                                  ))}
                                  
                                </PopperWrapper>
                              </div>
                         )}
                         onClickOutside={handleHideResult}
                     >
                      <div className={cx('search')}>
                        <input 
                            ref={inputRef}
                            value={searchValue}
                            type="text" 
                            placeholder='Search accounts and videos' 
                            spellCheck={false} 
                            onChange={(e) => {
                                const value = e.target.value;
                               if(value.startsWith(' ')) return;
                                setSearchValue(value);    
                            }}
                            onFocus={()=> setShowResult(true)}
                            />
                        {!!searchValue && !loading &&( 
                        <button 
                            className={cx('clear')} 
                            
                            onClick={handleClear}
                        >       
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        )}
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                 
                          <button className={cx('search-btn')} onMouseDown={(e)=>e.preventDefault()}>
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </button>
                      </div>
                      </HeadlessTippy>
        </div>
    )
}

export default Search
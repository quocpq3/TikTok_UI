import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchServices';
import AccountItem from '~/components/AccountItem';

const Search = function () {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (!debounced) {
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
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className="w-search-width" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className="py-[5px] px-3 text-secondary-text text-sm font-semibold">Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="relative h-search-height bg-bg-search rounded-search pl-4 flex items-center border border-transparent focus-within:border-border-search">
                    <div className="absolute top-search-spacer h-[28px] right-search-btn w-px bg-border-light"></div>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.startsWith(' ')) return;
                            setSearchValue(value);
                        }}
                        onFocus={() => setShowResult(true)}
                        className="text-base text-black bg-transparent h-full flex-1 pr-10 caret-primary font-proxima"
                    />
                    {!!searchValue && !loading && (
                        <button
                            className="absolute right-[68px] top-1/2 transform -translate-y-1/2 text-secondary-text"
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <FontAwesomeIcon
                            className="absolute right-[68px] top-1/2 transform -translate-y-1/2 text-secondary-text animate-spin"
                            icon={faSpinner}
                        />
                    )}

                    <button
                        className="w-search-btn h-full rounded-r-search cursor-pointer text-xl text-secondary-text hover:bg-hover-bg focus-within:text-[rgba(22,24,35,0.75)]"
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;

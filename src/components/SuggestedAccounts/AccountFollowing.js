import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const AccountItem = function () {
    const renderPreview = (props, acc) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={acc} />
                </PopperWrapper>
            </div>
        );
    };
    const accountsSuggested = [
        {
            id: 1,
            img: 'https://randomuser.me/api/portraits/men/45.jpg',
            username: 'tranduong88',
            name: 'Tr��n Đăng Dương',
        },
        {
            id: 2,
            img: 'https://randomuser.me/api/portraits/women/32.jpg',
            username: 'minhanh07',
            name: 'Lê Minh Anh',
        },
        {
            id: 3,
            img: 'https://randomuser.me/api/portraits/men/67.jpg',
            username: 'hoangnam99',
            name: 'Hoàng Văn Nam',
        },
        {
            id: 4,
            img: 'https://randomuser.me/api/portraits/women/12.jpg',
            username: 'ngocdiep22',
            name: 'Ngọc Diệp',
        },
    ];

    return (
        <div>
            {accountsSuggested.map((acc) => (
                <Tippy
                    key={acc.id}
                    interactive
                    delay={[800, 0]}
                    offset={[-20, 5]}
                    placement="bottom"
                    render={(props) => renderPreview(props, acc)}
                >
                    <div className="flex items-center py-2 px-2 cursor-pointer hover:bg-[rgba(174,175,182,0.03)]">
                        <img className="w-8 h-8 rounded-full object-cover" src={acc.img} alt="" />
                        <div className="flex-1 ml-3">
                            <p className="text-base text-[#161823] leading-none">
                                <strong>{acc.username}</strong>
                                <FontAwesomeIcon className="text-sm text-check-blue ml-1" icon={faCheckCircle} />
                            </p>
                            <p className="text-xs opacity-75">{acc.name}</p>
                        </div>
                    </div>
                </Tippy>
            ))}
        </div>
    );
};

// AccountItem.propTypes ={

// }
export default AccountItem;

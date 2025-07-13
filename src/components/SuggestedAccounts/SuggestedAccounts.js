import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import AccountFollowing from './AccountFollowing';

const SuggestedAccount = function ({ label }) {
    return (
        <>
            {label === 'Suggested accounts' ? (
                <div className="border-t border-[#e3e3e4]">
                    <p className="text-[1.4rem] py-2 px-2 font-semibold">{label}</p>
                    <AccountItem />
                    <p className="text-primary text-[1.4rem] font-bold py-2 px-2 cursor-pointer">See all</p>
                </div>
            ) : (
                <div className="border-t border-[#e3e3e4]">
                    <p className="text-[1.4rem] py-2 px-2 font-semibold">{label}</p>
                    <AccountFollowing />
                    <p className="text-primary text-[1.4rem] font-bold py-2 px-2 cursor-pointer">See all</p>
                </div>
            )}
        </>
    );
};

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;

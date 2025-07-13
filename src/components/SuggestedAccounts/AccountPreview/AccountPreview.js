import Button from './../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AccountPreview = function ({ data }) {
    return (
        <div className="w-80 p-5">
            <div className="flex justify-between items-center">
                <img className="w-11 h-11 rounded-full object-cover" src={data.img} alt="" />
                <Button className="py-[6px] px-4" primary>
                    Following
                </Button>
            </div>
            <div className="mt-3 text-[#161823]">
                <p className="text-[1.8rem]">
                    <strong>{data.username}</strong>
                    <FontAwesomeIcon className="text-[1.4rem] text-cyan-500 ml-1" icon={faCheckCircle} />
                </p>
                <p className="text-[1.4rem]">{data.name}</p>
                <p className="mt-[10px] text-[1.7rem]">
                    <strong className="text-[#161823]">8.2M </strong>
                    <span className="text-[#161823] mr-5">Followers</span>
                    <strong className="text-[#161823]">5.8M </strong>
                    <span className="text-[#161823]">Likes</span>
                </p>
            </div>
        </div>
    );
};

export default AccountPreview;

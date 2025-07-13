import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";// Adjust the path as necessary
import Images from '~/components/Images';


const AccountItem = function({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className='flex items-center py-4 px-8 hover:bg-neutral-200'>
        <Images 
        fallBack ="https://png.pngtree.com/png-clipart/20210311/original/pngtree-error-404-glitch-effect-png-image_6033747.jpg"
        className='h-20 w-20 rounded-full object-cover' src={data.avatar} alt={data.avatar} />
        <div className="flex-1 ml-4">
            <h4 className="text-2xl font-medium">
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon className='ml-2 text-cyan-400' icon={faCheckCircle}/>}
            </h4>
            <span className='text-xl text-zinc-500'>{data.nickname}</span>
        </div>
    </Link>
  ); 
}

AccountItem.propTypes ={
  data: PropTypes.object.isRequired
}
export default AccountItem;
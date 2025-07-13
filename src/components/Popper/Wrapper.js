
import PropTypes from 'prop-types'

const Wrapper = function({children}){
    return(
        <div className='flex-1 flex-col w-full max-h-[min(calc(100vh_-_96px_-_60px),_734px)] 
                        min-h-[100px] bg-neutral-50 shadow-[0px_2px_12px_rgb(0_0_0_/12%)]
                        rounded-xl pt-1
        '>
            {children}
        </div>
    )

}


Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
}
export default Wrapper;
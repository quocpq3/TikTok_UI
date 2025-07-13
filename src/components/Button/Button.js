
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import clsx from 'clsx'; 



const Button = function ({
    to,
    href,
    primary=false,
    outline=false,
    small=false,
    large=false,
    text=false,
    disabled=false,
    rounded=false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props ={
        
        onClick,
        ...passProps,
    }
    if(disabled) {
        // xóa event listener khi btn là disabled
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if(to) {
        props.to = to;
        Comp = Link; // nếu có to thì sẽ là Link
    }
    else if(href) {
        props.href = href;
        Comp = 'a'; // nếu có href thì sẽ là a
    }
      const classesclsx = clsx(
        'inline-flex align-center justify-center  min-w-[100px] py-3 px-6 rounded-lg fs-2xl font-family font-semibold cursor-pointer bg-neutral-50 border border-solid border-transparent select-none space-x-2',
        disabled && 'pointer-events-none opacity-50',
        primary &&'text-neutral-50 bg-[var(--primary)] border-[var] hover:border-current hover:bg-[var(--hoverPrimary)]',
        outline &&'',
        small &&'',
        large &&'',
        text &&' bg-transparent hover:underline',
        rounded && ''
    );
    // const classes = cx('wrapper', {
    //     [className]: className,
    //     primary,
    //     outline,
    //     small,
    //     large,
    //     text,
    //     disabled,
    //     rounded,
    // })
    return (
        
     <Comp className={classesclsx} {...props}>
        {leftIcon && <span className='inline-block'>{leftIcon}</span> }
        <span>{children}</span>
        {rightIcon && <span className='inline-block'>{rightIcon}</span> }
       
     </Comp>
    );
}
Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline:PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}
export default Button;
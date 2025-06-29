import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({to, href, primary=false ,outline=false,small=false,large=false,text=false,disabled=false,rounded=false,className,leftIcon,rightIcon, children, onClick, ...passProps}) {
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
  

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    })

    return (
     <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span> }
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span> }
       
     </Comp>
    );
}

export default Button;
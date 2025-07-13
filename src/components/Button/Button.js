import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = function ({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        // xóa event listener khi btn là disabled
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link; // nếu có to thì sẽ là Link
    } else if (href) {
        props.href = href;
        Comp = 'a'; // nếu có href thì sẽ là a
    }

    const classes = clsx(
        // Base styles - using original font settings from GlobalStyles
        'inline-flex items-center justify-center min-w-[100px] py-2 px-4 rounded-lg cursor-pointer border border-solid border-transparent select-none',
        // Font settings matching GlobalStyles: 1.6rem, font-family: var(--font-family), font-weight: 600
        'text-[1.6rem] leading-[1.5] font-semibold',
        // Use CSS custom property for font family
        'font-[var(--font-family)]',
        // Default style (when not primary, outline, or text)
        !primary &&
            !outline &&
            !text &&
            'bg-white text-black border-[rgba(22,24,35,0.12)] hover:border-[rgba(22,24,35,0.2)]',
        // Primary style - using CSS custom properties
        primary && 'text-white bg-[var(--primary)] hover:bg-[var(--hoverPrimary)]',
        // Outline style
        outline &&
            'bg-transparent text-[var(--primary)] border-[var(--primary)] hover:border-[var(--hoverPrimary)] hover:text-[var(--hoverPrimary)]',
        // Text style
        text && 'bg-transparent text-black hover:underline border-transparent',
        // Size variants - maintaining rem units from original
        small && 'min-w-[88px] py-1 px-3 text-[1.4rem]',
        large && 'min-w-[140px] py-3 px-6 text-[1.8rem]',
        // Disabled state
        disabled && 'pointer-events-none opacity-50',
        // Rounded variant
        rounded && 'rounded-full',
        // Custom className
        className,
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
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
};

export default Button;

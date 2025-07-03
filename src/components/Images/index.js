import {useState, forwardRef } from "react";
import images from '~/assets/images';
import styles from './Images.module.scss'
import classNames from "classnames";

const Images = forwardRef(({src, alt,className,fallBack: customFallBack = images.no-images, ...props}, ref) => {

    const[fallBack, setFallBack] = useState('');
    const handleError =() =>{
        setFallBack(customFallBack)
    }

    return <img 
        className={classNames(styles.wrapper, className)} 
        ref={ref} 
        src={fallBack || src} 
        alt={alt} {...props} 
        onError={handleError}/> ;
});

export default Images
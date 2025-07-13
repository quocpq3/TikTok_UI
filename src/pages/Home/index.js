import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);

const Home = function(){
    return <h2 className="font-bold">Home page</h2>
}


export default Home;
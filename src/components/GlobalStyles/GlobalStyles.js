
import './GlobalStyles.scss';
import PropTypes from 'prop-types'

const GlobalStyles = function({children}){
    return children
}

GlobalStyles.propTypes ={
    children: PropTypes.node.isRequired
}

export default GlobalStyles
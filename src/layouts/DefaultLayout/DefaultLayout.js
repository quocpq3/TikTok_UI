import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';

const DefaultLayout = function ({ children }) {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-layout-width max-w-full flex px-layout-spacer mt-header-height">
                <Sidebar />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;

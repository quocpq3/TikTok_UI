import Header from "~/layouts/components/Header";


const HeaderOnly = function({children}){
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                {children}
                </div>
            </div>
        </div>
    );

}


export default HeaderOnly
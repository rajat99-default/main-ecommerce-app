

import { ThreeDots } from "react-loader-spinner";
const Loader = () => {
    return (
        <center style={{marginLeft:'32px'}} >

        <ThreeDots
        
            height="80"
            width="80"
            
            color='#df453e'
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
            </center>
    );
};  
export default Loader;
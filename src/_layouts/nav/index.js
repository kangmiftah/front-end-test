import React from 'react';

const Nav = () => {
    return ( 
        <>
            <div 
                style={{
                    position:"fixed",
                    width:"100%",
                    background:"black",
                    height:"55px",
                    padding:"0px 3px",
                    overflow:"hidden",
                    zIndex:99
                }}
            ></div>
        </>
     );
}
 
export default Nav;
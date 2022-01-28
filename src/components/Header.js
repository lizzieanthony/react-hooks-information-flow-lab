import React from "react";

function Header ({onDarkModeClick, state}) {
    return(
    <header>
        <h2>Shopster</h2>
        <button 
            onClick={onDarkModeClick}> 
            {state ? "Dark" : "Light"} Mode
        </button>
    </header>
  );
}

export default Header;

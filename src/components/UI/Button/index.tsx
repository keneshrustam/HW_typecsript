import React from 'react';

const Button = ({ children }: React.PropsWithChildren) => {
    return (
        <button>
            {children}
        </button>
    );
};

export default Button;
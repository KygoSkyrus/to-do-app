import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"absolute",
        bottom:"-16px",
        width:"100%",

    }
    return (
        <div className="bg-dark text-light py-1 my-2 position-fixed" style={footerstyle}>
            <p className="text-center pt-2">
                Copyright &copy; MyTodoList by kygoskyrus
            </p>
        </div>
    )
}

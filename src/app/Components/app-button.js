

export const AppButton = ({ color,children,className, ...otherProps}) => {
    let colorClass = "text-blue-600 border-blue-600"
    if (color === "success") {
        colorClass = "text-green-600 border-green-600";
    } else if (color === "warning") {
        colorClass = "text-yellow-600 border-yellow-600";        
    } else if (color === "error") {
        colorClass = "text-red-600 border-red-600"
    }

    return (
        <button
        {...otherProps}
        className={ `border border-solid py-2 px-4 round-full ${colorClass} ${
            className ??  "" 
        } `}  
        >
            {children}
        </button>
    )
}
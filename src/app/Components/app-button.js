export const AppButton = ({ color, className, children, ...otherProps }) => {
    let buttonClassName = 
    "px-4 py-2 text-sm rounded-full cursor-pointer"
    if (color === "blue") {
        buttonClassName += " bg-blue-500 text-white ";
    } else if (color === "red") {
        buttonClassName += " bg-red-500 text-black";
    } else if (color === "gray") {
        buttonClassName += " bg-gray-500 text-black";
    }
    if (className) {
        buttonClassName += " " + className;
    }
    return (
    <button className={buttonClassName} {...otherProps}>
        {children}
    </button>
    );
};
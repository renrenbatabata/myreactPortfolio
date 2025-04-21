import containerStyles from "../styles/container.module.css";

const Container = ({ children, large = false }) => {
    return (
        <div className={large ? containerStyles.large : containerStyles.default}>
            {children}
        </div>
    )
}

export default Container;
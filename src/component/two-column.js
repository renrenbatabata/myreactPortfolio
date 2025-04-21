import twoColumnStyles from "../styles/two-column.module.css";
import utilsStyles from "../styles/utils.module.css";


export const TwoColumn = ({children})=>{
    return (
        <div className={`${twoColumnStyles.flexContainer} ${utilsStyles.sideBySide}`}>
            {children}
        </div>
    )
}

export const TwoColumnMain = ({children})=>{
    return (
        <div className={twoColumnStyles.main}>
            {children}
        </div>
    )
};

export const TwoColumnSidebar = ({children})=>{
    return (
        <div className={twoColumnStyles.sidebar}>
            {children}
        </div>
    )
};


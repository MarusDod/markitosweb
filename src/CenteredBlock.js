import { forwardRef } from "react"
import styles from './CenteredBlock.module.css'


const CenteredBlock = ({id,children,style},ref) => (
    <div id={id} ref={ref} className={styles.centeredblock} style={style ?? {}} >{children}</div>
)

export default forwardRef(CenteredBlock)
export default ({style,children,center}) => (
    <div style={{...style,fontSize: "25px",...(center ? {textAlign: "center"}:{})}}>
        {children}
    </div>
)
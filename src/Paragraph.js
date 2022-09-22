export default ({style,children,center}) => (
    <div style={{...style,fontSize: "25px",padding:".5em",...(center ? {textAlign: "center"}:{})}}>
        {children}
    </div>
)
export default ({style,children}) => (
    <div style={{...style,fontWeight: "bold",fontSize: "60px"}}>
        {children}
    </div>
)
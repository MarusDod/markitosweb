export default ({style,children}) => (
    <div style={{...style,fontWeight: "bold",fontSize: "8vmin",marginBottom:".5em",width:"80%",textAlign:"center"}}>
        {children}
    </div>
)
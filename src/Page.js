export default ({children}) => {

    const pageStyle = {
        display:"flex",
        flexDirection:"column",
    }

    return (
        <div style={pageStyle}>
            {children}
        </div>
    )
}
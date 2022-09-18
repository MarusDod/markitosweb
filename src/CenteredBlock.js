const style = {
    width: "80%",
    position: "relative",
    display: "flex",
    marginTop: "100px",
    padding: "30px 30px 100px 30px",
    flexDirection: 'column',
    outline: "10px solid transparent",
    boxShadow: "0 0 1px rgba(255, 255, 255, 0)",
    backgroundColor: "rgba(52, 94, 198, 0.1)",
    borderRadius: "10px",
    fontFamily: "Helvetica",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
}

export default ({id,children}) => (
    <div id={id} style={style}>{children}</div>
)
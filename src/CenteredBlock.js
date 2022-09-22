const mystyle = {
    width: "70%",
    position: "relative",
    display: "flex",
    marginTop: "100px",
    padding: "30px 30px 100px 30px",
    flexDirection: 'column',
    outline: "10px solid transparent",
    boxShadow: "0 0 1px rgba(255, 255, 255, 0)",
    backgroundColor: "rgba(52, 94, 198, 0.1)",
    borderRadius: "10px",
    alignItems: "center",
    fontFamily: "Helvetica",
    marginLeft: "auto",
    marginRight: "auto",
}

export default ({id,children,style}) => (
    <div id={id} style={{...mystyle,...style,}} >{children}</div>
)
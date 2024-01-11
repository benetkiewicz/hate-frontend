import logo from '/frontend-logo-smallest.webp'
const Header = () => {
return (<div className="headerContainer">
    <div>I</div>
    <div className="bigger">Hate</div>
    <div><img src={logo} width={270} height={270} alt="Angry programmer logo"></img></div>
    <div className="bigger">Front</div>
    <div>End</div>
</div>);
}

export default Header;
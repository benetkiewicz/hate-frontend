import logo from '/frontend-logo-small.webp'
const Header = () => {
return (<div className="headerContainer">
    <div>I</div>
    <div className="bigger">Hate</div>
    <div><img src={logo} width={270} height={270}></img></div>
    <div className="bigger">Front</div>
    <div>End</div>
</div>);
}

export default Header;
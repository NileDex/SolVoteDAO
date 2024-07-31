import { MdLaunch } from "react-icons/md";
const Header = () => {
    return ( 
        <header className="navigation">
          <div className="logo"><img src="https://s3.coinmarketcap.com/static-gravity/image/a28128d9ff7c49c9ad33ee2f626fda40.png" alt="Collection item" /></div>
          {/* <nav>
            <a href="#">Marketplace</a>
            <a href="#">Stats</a>
            <a href="#">Community</a>
            <a href="#">Discover</a>
          </nav> */}
          <button className="launch">Launch App<span className="launchicon"><MdLaunch /></span></button>
        </header>
     );
};
 
export default Header;
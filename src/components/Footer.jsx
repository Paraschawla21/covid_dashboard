import { Link, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MobileStoreButton from "react-mobile-store-button";

import "../styles/footer.css";
function Footer() {
    return (
        <>
            <div className="main">
                <div className="left">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        <img
                            src="images/icon.png"
                            alt=""
                            height={60}
                            width={55}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "auto",
                                marginBottom: "0",
                            }}
                        >
                            <h2 style={{ marginTop: "0", marginBottom: "0" }}>
                                finangel
                            </h2>
                        </div>
                    </div>
                    <div className="info">
                        The services are provided by Decta Limited, registered
                        in UK under reg.no. 09926210. Decta limited is a
                        licensed by the FCA UK financial institution, License
                        No. 900592.
                        <br />
                        <br />
                        The Technical platform is provided by Financial Ltd,
                        Republic of Cyprus, Registration #389099
                    </div>
                    <div className="social">
                        <IconButton className="icon">
                            {/*Adding Color to social buttons*/}
                            <FacebookIcon color="primary" />
                        </IconButton>
                        <IconButton className="icon">
                            <InstagramIcon color="primary" />
                        </IconButton>
                        <IconButton className="icon">
                            <TwitterIcon color="primary" />
                        </IconButton>
                        <IconButton className="icon">
                            <YouTubeIcon color="primary" />
                        </IconButton>
                    </div>
                </div>
                <div className="right">
                    <div className="links">
                        <div className="leftLinks">
                            <Link href="#" className="link">
                                About us
                            </Link>
                            <Link href="#" className="link">
                                Mission
                            </Link>
                            <Link href="#" className="link">
                                Stores
                            </Link>
                            <Link href="#" className="link">
                                Partners
                            </Link>
                        </div>
                        <div className="rightLinks">
                            <Link href="#" className="link">
                                FAQ
                            </Link>
                            <Link href="#" className="link">
                                Terms & Conditions
                            </Link>
                            <Link href="#" className="link">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="link">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                    <div className="buttons">
                        <MobileStoreButton
                            className="iosStore"
                            width={150}
                            height={50}
                            store="ios"
                            url="https://itunes.apple.com"
                            linkProps={{ title: "iOS Store Button" }}
                        />

                        <MobileStoreButton
                            className="gplay"
                            width={200}
                            height={60}
                            store="android"
                            url="https://play.google.com"
                            linkProps={{ title: "android Store Button" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

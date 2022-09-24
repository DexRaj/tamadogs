import './Footer.css';

function FooterComponents() {
  return (
    <>
        <footer className="site-footer">
            <div>
                Copyright © Tamadoge 2022 | <a href="contact/index.html" style={{color: "rgb(98, 94, 55)"}}>contact</a> | <a
                    href="press/index.html" style={{color: "rgb(98, 94, 55)"}}>Press</a>
                <div className="text-small">
                    Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as
                    well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
                </div>
                <div className="text-small">
                    <a href="cookie-policy.html" style={{color: "rgb(98, 94, 55)"}}>Cookie Policy</a> | <a
                        href="privacy-policy.html" style={{color: "rgb(98, 94, 55)"}}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    </>
  );
}

export default FooterComponents;

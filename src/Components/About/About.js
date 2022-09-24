import './About.css';

function AboutComponents() {
  return (
    <>
		<section className="container about-section">
            <div className="inner about">
                <div className="about-content">
                    <div className="left-column">
                        <img src="wp-content/uploads/2022/08/dog-safe.png" className="island" loading="lazy" />
                    </div>
                    <div className="middle-column">
                        <div className="about-proof-images">
                            <a href="wp-content/uploads/2022/08/SmartContract_Audit_Solidproof_Tamadoge.pdf"
                                target="_blank" download><img
                                    src="wp-content/uploads/2022/07/Badge_Certificate_Solidproof_Tamadoge.png"
                                    className="solid-proof" /></a>
                            <a href="https://coinsniper.net/coin/37091" target="_blank"><img
                                    src="wp-content/uploads/2022/07/mstile-150x150-2.png" className="solid-proof" /></a>
                        </div>
                        <h2>100% Secure</h2>
                        <ul>
                            <li>

                                <p>Contract code fully audited by Solid Proof and shown to be 100% secure</p>
                            </li>
                            <li>

                                <p>Team fully verified by Coinsniper to ensure anti-rug and complete project security
                                </p>
                            </li>
                        </ul>

                        <a href="wp-content/uploads/2022/09/Tamadoge-whitepapers-EN-1.pdf" className="eightbit-btn"
                            target="_blank" download style={{marginTop: "24px"}}>Download Whitepaper</a>
                    </div>

                    <div className="right-column">
                        <img src="wp-content/uploads/2022/08/Asset-1793.svg" className="island" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default AboutComponents;

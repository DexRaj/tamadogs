import './UnderSand.css';

function UnderSandComponents() {
  return (
    <>
      <section className="container under-sand" id="whitepaper">
			<div className="inner whitepaper">
				<div>
					<h2 className="section-title" style={{marginBottom: "80px"}}>Read the Tamadoge whitepaper</h2>
					<a href="wp-content/uploads/2022/09/Tamadoge-whitepapers-EN-1.pdf" className="eightbit-btn"
						target="_blank" download>Download Whitepaper</a>
				</div>
				<div className="powered-by-section">
					<h3 style={{textAlign: "center"}}>Powered By</h3>
					<div className="powered-by">
						<div className="powered-holder">
							<img src="wp-content/uploads/2022/08/aws-1.png" />
						</div>
						<div className="powered-holder">
							<img src="wp-content/uploads/2022/08/eth.png" />
						</div>
						<div className="powered-holder">
							<img src="wp-content/uploads/2022/08/meta.png" />
						</div>
						<div className="powered-holder">
							<img src="wp-content/uploads/2022/08/trust.png" />
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
}

export default UnderSandComponents;

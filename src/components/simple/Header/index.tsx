import React from "react";
import Link from "next/link";

import { siteName } from "@config/siteConfig";

const Header = () => {
	return (
		<header className="position-sticky top-0 mb-5">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div className="container">
					<Link className="navbar-brand" href="/">
						{siteName}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link className="nav-link" href="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="">
									Catalog
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

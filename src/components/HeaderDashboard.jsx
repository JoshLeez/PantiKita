import "./styles/header_dashboard.css";
import { Bell,ChevronUp } from "tabler-icons-react";

const HeaderDashboard = (props) => {
	return (
		<>
			<header className="header-dashboard">
				<h1>{props.title}</h1>
				<div className="status">
					<div className="notification">
						<Bell color="#3AB7FE" />
						<span>2</span>
					</div>
					<div className="welcome">
						<p>
							selamat datang, <strong>AgusSalim01</strong>
						</p>
						<ChevronUp color="#3AB7FE" />
					</div>
				</div>
			</header>
		</>
	);
};

export default HeaderDashboard;

import Image from "next/image";

// import { useMockUser } from "../hooks/useMockUser";
// import Logo from "../../public/ACME.png";

import { useMockUser } from "@/hooks/useMockUser";
import Logo from "public/ACME.png";

export function Navbar() {
	const { user, loading, error } = useMockUser();

	return (
		<nav
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				maxWidth: 900,
				margin: "0 auto",
			}}
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				<Image src={Logo} alt="ACME logo" width={36} height={36} />
				<h1 style={{ marginLeft: 8 }}>ACME Inc.</h1>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				{!loading && user && (
					<>
						<span style={{ marginRight: 8 }}>{user.name.split(" ")[0]}</span>
						<Image
							src={user.image}
							alt={user.name}
							width={32}
							height={32}
							objectFit="cover"
							style={{
								borderRadius: "50%",
							}}
						/>
					</>
				)}
			</div>
		</nav>
	);
}

import Image from "next/image";

export const Title = () => {
	return (
		<div className=" flex-1 p-3">
			<div className=" flex flex-row">
				<div className=" w-10 h-10 mr-3">
					<Image
						src="/assets/logo.png"
						alt="logo"
						width={640}
						height={640}
					/>
				</div>

				<h1 className=" text-4xl font-bold">덕영시간표</h1>
			</div>
		</div>
	);
};

import Image from "next/image";

interface TitleProps {
	children?: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
	return (
		<div className=" flex-1 p-3">
			<div className=" flex flex-row h-full">
				<div className=" w-10 h-10 mr-3">
					<Image
						src="/assets/logo.png"
						alt="logo"
						width={640}
						height={640}
					/>
				</div>
				<h1 className=" text-4xl font-bold">덕영시간표</h1>
				{children && (
					<div className=" mr-3 ml-auto h-full">{children}</div>
				)}
			</div>
		</div>
	);
};

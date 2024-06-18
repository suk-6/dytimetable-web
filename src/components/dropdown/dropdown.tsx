import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./dropdown.css";

interface DropdownItemProps {
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	goToMenu?: string;
	children: React.ReactNode;
	func?: (_: any) => void;
	fkey?: number;
}

export const Dropdown = () => {
	const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
	const [activeMenu, setActiveMenu] = useState<string>("main");
	const [menuHeight, setMenuHeight] = useState<number | null>(null);
	const dropdownRef = useRef(null);

	const calcHeight = (el: HTMLElement | null) => {
		if (el) {
			setMenuHeight(el.offsetHeight);
		}
	};

	const DropdownItem = ({
		func,
		fkey,
		goToMenu,
		leftIcon,
		children,
		rightIcon,
	}: DropdownItemProps) => {
		return (
			<a
				href="#"
				className=" h-12 p-4 flex items-center rounded-md overflow-hidden hover:bg-gray-400 text-black transition"
				onClick={() => {
					goToMenu && setActiveMenu(goToMenu);
					func && func(fkey);
				}}
			>
				<span className="icon-left">{leftIcon}</span>
				{children}
				<span className="icon-right">{rightIcon}</span>
			</a>
		);
	};

	const selectGrade = (grade: number) => {
		setSelectedGrade(grade);
		setActiveMenu("classroom-2");
	};

	const selectClassroom = (classroomNo: number) => {
		localStorage.setItem("mode", "classroom");
		localStorage.setItem("classroom", `${selectedGrade}-${classroomNo}`);
	};

	return (
		<div
			className={`flex flex-row h-[${menuHeight}px] absolute top-10 right-3 bg-gray-300 border rounded-md p-4 overflow-hidden transition-height duration-500 w-56`}
		>
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames="menu"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="w-full">
					<DropdownItem goToMenu="classroom-1">학급</DropdownItem>
				</div>
			</CSSTransition>
			<CSSTransition
				in={activeMenu === "classroom-1"}
				timeout={500}
				classNames="menu"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="w-full">
					{Array.from({ length: 3 }, (_, i) => i + 1).map((i) => {
						return (
							<DropdownItem key={i} fkey={i} func={selectGrade}>
								{i}학년
							</DropdownItem>
						);
					})}
				</div>
			</CSSTransition>
			<CSSTransition
				in={activeMenu === "classroom-2"}
				timeout={500}
				classNames="menu"
				unmountOnExit
				onEnter={calcHeight}
			>
				<div className="w-full">
					{Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
						return (
							<DropdownItem
								key={i}
								fkey={i}
								func={selectClassroom}
							>
								{i}반
							</DropdownItem>
						);
					})}
				</div>
			</CSSTransition>
		</div>
	);
};

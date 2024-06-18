"use client";

import { Dropdown } from "@/components/dropdown/dropdown";
import { Timetable } from "@/components/timetable";
import { Title } from "@/components/title";
import { ClassroomNo, ClassroomNoT, Grade, GradeT } from "@/models/classroom";
import { TimeTableModel } from "@/models/timetable";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

export default function Home() {
	const [timetable, setTimetable] = useState<TimeTableModel>();
	const [open, setOpen] = useState<boolean>(false);
	const [mode, setMode] = useState<string | null>(null);
	const [grade, setGrade] = useState<GradeT | null>(null);
	const [classroomNo, setClassroomNo] = useState<ClassroomNoT | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const a = ClassroomNo.Classroom1;

	const refresh = async () => {
		setMode(localStorage.getItem("mode"));
		setGrade(
			(() => {
				const gradeString = localStorage
					.getItem("classroom")
					?.split("-")[0];
				if (!gradeString) return null;

				const grade = parseInt(gradeString);
				return Object.values(Grade).find((g) => g === grade) || null;
			})()
		);
		setClassroomNo(
			(() => {
				const crString = localStorage
					.getItem("classroom")
					?.split("-")[1];
				if (!crString) return null;

				const cr = parseInt(crString);
				return Object.values(ClassroomNo).find((c) => c === cr) || null;
			})()
		);
	};

	useEffect(() => {
		fetch("/api/timetable")
			.then((res) => res.json())
			.then((res: TimeTableModel) => setTimetable(res))
			.then(() => setIsLoading(false));

		refresh();
	}, []);

	return (
		<main className=" w-screen h-screen">
			<div className=" flex flex-col w-full h-full">
				<div>
					<Title>
						<button
							onClick={() => setOpen(!open)}
							className=" h-full flex items-center justify-center bg-gray-100 rounded-md px-4 py-2 transition-colors hover:bg-gray-300"
						>
							설정
						</button>
						{open && <Dropdown setOpen={setOpen} func={refresh} />}
					</Title>
					<div className=" w-full border border-gray-400" />
				</div>
				{isLoading ? (
					<div className=" w-full h-full flex justify-center items-center">
						<BeatLoader color="#494949" />
					</div>
				) : (
					timetable &&
					mode === "classroom" && (
						<Timetable
							title={`${grade}-${classroomNo}`}
							weekDayTimetable={
								timetable.student[grade!][classroomNo!]
							}
						/>
					)
				)}
			</div>
		</main>
	);
}

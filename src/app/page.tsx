"use client";

import { Timetable } from "@/components/timetable";
import { Title } from "@/components/title";
import { TimeTableModel } from "@/models/timetable";
import { useEffect, useState } from "react";

export default function Home() {
	const [timetable, setTimetable] = useState<TimeTableModel>();
	useEffect(() => {
		fetch("/api/timetable")
			.then((res) => res.json())
			.then((res: TimeTableModel) => setTimetable(res));
	}, []);

	return (
		<main className=" w-screen h-screen">
			<div className=" flex flex-col">
				<Title />
				<div className=" w-full border border-gray-400" />
				{timetable && (
					<Timetable
						title="1-1"
						weekDayTimetable={timetable.student[1][1]}
					/>
				)}
			</div>
		</main>
	);
}

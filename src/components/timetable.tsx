"use client";

import { WeekdayTimeTable } from "@/models/timetable";

interface TimetableProps {
	weekDayTimetable: WeekdayTimeTable;
}

export const Timetable = ({ weekDayTimetable }: TimetableProps) => {
	return (
		<div>
			{weekDayTimetable[1].map((period, index) => {
				console.log(period);
				return (
					<div key={index}>
						<div>{period.subject}</div>
						<div>{period.teacher}</div>
					</div>
				);
			})}
		</div>
	);
};

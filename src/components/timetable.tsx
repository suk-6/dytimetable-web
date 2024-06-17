"use client";

import {
	WeekdayTimeTable,
	WeekdayString,
	ClassPeriod,
} from "@/models/timetable";

interface TimetableProps {
	weekDayTimetable: WeekdayTimeTable;
}

export const Timetable = ({ weekDayTimetable }: TimetableProps) => {
	return (
		<div className="w-full max-w-4xl mx-auto p-6 sm:p-8">
			<div className="grid grid-cols-6 gap-4 mb-4">
				<div className="bg-gray-100 rounded-md py-2 px-4 font-medium text-center"></div>
				{Object.values(WeekdayString).map(
					(weekday: string, i: number) => {
						if (i === 0 || i === 6) return;
						return (
							<div
								key={weekday}
								className="bg-gray-100 rounded-md py-2 px-4 font-medium text-center"
							>
								{weekday}
							</div>
						);
					}
				)}
			</div>
			<div className="grid grid-cols-6 gap-4">
				<div className="grid grid-rows-7 gap-4">
					{Array.from({ length: 7 }, (_, i) => i + 1).map(
						(i: number) => {
							return (
								<div
									key={i}
									className="bg-gray-100 rounded-md py-2 px-4 font-medium flex items-center justify-center"
								>
									{i}교시
								</div>
							);
						}
					)}
				</div>
				{Object.values(weekDayTimetable).map(
					(classPeriods: ClassPeriod[], day: number) => {
						return (
							<div key={day} className="grid grid-rows-7 gap-4">
								{classPeriods.map(
									(classPeriod: ClassPeriod) => {
										return (
											<div
												key={classPeriod.classTime}
												className="bg-white rounded-md p-4 flex flex-col gap-2 border border-gray-100 shadow-sm"
											>
												<div className="font-medium">
													{classPeriod.subject}
												</div>
												<div className="text-gray-500 dark:text-gray-400">
													{classPeriod.teacher}
												</div>
											</div>
										);
									}
								)}
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

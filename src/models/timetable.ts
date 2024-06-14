import { ClassroomNoT, GradeT } from "./classroom";

export const Weekday = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6,
} as const;

export type WeekdayT = (typeof Weekday)[keyof typeof Weekday];

export const WeekdayString = {
	Sunday: "일",
	Monday: "월",
	Tuesday: "화",
	Wednesday: "수",
	Thursday: "목",
	Friday: "금",
	Saturday: "토",
} as const;

export type WeekdayStringT = (typeof WeekdayString)[keyof typeof WeekdayString];

export type WeekdayTimeTable = {
	[weekday in WeekdayT]: ClassPeriod[];
};

export interface ClassPeriod {
	grade: GradeT;
	class: ClassroomNoT;
	weekday: WeekdayT;
	weekdayString: WeekdayStringT;
	classTime: number;
	subject: string;
	teacher: string;
	isChanged?: boolean;
}

export interface StudentTimeTableModel {
	student: {
		[grade in GradeT]: {
			[classroomNo in ClassroomNoT]: WeekdayTimeTable;
		};
	};
}

export interface TeacherTimeTableModel {
	teacher: {
		[teacherNo: number]: WeekdayTimeTable & {
			name: string;
		};
	};
}

export interface TimeTableModel {
	student: StudentTimeTableModel["student"];
	teacher: TeacherTimeTableModel["teacher"];
}

export const Grade = {
	Grade1: 1,
	Grade2: 2,
	Grade3: 3,
} as const;

export type GradeT = (typeof Grade)[keyof typeof Grade];

export const ClassroomNo = {
	Classroom1: 1,
	Classroom2: 2,
	Classroom3: 3,
	Classroom4: 4,
	Classroom5: 5,
	Classroom6: 6,
	Classroom7: 7,
	Classroom8: 8,
	Classroom9: 9,
	Classroom10: 10,
} as const;

export type ClassroomNoT = (typeof ClassroomNo)[keyof typeof ClassroomNo];

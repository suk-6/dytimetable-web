import { ClassroomNo, ClassroomNoT, Grade, GradeT } from "@/models/classroom";
import { Action } from "redux";

type State = {
	mode: string;
	grade: GradeT;
	classroomNo: ClassroomNoT;
};

const initialState = {
	mode: "main",
	grade: Grade.Grade1,
	classroomNo: ClassroomNo.Classroom1,
};

type Actions = Action<"CHANGE_MODE"> & Action<"CHANGE_CLASSROOM">;

export const rootReducer = (state: State = initialState, action: Actions) => {
	switch (action.type) {
		case "CHANGE_MODE":
			return {
				mode: action.mode,
			};
		default:
			return state;
	}
};

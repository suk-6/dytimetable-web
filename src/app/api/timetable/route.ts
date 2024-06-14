import { TimeTableModel, WeekdayTimeTable } from "@/models/timetable";

export const GET = async (request: Request) => {
	const url = `${process.env.API_URL}/v2/timetable`;
	const { searchParams } = new URL(request.url);
	const grade = searchParams.get("grade");
	const classroomNo = searchParams.get("classroomNo");

	let timetable;

	if (!grade && !classroomNo) {
		timetable = await fetch(`${url}/all`)
			.then((res) => res.json())
			.then((res: TimeTableModel) => res)
			.catch(
				() => new Response("Internal Server Error", { status: 500 })
			);
	} else if (grade && classroomNo) {
		timetable = await fetch(`${url}/${grade}/${classroomNo}`)
			.then((res) => res.json())
			.then((res: WeekdayTimeTable) => res)
			.catch(
				() => new Response("Internal Server Error", { status: 500 })
			);
	} else {
		return new Response("Bad Request", { status: 400 });
	}

	return Response.json(timetable);
};

import {
	AiOutlineDollar,
	AiOutlineEdit,
	AiOutlineHome,
	AiOutlineLogout,
	AiOutlinePercentage,
	AiOutlineTable,
	AiOutlineUsergroupAdd,
} from "react-icons/ai";
import {
	FaRegBell,
	FaRegCalendarCheck,
	FaRegClock,
	FaRegCommentAlt,
	FaRegStar,
	FaUserGraduate,
	FaUsers,
} from "react-icons/fa";

export type IconNameProps =
	| "home"
	| "staffs"
	| "students"
	| "attendance"
	| "marks"
	| "schedule"
	| "circulars"
	| "remarks"
	| "feedback"
	| "logout"
	| "submissions"
	| "fees"
	| "admissions"
	| "time table";

export interface IconProps {
	IconName: IconNameProps;
}

export default function Icon({ IconName, ...props }: IconProps) {
	return (
		<div className="w-full h-full flex items-center justify-center">
			{(IconName === "home" && <AiOutlineHome {...props} />) ||
				(IconName === "staffs" && <FaUsers {...props} />) ||
				(IconName === "students" && <FaUserGraduate {...props} />) ||
				(IconName === "attendance" && <FaRegCalendarCheck {...props} />) ||
				(IconName === "schedule" && <FaRegClock {...props} />) ||
				(IconName === "marks" && <AiOutlinePercentage {...props} />) ||
				(IconName === "circulars" && <FaRegBell {...props} />) ||
				(IconName === "remarks" && <FaRegStar {...props} />) ||
				(IconName === "feedback" && <FaRegCommentAlt {...props} />) ||
				(IconName === "logout" && <AiOutlineLogout {...props} />) ||
				(IconName === "submissions" && <AiOutlineEdit {...props} />) ||
				(IconName === "fees" && <AiOutlineDollar {...props} />) ||
				(IconName === "time table" && <AiOutlineTable {...props} />) ||
				(IconName === "admissions" && <AiOutlineUsergroupAdd {...props} />)}
		</div>
	);
}

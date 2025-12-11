interface Course {
  id: string;
  code: string;
  title: string;
  schedule: Array<{ day: string; time: string; location: string }>;
}

interface ScheduleViewProps {
  courses: Course[];
}

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const colors = [
  "bg-blue-100 border-blue-400 text-blue-800",
  "bg-green-100 border-green-400 text-green-800",
  "bg-purple-100 border-purple-400 text-purple-800",
  "bg-orange-100 border-orange-400 text-orange-800",
  "bg-pink-100 border-pink-400 text-pink-800",
];

export function ScheduleView({ courses }: ScheduleViewProps) {
  function parseTime(timeStr: string) {
    const match = timeStr.match(/(\d+):(\d+)-(\d+):(\d+)\s*(AM|PM)/);
    if (!match) return { start: 9, end: 10 };

    let startHour = parseInt(match[1], 10);
    let startMin = parseInt(match[2], 10);
    let endHour = parseInt(match[3], 10);
    let endMin = parseInt(match[4], 10);
    const period = match[5];

    if (period === "PM" && startHour !== 12) startHour += 12;
    if (period === "AM" && startHour === 12) startHour = 0;
    if (period === "PM" && endHour !== 12) endHour += 12;
    if (period === "AM" && endHour === 12) endHour = 0;

    return {
      start: startHour + startMin / 60,
      end: endHour + endMin / 60,
    };
  }

  const scheduledCourses = courses.map((course, idx) => {
    const schedule = course.schedule[0];
    const days = schedule.day.split("").filter((d) => d !== " ");

    return {
      ...course,
      days: days
        .map((d, i) => {
          const next = days[i + 1];
          if (d === "T" && next === "h") return "Thursday";
          if (d === "M") return "Monday";
          if (d === "T") return "Tuesday";
          if (d === "W") return "Wednesday";
          if (d === "F") return "Friday";
          return "";
        })
        .filter(Boolean),
      color: colors[idx % colors.length],
      ...parseTime(schedule.time),
    };
  });

  if (courses.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-[18px]">Weekly Schedule</h3>
          <p className="text-[13px] text-gray-600 mt-1">
            Visual calendar of your selected courses
          </p>
        </div>
        <div className="p-12 text-center text-gray-500">
          <p className="text-[16px] mb-2">No courses in your cart</p>
          <p className="text-[13px]">
            Add courses to see them visualized in your schedule
          </p>
        </div>
      </div>
    );
  }

  const earliestHour = Math.min(...scheduledCourses.map((c) => c.start));
  const latestHour = Math.max(...scheduledCourses.map((c) => c.end));

  const scheduleStartHour = Math.floor(earliestHour);
  const scheduleEndHour = Math.ceil(latestHour);
  const hoursRange = scheduleEndHour - scheduleStartHour;

  const timeSlots = Array.from({ length: hoursRange + 1 }, (_, i) => {
    const hour24 = scheduleStartHour + i;
    const period = hour24 >= 12 ? "PM" : "AM";
    let hour12 = hour24 % 12;
    if (hour12 === 0) hour12 = 12;
    return `${hour12}:00 ${period}`;
  });

  function getTopPosition(hourFraction: number) {
    const hourHeight = 80;
    const headerOffset = 40;
    return (hourFraction - scheduleStartHour) * hourHeight + headerOffset;
  }

  function getHeight(start: number, end: number) {
    const hourHeight = 80;
    return (end - start) * hourHeight;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-[18px]">Weekly Schedule</h3>
        <p className="text-[13px] text-gray-600 mt-1">
          Visual calendar of your selected courses
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex min-w-full">
          {/* Time column */}
          <div className="w-24 border-r border-gray-200 bg-gray-50">
            <div className="h-10 border-b border-gray-200" />{" "}
            {/* Header spacer */}
            {timeSlots.map((time, idx) => (
              <div
                key={idx}
                className="h-20 border-b border-gray-100 px-2 py-1 text-[11px] text-gray-600"
              >
                {time}
              </div>
            ))}
          </div>

          {/* Day columns */}
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="flex-1 min-w-[180px] border-r border-gray-200 relative"
            >
              {/* Header */}
              <div className="h-10 border-b border-gray-200 flex items-center justify-center bg-gray-50">
                <span className="text-[13px]">{day}</span>
              </div>

              {/* Time slots */}
              {timeSlots.map((_, idx) => (
                <div key={idx} className="h-20 border-b border-gray-100" />
              ))}

              {/* Courses */}
              {scheduledCourses
                .filter((course) => course.days.includes(day))
                .map((course) => (
                  <div
                    key={course.id}
                    className={`absolute left-1 right-1 border-l-4 rounded p-2 shadow-sm ${course.color}`}
                    style={{
                      top: `${getTopPosition(course.start)}px`,
                      height: `${getHeight(course.start, course.end)}px`,
                    }}
                  >
                    <div className="text-[11px] line-clamp-1">
                      {course.code}
                    </div>
                    <div className="text-[10px] line-clamp-1 opacity-80">
                      {course.title}
                    </div>
                    <div className="text-[9px] mt-1 opacity-70">
                      {course.schedule[0].location}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          {scheduledCourses.map((course) => (
            <div key={course.id} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded border-l-4 ${course.color}`} />
              <span className="text-[12px]">
                {course.code}: {course.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

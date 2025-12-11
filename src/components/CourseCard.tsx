import {
  Star,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";

interface Course {
  id: string;
  code: string;
  title: string;
  term: string;
  instructor: string;
  description: string;
  rating: number;
  reviewCount: number;
  schedule: Array<{ day: string; time: string; location: string }>;
  department: string;
  level: string;
  prerequisites: string[];
  tags: string[];
  enrolled: number;
  capacity: number;
  avgWorkload: string;
}

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
  isSaved: boolean;
  onToggleSave: (courseId: string) => void;
}

export function CourseCard({
  course,
  onSelect,
  isSaved,
  onToggleSave,
}: CourseCardProps) {
  const availableSeats = course.capacity - course.enrolled;
  const fillPercentage = (course.enrolled / course.capacity) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        {/* Left: Main Info */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-[18px] text-[#a3001c]">{course.code}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-[14px]">{course.rating}</span>
                  <span className="text-gray-400 text-[12px]">
                    ({course.reviewCount})
                  </span>
                </div>
              </div>
              <h4 className="text-[16px] text-gray-900 mb-2">{course.title}</h4>
              <p className="text-[13px] text-gray-600 mb-2">
                {course.instructor} • {course.term}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(course.id);
              }}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              aria-label={isSaved ? "Remove from cart" : "Add to cart"}
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 text-[#a3001c]" />
              ) : (
                <Bookmark className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>

          {/* Description */}
          <p className="text-[13px] text-gray-700 leading-relaxed mb-3 line-clamp-2">
            {course.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {course.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 px-2 py-1 rounded text-[11px] text-gray-600"
              >
                {tag}
              </span>
            ))}
            <span className="bg-blue-100 px-2 py-1 rounded text-[11px] text-blue-700">
              {course.level}
            </span>
          </div>

          {/* Schedule & Details */}
          <div className="grid grid-cols-3 gap-4 text-[12px]">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <div>
                <div>{course.schedule[0].day}</div>
                <div className="text-[11px]">{course.schedule[0].time}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <div className="truncate">{course.schedule[0].location}</div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <div>
                <div>{availableSeats} seats left</div>
                <div className="w-full bg-gray-200 h-1 rounded mt-1">
                  <div
                    className={`h-full rounded ${
                      fillPercentage > 90
                        ? "bg-red-500"
                        : fillPercentage > 70
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${fillPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Stats & Action */}
        <div className="flex flex-col items-end gap-3 min-w-[120px]">
          <div className="text-right">
            <div className="text-[11px] text-gray-500 mb-1">Avg Workload</div>
            <div className="text-[13px]">{course.avgWorkload}</div>
          </div>

          <button
            onClick={() => onSelect(course)}
            className="flex items-center gap-1 text-[#a3001c] hover:text-[#8a0017] text-[13px] mt-auto"
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Evaluation Preview */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-[12px]">
          <div className="flex gap-4">
            <div>
              <span className="text-gray-500">Course Quality:</span>
              <span className="ml-2 text-green-600">
                ★ {(course.rating * 0.95).toFixed(1)}/5.0
              </span>
            </div>
            <div>
              <span className="text-gray-500">Instructor Rating:</span>
              <span className="ml-2 text-green-600">
                ★ {(course.rating * 1.02).toFixed(1)}/5.0
              </span>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800">
            Read {course.reviewCount} reviews →
          </button>
        </div>
      </div>
    </div>
  );
}

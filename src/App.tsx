import { useState } from "react";
import {
  Search,
  Star,
  Calendar,
  Filter,
  BookOpen,
  Clock,
  Users,
  X,
  ChevronDown,
  Download,
  Share2,
  Bell,
} from "lucide-react";
import svgPaths from "./imports/svg-uik8j3ddwi";
import imgDivEmptySpace from "figma:asset/2705201b4ba07c5335148848c7e2795118b40aee.png";
import { CourseCard } from "./components/CourseCard";
import { ScheduleView } from "./components/ScheduleView";
import { IntegrationPanel } from "./components/IntegrationPanel";

type ViewMode = "list" | "schedule";
const sampleCourses = [
  {
    id: "EEPS1670",
    code: "EEPS 1670",
    title: "Time Series Analysis & Modeling in Climate Sciences",
    term: "Fall 2025",
    instructor: "Prof. Emanuele Di Lorenzo",
    description:
      "This course introduces students to time series statistical analysis and modeling, with applications to climate and environmental sciences.",
    rating: 4.6,
    reviewCount: 42,
    schedule: [
      { day: "TTh", time: "2:30-3:50 PM", location: "Geo Sciences (TBD)" },
    ],
    department: "Earth, Environmental and Planetary Sciences",
    level: "Advanced",
    prerequisites: ["MATH 0520", "EEPS 0220"],
    tags: ["Quantitative", "Research Methods", "Climate Science"],
    enrolled: 18,
    capacity: 25,
    avgWorkload: "8-10 hrs/week",
  },
  {
    id: "BHBR0100",
    code: "BHBR 0100",
    title: "Introduction to Biblical Hebrew",
    term: "Fall 2025",
    instructor: "Staff",
    description:
      "An intensive introduction to Biblical Hebrew for students with no prior knowledge, focusing on grammar, vocabulary, and reading biblical texts.",
    rating: 4.8,
    reviewCount: 67,
    schedule: [
      { day: "TTh", time: "1:00-2:20 PM", location: "Classroom (TBD)" },
    ],
    department: "Judaic Studies",
    level: "Introductory",
    prerequisites: [],
    tags: ["Language", "Religious Studies", "Writing Intensive"],
    enrolled: 22,
    capacity: 24,
    avgWorkload: "6-8 hrs/week",
  },
  {
    id: "MUSC0630",
    code: "MUSC 0630",
    title: "Jazz Band",
    term: "Fall 2025",
    instructor: "Prof. Timo Vollbrecht",
    description:
      "A performance-based ensemble course focusing on classic and contemporary jazz repertoire, improvisation, and ensemble playing. Open to instrumentalists by audition.",
    rating: 4.9,
    reviewCount: 89,
    schedule: [
      { day: "Th", time: "7:30-8:50 PM", location: "Orwig (Ensemble Room)" },
    ],
    department: "Music",
    level: "All Levels",
    prerequisites: ["Audition required"],
    tags: ["Performance", "Creative", "Community-Based"],
    enrolled: 16,
    capacity: 20,
    avgWorkload: "4-6 hrs/week",
  },
  {
    id: "IAPA1802D",
    code: "IAPA 1802D",
    title: "The Environmental Movement in Comparative Perspective",
    term: "Fall 2025",
    instructor: "Prof. Jennifer Hadden",
    description:
      "Examines environmental movements across countries and regions, focusing on political, social, and cultural factors shaping activism and policy.",
    rating: 4.5,
    reviewCount: 34,
    schedule: [
      { day: "MW", time: "2:30-3:50 PM", location: "Watson Institute (TBD)" },
    ],
    department: "International and Public Affairs",
    level: "Intermediate",
    prerequisites: ["IAPA 1000 or instructor permission"],
    tags: ["Policy", "Global Studies", "Writing Intensive"],
    enrolled: 28,
    capacity: 30,
    avgWorkload: "10-12 hrs/week",
  },
  {
    id: "TAPS0030",
    code: "TAPS 0030",
    title: "Introduction to Acting and Directing",
    term: "Fall 2025",
    instructor: "Prof. Connie Crawford",
    description:
      "Hands-on exploration of fundamental acting and directing techniques through scene work, character development, and ensemble collaboration.",
    rating: 4.7,
    reviewCount: 56,
    schedule: [
      { day: "TTh", time: "9:30-11:50 AM", location: "Lyman Hall (CAVE)" },
    ],
    department: "Theatre Arts and Performance Studies",
    level: "Introductory",
    prerequisites: [],
    tags: ["Creative", "Performance", "Collaborative"],
    enrolled: 20,
    capacity: 22,
    avgWorkload: "7-9 hrs/week",
  },

  // NEW SAMPLE COURSES

  {
    id: "CSCI0150",
    code: "CSCI 0150",
    title: "Introduction to Object-Oriented Programming and Computer Science",
    term: "Fall 2025",
    instructor: "Prof. Andries van Dam",
    description:
      "Introductory computer science course emphasizing object-oriented design, Java programming, and problem-solving for students with prior programming experience.",
    rating: 4.4,
    reviewCount: 190,
    schedule: [
      { day: "TTh", time: "2:30-3:50 PM", location: "Salomon Center DECI" },
    ],
    department: "Computer Science",
    level: "Introductory",
    prerequisites: ["Some prior programming experience recommended"],
    tags: ["Quantitative", "Programming", "Problem-Solving"],
    enrolled: 140,
    capacity: 160,
    avgWorkload: "10-12 hrs/week",
  },
  {
    id: "ENVS0490",
    code: "ENVS 0490",
    title: "Environmental Science in a Changing World",
    term: "Fall 2025",
    instructor: "Prof. Andrew Kartzinel",
    description:
      "Introduces core concepts in environmental science, including climate systems, ecosystems, and human impacts, using interdisciplinary case studies.",
    rating: 4.6,
    reviewCount: 78,
    schedule: [
      { day: "TTh", time: "10:30-11:50 AM", location: "MacMillan Hall (TBD)" },
    ],
    department: "Institute at Brown for Environment and Society",
    level: "Introductory",
    prerequisites: [],
    tags: ["Climate Science", "Sustainability", "STEM"],
    enrolled: 85,
    capacity: 95,
    avgWorkload: "7-9 hrs/week",
  },
  {
    id: "ECON1110",
    code: "ECON 1110",
    title: "Intermediate Microeconomics",
    term: "Fall 2025",
    instructor: "Staff",
    description:
      "Covers consumer and firm behavior, market equilibrium, welfare analysis, and market failures using calculus-based microeconomic models.",
    rating: 4.3,
    reviewCount: 120,
    schedule: [
      { day: "TTh", time: "1:00-2:20 PM", location: "Salomon Center (TBD)" },
    ],
    department: "Economics",
    level: "Intermediate",
    prerequisites: ["ECON 0110", "MATH 0090 or equivalent"],
    tags: ["Quantitative", "Theory", "Social Science"],
    enrolled: 95,
    capacity: 110,
    avgWorkload: "9-11 hrs/week",
  },
  {
    id: "CPSY0700",
    code: "CPSY 0700",
    title: "Social Psychology",
    term: "Fall 2025",
    instructor: "Staff",
    description:
      "Explores how individuals think about, influence, and relate to one another, covering attitudes, conformity, group processes, prejudice, and prosocial behavior.",
    rating: 4.7,
    reviewCount: 150,
    schedule: [{ day: "TTh", time: "1:00-2:20 PM", location: "Metcalf (TBD)" }],
    department: "Cognitive, Linguistic and Psychological Sciences",
    level: "Intermediate",
    prerequisites: ["CLPS 0010 or instructor permission"],
    tags: ["Social Science", "Research Methods", "Writing Intensive"],
    enrolled: 120,
    capacity: 130,
    avgWorkload: "6-8 hrs/week",
  },
  {
    id: "HIST1976A",
    code: "HIST 1976A",
    title: "Race, Inequality, and American Democracy",
    term: "Fall 2025",
    instructor: "Staff",
    description:
      "Advanced seminar on the history of race, inequality, and democratic institutions in the United States, emphasizing primary sources and independent research.",
    rating: 4.8,
    reviewCount: 32,
    schedule: [
      {
        day: "W",
        time: "3:00-5:30 PM",
        location: "History Seminar Room (TBD)",
      },
    ],
    department: "History",
    level: "Advanced",
    prerequisites: ["At least one 1000-level History course or permission"],
    tags: ["Writing Intensive", "Research Seminar", "Ethics and Society"],
    enrolled: 14,
    capacity: 18,
    avgWorkload: "12-14 hrs/week",
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [selectedCourse, setSelectedCourse] = useState<
    (typeof sampleCourses)[0] | null
  >(null);
  const [savedCourses, setSavedCourses] = useState<string[]>([]);
  const [showIntegrations, setShowIntegrations] = useState(false);

  const toggleSaveCourse = (courseId: string) => {
    setSavedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const filteredCourses = sampleCourses.filter((course) => {
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesDept =
      selectedDepartment === "All Departments" ||
      course.department === selectedDepartment;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;

    return matchesSearch && matchesDept && matchesLevel;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 w-full bg-[#3a1c1b] h-[41px] flex items-center px-4 justify-between z-50">
        <div className="flex items-center gap-4">
          <button className="text-white">
            <svg
              className="w-4 h-5"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 19"
            >
              <path d={svgPaths.p942d380} fill="white" />
            </svg>
          </button>
          <span className="text-white text-[15.8px]">COURSES @ BROWN</span>
        </div>
        <button className="text-white flex items-center gap-2 text-[13px]">
          <svg
            className="w-[14px] h-4"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 16"
          >
            <path d={svgPaths.p1975d80} fill="white" />
          </svg>
          Sign In
        </button>
      </div>

      <div
        className="grid grid-cols-[334px_1fr] flex-1"
        style={{ marginTop: 41 }}
      >
        {/* Left Sidebar (fixed) */}
        <aside
          className="fixed left-0 top-[41px] w-[334px] bg-[#eeece7] border-r border-[#f4f4f4] flex flex-col overflow-y-auto z-10"
          style={{ height: "calc(100vh - 41px)" }}
        >
          {/* Search Panel */}
          <div className="bg-[#a3001c] px-3 py-3">
            <h2 className="text-white text-[23.6px]">Course Search</h2>
          </div>

          <div className="p-3 space-y-4">
            {/* Main Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, tags..."
                className="w-full pl-9 pr-3 py-2 border border-[#66afe9] rounded shadow-[0px_0px_8px_0px_rgba(102,175,233,0.6)] text-[13px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Filters */}
            <select
              className="w-full px-3 py-2 border border-[#cccccc] rounded bg-white text-[13px] text-[#555555]"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option>All Departments</option>
              <option>Earth, Environmental and Planetary Sciences</option>
              <option>Judaic Studies</option>
              <option>Music</option>
              <option>International and Public Affairs</option>
              <option>Theatre Arts and Performance Studies</option>
            </select>

            <select
              className="w-full px-3 py-2 border border-[#cccccc] rounded bg-white text-[13px] text-[#555555]"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option>All Levels</option>
              <option>Introductory</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="w-full flex items-center justify-between px-3 py-2 bg-[#aba69a] text-white rounded text-[14px]"
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Advanced Filters
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  showAdvancedFilters ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div className="space-y-3 p-3 bg-white rounded border border-[#cccccc]">
                <label className="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>WRIT-Designated</span>
                </label>
                <label className="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>First Year Seminar</span>
                </label>
                <label className="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Highly Rated Instructor (4.0+)</span>
                </label>
                <label className="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Highly Rated Course (4.0+)</span>
                </label>
                <label className="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Open Seats Available</span>
                </label>
              </div>
            )}

            <button className="w-full bg-[#a3001c] text-white py-2 rounded text-[14px] uppercase">
              Find Courses
            </button>
          </div>

          {/* Recommendations */}
          <div className="mt-4">
            <div className="bg-[#aba69a] px-2 py-2">
              <h3 className="text-white text-[14px]">RECOMMENDED FOR YOU</h3>
            </div>
            <div className="p-3 space-y-2">
              <div className="text-[12px] text-gray-600 mb-2">
                Based on your concentration and interests
              </div>
              <button className="w-full bg-white border-2 border-[#a10311] text-[#a10311] py-2 px-3 rounded text-[12px] text-left hover:bg-[#a10311] hover:text-white transition-colors">
                📚 Courses in My Concentration
              </button>
              <button className="w-full bg-[#a3001c] text-white py-2 px-3 rounded text-[12px] text-left hover:bg-[#8a0017] transition-colors">
                ⭐ Similar to Saved Courses
              </button>
              <button className="w-full bg-[#a3001c] text-white py-2 px-3 rounded text-[12px] text-left hover:bg-[#8a0017] transition-colors">
                🎯 Match My Schedule Preferences
              </button>
            </div>
          </div>

          {/* My Cart */}
          <div className="mt-4">
            <div className="bg-[#aba69a] px-2 py-2">
              <h3 className="text-white text-[14px]">
                MY CART ({savedCourses.length})
              </h3>
            </div>
            <div className="p-3">
              <button className="w-full bg-[#a3001c] text-white py-2 rounded text-[14px] uppercase">
                View My Cart
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="flex flex-col min-h-0 col-start-2 pt-[41px]"
          style={{ marginLeft: "334px" }}
        >
          {/* Hero Section */}
          <div
            className="relative h-[200px] bg-cover bg-center"
            style={{ backgroundImage: `url(${imgDivEmptySpace})` }}
          >
            <div className="absolute inset-0 bg-black/60">
              <div className="max-w-6xl mx-auto px-8 py-8">
                <h1 className="text-white text-[40px] mb-2">
                  Welcome to Courses @ Brown
                </h1>
                <p className="text-white text-[13px]">
                  Please visit our brief{" "}
                  <span className="underline text-[#dddddd]">tutorial</span> for
                  information on using this site.
                </p>
                <p className="text-[#dddddd] text-[13px] underline mt-1">
                  Supported systems
                </p>
              </div>
            </div>
          </div>

          {/* View Controls & Integration */}
          <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  viewMode === "list"
                    ? "bg-[#a3001c] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                List View
              </button>
              <button
                onClick={() => setViewMode("schedule")}
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  viewMode === "schedule"
                    ? "bg-[#a3001c] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Schedule View
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowIntegrations(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                <Share2 className="w-4 h-4" />
                Integrations
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                <Bell className="w-4 h-4" />
                Alerts
              </button>
            </div>
          </div>

          {/* Results Info */}
          <div className="px-8 py-3 bg-gray-50 border-b border-gray-200">
            <p className="text-[14px] text-gray-700">
              Showing{" "}
              <span className="font-semibold">{filteredCourses.length}</span>{" "}
              courses
              {searchQuery && <span> matching "{searchQuery}"</span>}
            </p>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto px-8 py-6 min-h-0">
            {viewMode === "list" ? (
              <div className="space-y-4 max-w-5xl">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onSelect={setSelectedCourse}
                    isSaved={savedCourses.includes(course.id)}
                    onToggleSave={toggleSaveCourse}
                  />
                ))}
              </div>
            ) : (
              <ScheduleView
                courses={filteredCourses.filter((c) =>
                  savedCourses.includes(c.id)
                )}
              />
            )}
          </div>
        </main>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#a3001c] text-white p-6 flex justify-between items-start">
              <div>
                <h2 className="text-[28px] mb-1">{selectedCourse.code}</h2>
                <h3 className="text-[20px] opacity-90">
                  {selectedCourse.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-white hover:bg-white/20 p-2 rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Rating & Enrollment */}
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-[18px]">{selectedCourse.rating}</span>
                  <span className="text-gray-500 text-[14px]">
                    ({selectedCourse.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-[14px]">
                    {selectedCourse.enrolled}/{selectedCourse.capacity} enrolled
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-[14px]">
                    {selectedCourse.avgWorkload}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-[16px] mb-2">Course Description</h4>
                <p className="text-gray-700 text-[14px] leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500 text-[12px] mb-1">
                    Instructor
                  </div>
                  <div className="text-[14px]">{selectedCourse.instructor}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-[12px] mb-1">
                    Department
                  </div>
                  <div className="text-[14px]">{selectedCourse.department}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-[12px] mb-1">Level</div>
                  <div className="text-[14px]">{selectedCourse.level}</div>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h4 className="text-[16px] mb-2">Schedule</h4>
                {selectedCourse.schedule.map((s, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded text-[14px]">
                    <div>
                      {s.day}: {s.time}
                    </div>
                    <div className="text-gray-600">{s.location}</div>
                  </div>
                ))}
              </div>

              {/* Prerequisites */}
              {selectedCourse.prerequisites.length > 0 && (
                <div>
                  <h4 className="text-[16px] mb-2">Prerequisites</h4>
                  <div className="text-[14px] text-gray-700">
                    {selectedCourse.prerequisites.join(", ")}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="text-[16px] mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 px-3 py-1 rounded-full text-[12px] text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Student Reviews Summary */}
              <div>
                <h4 className="text-[16px] mb-3">Student Reviews</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                    <p className="text-[13px] italic">
                      "Excellent course with engaging lectures and challenging
                      but fair assignments. Professor is very approachable."
                    </p>
                    <p className="text-[11px] text-gray-600 mt-1">
                      - Anonymous Student, Spring 2024
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                    <p className="text-[13px] italic">
                      "Great hands-on experience. Workload is manageable and you
                      learn a lot."
                    </p>
                    <p className="text-[11px] text-gray-600 mt-1">
                      - Anonymous Student, Fall 2023
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  onClick={() => {
                    toggleSaveCourse(selectedCourse.id);
                  }}
                  className={`flex-1 py-3 rounded text-[14px] ${
                    savedCourses.includes(selectedCourse.id)
                      ? "bg-gray-200 text-gray-700"
                      : "bg-[#a3001c] text-white"
                  }`}
                >
                  {savedCourses.includes(selectedCourse.id)
                    ? "Remove from Cart"
                    : "Add to Cart"}
                </button>
                <button className="flex-1 py-3 rounded border-2 border-[#a3001c] text-[#a3001c] text-[14px]">
                  View Syllabus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Integration Panel */}
      {showIntegrations && (
        <IntegrationPanel onClose={() => setShowIntegrations(false)} />
      )}
    </div>
  );
}

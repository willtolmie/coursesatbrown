import {
  X,
  Calendar,
  Newspaper,
  Link2,
  Download,
  Bell,
  CheckCircle2,
} from "lucide-react";

interface IntegrationPanelProps {
  onClose: () => void;
}

export function IntegrationPanel({ onClose }: IntegrationPanelProps) {
  const integrations = [
    {
      name: "Critical Review",
      icon: Newspaper,
      description: "View student reviews for courses",
      status: "connected",
      action: "Enabled",
    },
    {
      name: "Google Calendar",
      icon: Calendar,
      description: "Sync your course schedule with Google Calendar",
      status: "available",
      action: "Connect",
    },
    {
      name: "ASK",
      icon: CheckCircle2,
      description: "Check concentration requirements and progress",
      status: "available",
      action: "Connect",
    },
    {
      name: "Canvas",
      icon: Link2,
      description: "View course materials and assignments",
      status: "available",
      action: "Connect",
    },
    {
      name: "Course Alerts",
      icon: Bell,
      description: "Get notified about seat availability",
      status: "available",
      action: "Enable",
    },
    {
      name: "Export to PDF",
      icon: Download,
      description: "Download your schedule as PDF",
      status: "available",
      action: "Export",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#a3001c] text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-[24px]">Platform Integrations</h2>
            <p className="text-[14px] opacity-90 mt-1">
              Connect with other services to enhance your experience
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid gap-4">
            {integrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <div
                  key={integration.name}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 flex-1">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-[16px]">{integration.name}</h3>
                          {integration.status === "connected" && (
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[11px]">
                              Connected
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-gray-600">
                          {integration.description}
                        </p>
                      </div>
                    </div>
                    <button
                      className={`px-4 py-2 rounded text-[13px] whitespace-nowrap ml-4 ${
                        integration.status === "connected"
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-[#a3001c] text-white hover:bg-[#8a0017]"
                      }`}
                    >
                      {integration.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-[14px] mb-2">🔒 Privacy & Security</h4>
            <p className="text-[12px] text-gray-700">
              Your data is encrypted and never shared without your permission.
              You can disconnect any integration at any time.
            </p>
          </div>

          {/* Tips */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-[14px] mb-2">💡 Tips</h4>
            <ul className="space-y-1 text-[12px] text-gray-700">
              <li>
                • Connect Google Calendar to get automatic reminders for classes
              </li>
              <li>
                • Enable Course Alerts to know when seats become available
              </li>
              <li>• Export to PDF to share your schedule with advisors</li>
              <li>
                • Check Degree Works regularly to track concentration
                requirements
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

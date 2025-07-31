import { CheckCircle2, XCircle } from "lucide-react"
import { validatePassword } from "@/src/lib/auth-utils"

// Password Requirements Component
export default function PasswordRequirements({ password }) {
  const requirements = validatePassword(password)

  return (
    <div className="mt-3 p-3 bg-gray-100 rounded-md text-sm">
      <h4 className="font-semibold text-gray-800 mb-2">Password Requirements:</h4>
      <ul className="space-y-1">
        {requirements.map((req, index) => (
          <li key={index} className={`flex items-center gap-2 ${req.fulfilled ? "text-green-600" : "text-red-500"}`}>
            {req.fulfilled ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            <span>{req.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

"use client";

import { useFormStatus } from "react-dom";
import { addProject } from "../actions";
import { useActionState } from "react";

// Helper component for the Submit button (uses useFormStatus)
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending} // Disables the button while 'pending' is true
      className="bg-gray-800 text-white font-medium py-2 px-4 rounded mt-4 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Saving and Checking..." : "Add Project"}
    </button>
  );
}

export default function AddProjectPage() {
  // 1. Define initial state for useFormState
  const initialState = { message: null };

  // 2. Bind the Server Action to useFormState
  // state stores what addProject returns (ex: { message: 'Error...' })
  const [state, formAction] = useActionState(addProject, initialState);

  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md my-10 h-full max-w-fit max-sm:max-w-full mx-auto max-sm:my-0 max-sm:rounded-none">
      {/* 3. Use formAction in action attribute */}
      <form action={formAction}>
        <div className="flex flex-row gap-20 max-sm:flex-col items-center max-sm:gap-6">
          {/* AUTHENTICATION FIELDS */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold mt-4 border-b pb-2">
              🔑 Admin Access
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="admin_user" className="font-medium text-sm">
                Admin User
              </label>
              <input
                type="text"
                id="admin_user"
                name="admin_user" // ⬅️ NAME REQUIRED FOR THE ACTION
                required
                className="bg-white text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="admin_pass" className="font-medium text-sm">
                Admin Password
              </label>
              <input
                type="password"
                id="admin_pass"
                name="admin_pass" // ⬅️ NAME REQUIRED FOR THE ACTION
                required
                className="bg-white text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* PROJECT DATA FIELDS */}
            <h2 className="text-lg font-semibold mt-4 border-b pb-2">
              📋 Project Data
            </h2>

            {/* PROJECT DATA FIELDS (original) */}
            {/* ... (Your title, desc, url, stack fields) ... */}

            {/* TITLE */}
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="font-medium text-sm">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="bg-white text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-2">
              <label htmlFor="desc" className="font-medium text-sm">
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                required
                rows="4"
                className="bg-white text-gray-800 border-2 border-gray-700 rounded px-3 py-2 resize-none outline-none"
              ></textarea>
            </div>

            {/* URL */}
            <div className="flex flex-col gap-2">
              <label htmlFor="url" className="font-medium text-sm">
                URL
              </label>
              <input
                type="text"
                id="url"
                name="url"
                className="bg-white text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
              />
            </div>

            {/* STACK */}
            <div className="flex flex-col gap-2">
              <label htmlFor="stack" className="font-medium text-sm">
                Stack Used (separate by comma)
              </label>
              <input
                type="text"
                id="stack"
                name="stack"
                required
                className="bg-white text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
              />
            </div>

            <SubmitButton />

            {/* 4. Display Error/Success Messages */}
            {state.message && (
              <p
                className={`font-bold mt-2 ${
                  state.message.startsWith("🚨")
                    ? "text-red-600" // Color for authentication or DB error
                    : "text-green-600" // Color for success (if you change the action to return success)
                }`}
              >
                {state.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

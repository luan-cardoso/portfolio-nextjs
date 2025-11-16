import { addProject } from "../actions";

export default function AddProjectPage() {
  return (
    <div className="bg-[var(--white)] text-gray-800 p-8 rounded-lg shadow-md my-10 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <form action={addProject}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-medium text-sm">Título</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              required 
              className="bg-[var(--white)] text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="desc" className="font-medium text-sm">Descrição</label>
            <textarea 
              id="desc" 
              name="desc" 
              required 
              className="bg-[var(--white)] text-gray-800 border-2 border-gray-700 rounded px-3 py-2 resize-none outline-none"
              rows="4"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="font-medium text-sm">URL</label>
            <input 
              type="text" 
              id="url" 
              name="url" 
              className="bg-[var(--white)] text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="stack" className="font-medium text-sm">Stack Utilizada (separe por vírgula)</label>
            <input 
              type="text" 
              id="stack" 
              name="stack" 
              required 
              className="bg-[var(--white)] text-gray-800 border-2 border-gray-700 rounded px-3 py-2 outline-none"
            />
          </div>
          <button 
            type="submit" 
            className="bg-[var(--gray)] text-[var(--white)] font-medium py-2 px-4 rounded mt-4 hover:bg-gray-700 transition-colors"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
}

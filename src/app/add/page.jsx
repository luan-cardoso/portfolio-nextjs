import { addProject } from "../actions"

export default function AddProjectPage() { 
    return (
        <div className="bg-white text-gray-950 p-6 rounded-lg shadow-md mt-10 w-fit">
            <h1>Add New Project</h1>
            <form action={addProject}>
                <div>
                    <div>
                        <label htmlFor="title">Título</label>
                        <input type="text" id="title" name="title" required />
                    </div>
                    <div>
                        <label htmlFor="desc">Descrição</label>
                        <textarea id="desc" name="desc" required></textarea>
                    </div>
                    <div>
                        <label htmlFor="url">URL</label>
                        <input type="text" id="url" name="url"/>
                    </div>
                    <div>
                        <label htmlFor="stack">Stack Utilizada (separe por vírgula)</label>
                        <input type="text" id="stack" name="stack" required />
                    </div>
                    <button type="submit">Add Project</button>
                </div>
            </form>
        </div>
    )
}

import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

// Function to get all projects from the database
export async function getAllProjects() {
  try {
    const client = await clientPromise;
    const db = client.db("projetos_db");

    const projects_collection = db.collection("projects_collection");
    //Find all projects and convert to array
    const projects = await projects_collection.find({}).toArray();

    // Convert _id from ObjectId to string for serialization
    const serializableProjects = projects.map((project) => ({
      ...project,
      _id: project._id.toString(),
      createdAt: project.createdAt ? project.createdAt.toISOString() : null,
    }));

    return serializableProjects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

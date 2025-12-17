"use server";

import clientPromise from "../../lib/mongodb";
import { redirect } from "next/navigation";

export async function addProject(prevState, formData) {
  // login logic
  const submittedUser = formData.get("admin_user");
  const submittedPass = formData.get("admin_pass");

  // compare
  if (
    submittedUser !== process.env.ADMIN_USER ||
    submittedPass !== process.env.ADMIN_PASS
  ) {
    return {
      message: "🚨 Falha na autenticação: Usuário ou senha incorretos.",
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db("projetos_db"); // name of database

    // Process stack input into an array
    const stackString = formData.get("stack") || "";
    const stackArray = stackString
      ? stackString
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0)
      : [];

    const newProject = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      url: formData.get("url"),
      stack: stackArray,
    };

    //insert new project into "projects_collection" collection
    await db.collection("projects_collection").insertOne(newProject);
  } catch (error) {
    console.error("Failed to add project:", error);
  }

  redirect("/");
}

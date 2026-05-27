"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import clientPromise from "../../../shared/lib/mongodb";

export async function addProject(prevState, formData) {
  const submittedUser = formData.get("admin_user");
  const submittedPass = formData.get("admin_pass");

  if (
    submittedUser !== process.env.ADMIN_USER ||
    submittedPass !== process.env.ADMIN_PASS
  ) {
    return {
      message: "🚨 Falha na autenticação: usuário ou senha incorretos.",
    };
  }

  const title = formData.get("title")?.toString().trim();
  const desc = formData.get("desc")?.toString().trim();
  const url = formData.get("url")?.toString().trim() || "";
  const clientOrCompany =
    formData.get("clientOrCompany")?.toString().trim() || "";
  const stackString = formData.get("stack")?.toString().trim() || "";

  if (!title || !desc || !stackString) {
    return {
      message: "🚨 Preencha título, descrição e stack antes de salvar.",
    };
  }

  const stackArray = stackString
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  if (stackArray.length === 0) {
    return {
      message: "🚨 Informe ao menos uma tecnologia na stack.",
    };
  }

  try {
    const client = await clientPromise;
    const db = client.db("projetos_db");

    const newProject = {
      title,
      desc,
      url,
      clientOrCompany,
      stack: stackArray,
      createdAt: new Date(),
    };

    const result = await db
      .collection("projects_collection")
      .insertOne(newProject);

    if (!result.acknowledged) {
      return {
        message: "🚨 Não foi possível salvar o projeto no banco de dados.",
      };
    }
  } catch (error) {
    console.error("Failed to add project:", error);

    return {
      message:
        "🚨 Erro ao salvar o projeto. Verifique o MongoDB e tente novamente.",
    };
  }

  revalidatePath("/");
  revalidatePath("/add");
  redirect("/");
}

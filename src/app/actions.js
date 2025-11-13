'use server';

import clientPromise from '../../lib/mongodb';
import { redirect } from 'next/navigation';

export async function addProject(formData) {
    try {
        const client = await clientPromise;
        const db = client.db("projetos_db"); // name of database

        // Process stack input into an array
        const stackString = formData.get('stack') || '';
        const stackArray = stackString 
        ? stackString.split(',').map(s => s.trim()).filter(s => s.length > 0) 
        : [];

        const newProject = {
            title: formData.get('title'),
            desc: formData.get('desc'),
            url: formData.get('url'),
            stack: stackArray,
        };

        //insert new project into "projects_collection" collection
        const result = await db.collection("projects_collection").insertOne(newProject);

    } catch (error) {
        console.error("Failed to add project:", error);
    }

    redirect('/');
 }
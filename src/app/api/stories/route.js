import clientPromise from "@/lib/mongodb";

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db("stories-stack");

        const stories = await db.collection("stories").find().toArray();

        return Response.json(stories);
    } catch (err) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db("stories-stack");

        const result = await db.collection("stories").insertOne(body);

        return Response.json({ insertedId: result.insertedId });
    } catch (err) {
        return Response.json({ error: err.message }, { status: 500 });
    }
}

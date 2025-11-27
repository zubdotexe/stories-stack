import clientPromise from "@/lib/mongodb";

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db("stories-stack");

        const { searchParams } = new URL(request.url);

        const limit = Number(searchParams.get("limit")) || 0;

        let query = db.collection("stories").find();

        if (limit > 0) {
            query = query.limit(limit);
        }

        const stories = await query.toArray();

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

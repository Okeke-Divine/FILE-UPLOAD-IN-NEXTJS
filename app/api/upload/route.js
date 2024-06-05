import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import {join} from "path"

export const POST = async (request) => {
    const data = await request.formData()
    const file = data.get('file')

    if (!file) {
        NextResponse.json({ success: false })
        console.log("File does not exist")
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join('/', 'tmp', file.name)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return NextResponse.json({ success: true })
}
import { writeFile } from "fs/promises"
import {join} from "path"

const Server = () => {

    async function upload (data) {
        "use server"
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
    
    }

  return (
    <>
    <form action={upload}>
        <h1>Server Component</h1>
        <input
          type="file"
          name="file"
        /><br />
        <input type="submit" value="Upload" className="bg-blue-500 text-white rounded p-2 mt-2" />
      </form>
    </>
    )
}

export default Server
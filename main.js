// main.js
import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req) => {
  return serveDir(req, {
    // index.html が入っているフォルダを直接指定します
    fsRoot: "./tmp/build/src", 
    showDirListing: false,
  });
});

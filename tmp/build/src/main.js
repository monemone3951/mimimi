// main.js
// GitHubの中にあるすべてのファイル（HTML/CSS/JS）をそのままブラウザに届けるプログラム

import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: ".",          // リポジトリのルートフォルダを対象にする
    showDirListing: false, // フォルダのファイル一覧は見せない
  });
});
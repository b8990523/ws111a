import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(body) {
  return `<html>
  <head>
  <style>
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
  console.log('ctx.request.url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname.startsWith("/login")) {
    ctx.response.body = page(`
       <form action="form.html" method="post">
         <p>帳號</p>
         <input type="email" name="email" value="xxxx@gmail.com" placeholder="請輸入您的電子信箱"/>
         <p>密碼</p>
         <input type="password" name="password" placeholder="請輸入密碼"/>
      
         <div class = "bottom">
          <br>
          <button class="btn" id="sign_in" onclick="location.href='http://127.0.0.1:8000'">
            登入
         </div>
        </form>
    `)
  } 
  else 
  {
    ctx.response.body = page(` 
    <h1>歡迎!</h1>
    `)  
  }
  // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
});
console.log('start at : http://127.0.0.1:8000/login')
await app.listen({ port: 8000 });

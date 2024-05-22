export const indexHTML = (authURL) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>JS Auth Google</title>
      <meta name="description" content="Auth Google" />
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KPHBhdGggZD0iTTAgMCBDMS4xNjUzMTI1IC0wLjAwMTI4OTA2IDIuMzMwNjI1IC0wLjAwMjU3ODEyIDMuNTMxMjUgLTAuMDAzOTA2MjUgQzQuNzU4NDM3NSAtMC4wMDAwMzkwNiA1Ljk4NTYyNSAwLjAwMzgyODEzIDcuMjUgMC4wMDc4MTI1IEM5LjA5MDc4MTI1IDAuMDAyMDExNzIgOS4wOTA3ODEyNSAwLjAwMjAxMTcyIDEwLjk2ODc1IC0wLjAwMzkwNjI1IEMxMi43MTY3MTg3NSAtMC4wMDE5NzI2NiAxMi43MTY3MTg3NSAtMC4wMDE5NzI2NiAxNC41IDAgQzE1LjU3NzY1NjI1IDAuMDAxMTI3OTMgMTYuNjU1MzEyNSAwLjAwMjI1NTg2IDE3Ljc2NTYyNSAwLjAwMzQxNzk3IEMyMC4yNSAwLjEzMjgxMjUgMjAuMjUgMC4xMzI4MTI1IDIxLjI1IDEuMTMyODEyNSBDMjEuMzQ5NzE3ODYgMy4wNDczOTUzMiAyMS4zODA4MDU4OSA0Ljk2NTYzNTY3IDIxLjM4MjgxMjUgNi44ODI4MTI1IEMyMS4zODQ3NDYwOSA4LjYzMDc4MTI1IDIxLjM4NDc0NjA5IDguNjMwNzgxMjUgMjEuMzg2NzE4NzUgMTAuNDE0MDYyNSBDMjEuMzgyODUxNTYgMTEuNjQxMjUgMjEuMzc4OTg0MzggMTIuODY4NDM3NSAyMS4zNzUgMTQuMTMyODEyNSBDMjEuMzgwODAwNzggMTUuOTczNTkzNzUgMjEuMzgwODAwNzggMTUuOTczNTkzNzUgMjEuMzg2NzE4NzUgMTcuODUxNTYyNSBDMjEuMzg1NDI5NjkgMTkuMDE2ODc1IDIxLjM4NDE0MDYzIDIwLjE4MjE4NzUgMjEuMzgyODEyNSAyMS4zODI4MTI1IEMyMS4zODE2ODQ1NyAyMi40NjA0Njg3NSAyMS4zODA1NTY2NCAyMy41MzgxMjUgMjEuMzc5Mzk0NTMgMjQuNjQ4NDM3NSBDMjEuMjUgMjcuMTMyODEyNSAyMS4yNSAyNy4xMzI4MTI1IDIwLjI1IDI4LjEzMjgxMjUgQzE4LjMzNTQxNzE4IDI4LjIzMjUzMDM2IDE2LjQxNzE3NjgzIDI4LjI2MzYxODM5IDE0LjUgMjguMjY1NjI1IEMxMy4zMzQ2ODc1IDI4LjI2NjkxNDA2IDEyLjE2OTM3NSAyOC4yNjgyMDMxMiAxMC45Njg3NSAyOC4yNjk1MzEyNSBDOS43NDE1NjI1IDI4LjI2NTY2NDA2IDguNTE0Mzc1IDI4LjI2MTc5Njg4IDcuMjUgMjguMjU3ODEyNSBDNS40MDkyMTg3NSAyOC4yNjM2MTMyOCA1LjQwOTIxODc1IDI4LjI2MzYxMzI4IDMuNTMxMjUgMjguMjY5NTMxMjUgQzIuMzY1OTM3NSAyOC4yNjgyNDIxOSAxLjIwMDYyNSAyOC4yNjY5NTMxMyAwIDI4LjI2NTYyNSBDLTEuMDc3NjU2MjUgMjguMjY0NDk3MDcgLTIuMTU1MzEyNSAyOC4yNjMzNjkxNCAtMy4yNjU2MjUgMjguMjYyMjA3MDMgQy01Ljc1IDI4LjEzMjgxMjUgLTUuNzUgMjguMTMyODEyNSAtNi43NSAyNy4xMzI4MTI1IEMtNi44NDk3MTc4NiAyNS4yMTgyMjk2OCAtNi44ODA4MDU4OSAyMy4yOTk5ODkzMyAtNi44ODI4MTI1IDIxLjM4MjgxMjUgQy02Ljg4NDEwMTU2IDIwLjIxNzUgLTYuODg1MzkwNjIgMTkuMDUyMTg3NSAtNi44ODY3MTg3NSAxNy44NTE1NjI1IEMtNi44ODI4NTE1NiAxNi42MjQzNzUgLTYuODc4OTg0MzcgMTUuMzk3MTg3NSAtNi44NzUgMTQuMTMyODEyNSBDLTYuODc4ODY3MTkgMTIuOTA1NjI1IC02Ljg4MjczNDM4IDExLjY3ODQzNzUgLTYuODg2NzE4NzUgMTAuNDE0MDYyNSBDLTYuODg1NDI5NjkgOS4yNDg3NSAtNi44ODQxNDA2MyA4LjA4MzQzNzUgLTYuODgyODEyNSA2Ljg4MjgxMjUgQy02Ljg4MTY4NDU3IDUuODA1MTU2MjUgLTYuODgwNTU2NjQgNC43Mjc1IC02Ljg3OTM5NDUzIDMuNjE3MTg3NSBDLTYuNjM2MjcyOSAtMS4wNTA3NDc3OCAtNC4wOTM5MTEwNyAwLjAwNDI4NDg5IDAgMCBaICIgZmlsbD0iIzIwMUUxRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC43NSwxLjg2NzE4NzUpIi8+CjxwYXRoIGQ9Ik0wIDAgQy0wLjMxMTA2ODUgMi4wNjI3MTYzOSAtMC42MjM5MTUxNiA0LjEyNTE2NDY2IC0wLjkzNzUgNi4xODc1IEMtMS4xOTg1MzUxNiA3LjkxMDMzMjAzIC0xLjE5ODUzNTE2IDcuOTEwMzMyMDMgLTEuNDY0ODQzNzUgOS42Njc5Njg3NSBDLTEuOTEzNzkzMTMgMTIuNDYzMjUyMTIgLTIuNDIwODIxNjIgMTUuMjI5MzM1ODYgLTMgMTggQy00LjMyIDE4IC01LjY0IDE4IC03IDE4IEMtNi42NyAxNC43IC02LjM0IDExLjQgLTYgOCBDLTYuNjg3MDcwMzEgOC41NTQyOTY4OCAtNy4zNzQxNDA2MyA5LjEwODU5Mzc1IC04LjA4MjAzMTI1IDkuNjc5Njg3NSBDLTguOTgzMDg1OTQgMTAuNDA0MTQwNjMgLTkuODg0MTQwNjMgMTEuMTI4NTkzNzUgLTEwLjgxMjUgMTEuODc1IEMtMTIuMTUyNDgwNDcgMTIuOTUzOTQ1MzEgLTEyLjE1MjQ4MDQ3IDEyLjk1Mzk0NTMxIC0xMy41MTk1MzEyNSAxNC4wNTQ2ODc1IEMtMTguNTUwMjAwOCAxOCAtMTguNTUwMjAwOCAxOCAtMjIgMTggQy0yMiAxNy4wMSAtMjIgMTYuMDIgLTIyIDE1IEMtMTkuODExOTUxNDUgMTMuMDYwNjYwNjIgLTE3LjY0ODM3NDgzIDExLjMwNTY1NTM0IC0xNS4zMTI1IDkuNTYyNSBDLTE0LjA1ODUyNzc4IDguNjA1NTU1MTkgLTEyLjgwNDYyMDQzIDcuNjQ4NTI1MzcgLTExLjU1MDc4MTI1IDYuNjkxNDA2MjUgQy0xMC45NDQ0Mzg0OCA2LjIzNjUyODMyIC0xMC4zMzgwOTU3IDUuNzgxNjUwMzkgLTkuNzEzMzc4OTEgNS4zMTI5ODgyOCBDLTguMTgyMDgyNTIgNC4xMzk1MzI2IC02LjcwMjEwMTQ5IDIuODk5ODA2NzYgLTUuMjMwNDY4NzUgMS42NTIzNDM3NSBDLTMgMCAtMyAwIDAgMCBaICIgZmlsbD0iI0UxNUYyOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcsNykiLz4KPC9zdmc+Cg==">
      <style>
        ${cssPage}
      </style>
    </head>
    <body>
      <section>
        <div class="header">
          <div style="width: 100px; height: 24px">
            <svg
              viewBox="0 0 120 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M68.8751 0L64.3906 23.4146H87.711L92.1955 0H68.8751ZM72.5179 4.42392H86.8522L84.0623 18.9907H69.728L72.5179 4.42392Z"
                fill="#F3652B"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M60.0001 0L55.6094 23.4146H59.9992L64.3899 0H60.0001Z"
                fill="#F3652B"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.3824 0L0.654522 19.9761L0 23.4146H3.41853L21.7987 7.94855L18.8361 23.4146H23.3197L27.8049 0H24.3824Z"
                fill="#F3652B"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M115.516 0L113.526 10.3871L117.148 14.8895L120 0H115.516ZM96.6798 0L92.1953 23.4146H96.6815L99.755 7.36298L112.711 23.4146H115.516L116.069 20.5482L99.4841 0H96.6798Z"
                fill="#F3652B"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.2893 0L31.4419 4.42401H46.9283L28.4682 19.9674L27.8047 23.4146H51.125L51.9724 18.9906H36.4861L54.9502 3.44385L55.6096 0H32.2893Z"
                fill="#F3652B"
              ></path>
            </svg>
          </div>
        </div>
        <div class="content">
          <div class="brand">
            <div class="brand-image">
              <div style="width: 100px; height: 100px">
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                  <path
                    d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="content-info">
              <h4>JS Auth Google</h4>
          </div>
          <div class="content-login">
            <h2 id="content-message"></h2>
            <div id="content-data"></div>
            <div class="controls">
              <div id="button-login" class="button-auth">
                <button onclick="signIn('google')">
                  <img
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="google"
                    width="20"
                    height="20"
                  />
                  Sign In with Google
                </button>
              </div>
              <div id="button-logout" class="button-auth" style="display: none">
                <button onclick="signOut()">
                  <img
                    src="https://authjs.dev/img/providers/google.svg"
                    alt="google"
                    width="20"
                    height="20"
                  />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <a href="https://www.azion.com/en/documentation/" target="_blank">
            <h1>Docs</h1>
            <p>
              Besides providing structure, it allows interactions to occur with
              the surface of the element, thus enabling it to have states.
            </p>
          </a>
          <a href="https://medium.com/aziontech" target="_blank">
            <div>
              <h1>Medium</h1>
              <p>
                Dive deep into our platform's use cases on Medium and join a
                community where developers connect, collaborate, and innovate.
              </p>
            </div>
          </a>
          <a href="https://twitter.com/aziontech" target="_blank">
            <div>
              <h1>X (formerly Twitter)</h1>
              <p>
                Explore our features in-depth and find out what's new on our
                platform.
              </p>
            </div>
          </a>
          <a href="https://discord.gg/Yp9N7RMVZy" target="_blank">
            <div>
              <h1>Discord</h1>
              <p>
                A space for developers to connect, get involved and collaborate.
              </p>
            </div>
          </a>
        </div>
      </section>
      ${scriptPage(authURL)}
    </body>
  </html>
  
  `;
};

const scriptPage = (authURL) => `
<script type="application/javascript" defer>

    window.onload = async () => {
        await sessionUser();
    };

    const dataCRSF = async () => {
        const responseCRSF = await fetch("/api/auth/csrf", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });

        const csrfData = await responseCRSF.json();
        return csrfData;
    };

    const sessionUser = async () => {
        const response = await fetch("/api/auth/session", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (data?.user) {
            document.getElementById("content-message").innerText = "You are logged in!";
            const htmlDataUser = "<div class='avatar'><img src='" + data.user.image + "' width='40' height='40'/> " +
            "<div><h5>" + data?.user?.name +"</h5><p>" + data?.user?.email + "</p></div></div>";
            document.getElementById("content-data").innerHTML = htmlDataUser;
            document.getElementById("content-data").style.display = "block";
            document.getElementById("button-login").style.display = "none";
            document.getElementById("button-logout").style.display = "flex";
        }
        else {
            document.getElementById("content-message").innerText = "You are not logged in!";
            document.getElementById("content-data").style.display = "none";
            document.getElementById("button-login").style.display = "block";
            document.getElementById("button-logout").style.display = "none";
        }
    };

    const signIn = async (provider) => {
        const csrfData = await dataCRSF();
        const response = await fetch("/api/auth/signin/google", {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Auth-Return-Redirect": 1,
            },
            body: new URLSearchParams({
                csrfToken: csrfData.csrfToken,
                callbackUrl: "${authURL}",
            }),
        });
        const data = await response.json();
        const url = data.url ?? "${authURL}";
        window.location.href = url;
    };

    const signOut = async () => {
        const csrfData = await dataCRSF();
        const response = await fetch("/api/auth/signout", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Auth-Return-Redirect": "1",
            },
            body: new URLSearchParams({ csrfToken: csrfData.csrfToken, callbackUrl: "${authURL}" }),
        });
        const data = await response.json();

        if(data.url) {
            window.location.href = data.url;
        }

    };
    
</script>

`;

const cssPage = `
*,*::before,*::after{box-sizing:border-box;margin:0;font-weight:400}body{padding:0;margin:0;background:linear-gradient(180deg,transparent,#1e1e1e) #221f1e;color:#fff;font-family:"Roboto",sans-serif}h1{margin:0;padding:0}a{color:inherit;display:block;border-radius:.25rem;background:#fff0;border:1px solid #363636;transition:background 0.2s,border 0.2s;padding:1.5rem;text-decoration:none;margin-right:0;margin-bottom:1.5rem;max-width:320px;text-align:center}a:last-child{margin-right:0}a:hover{background:rgb(180 185 188 / .15);border:1px solid #36363626}p{margin:0;opacity:.6;font-size:.8rem;line-height:1.5;max-width:40ch}section{display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:2rem}.header{margin-right:auto}.content{display:flex;align-items:center;color:#fff;margin:6rem 0;flex-direction:column;width:80vw}.content::after{content:"";left:50%;position:absolute;filter:blur(45px);transform:translateZ(0);background:conic-gradient(from 180deg at 50% 50%,#502e2233 0deg,#502e2233 55deg,#502e2233 120deg,#502e2233 160deg,transparent 360deg);width:240px;height:180px;z-index:-1}.footer{display:flex;flex-direction:column;justify-content:space-between}.footer h1{font-weight:500;font-size:1.2rem;margin-bottom:.7rem;margin-top:.7rem}.brand{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px}.brand-image{display:flex;justify-content:center;gap:10px}.content-info{display:flex;flex-direction:column;gap:20px;margin-top:20px;align-items:center}h2#content-message{color:#ef6537;font-weight:900;font-size:24pt;text-align:center}.content-login{display:flex;flex-direction:column;gap:20px;margin-top:20px;align-items:center;justify-content:center}.button-auth{display:flex;gap:10px;align-items:center;justify-content:center}.button-auth button{background:#fff;color:#000;border:none;border-radius:5px;padding:10px 20px;font-size:16px;font-weight:600;cursor:pointer;display:flex;justify-content:center;align-items:center}.button-auth button img{margin-right:10px}#content-data .avatar{display:flex;align-items:center}#content-data .avatar img{border-radius:50%;margin-right:10px;border:2px solid #ef6537}#content-data p{margin:0;font-size:13px;font-weight:600}#content-data h5{font-size:16px;font-weight:600}@media only screen and (min-width:576px){section{padding:6rem;min-height:calc(100vh - 15rem)}.footer{flex-direction:row}a{margin-right:2.5rem;margin-bottom:0;text-align:left}}
`;

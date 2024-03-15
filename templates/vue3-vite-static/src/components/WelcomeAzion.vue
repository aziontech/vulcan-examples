<script setup></script>

<template>
  <section>
    <div class="header">
      <img src="../assets/azion.svg" width="100" height="24" />
    </div>
    <div class="content">
      <div class="box">
        <div>
          <img src="../assets/logo-vue.svg" width="90" height="100" />
          <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
        </div>
        <span>+</span>
        <div>
          <img src="../assets/logo-vite.svg" width="100" height="100" />
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener"
            style="color: hsl(257.27deg 100% 72.75%)"
            >Vite</a
          >
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="https://www.azion.com/en/documentation/" target="_blank">
        <h1>Docs</h1>
        <p>
          Besides providing structure, it allows interactions to occur with the
          surface of the element, thus enabling it to have states.
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
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
}

.box div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box div a {
  border: 0;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  margin: 0;
}
</style>

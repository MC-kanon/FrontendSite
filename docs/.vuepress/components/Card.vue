<template>
  <div class="item">
    <div class="content">
      <a href="https://developer.mozilla.org/zh-CN/" target="_blank" rel="noopener noreferrer" title="MDN"
        class="info-box">
        <div class="two-col">
          <div class="img-box"><img src="http://ife.baidu.com/assets/img/link/mdn.png" alt="MDN logo" class="logo"></div>
          <div class="info">
            <span class="sitename">
              MDN
            </span>
            <div class="desc">
              MDN Web Docs 站点提供有关开放 Web 技术的信息，包括用于 Web 站点和渐进式 Web 应用程序的 HTML、CSS 和 API。
            </div>
          </div>
        </div>
      </a>
      <div class="foot">
        <div class="tag">
          <span>前端学习</span>
          <span>社区</span>
        </div>
        <a href="https://github.com/mdn/" target="_blank" rel="noopener" class="button gray has-icon ">
          <svg aria-labelledby="simpleicons-github-dark-icon" lang="" role="img" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" class="github">
            <title id="simpleicons-github-dark-icon" lang="en">GitHub Dark icon</title>
            <path fill="#3eaf7c"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
            </path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    officialLink: String,
    imgSrc: String,
    title: String,
    desc: String,
    githubLink: String,
  }
}
</script>

<style scoped>
.item {
  cursor: pointer;
}

.content {
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  transition: all .3s ease;
}

.content:hover {
  border: 1px solid transparent;
  transform: translateY(-6px);
  box-shadow: 0 2px 16px 0 rgba(27, 35, 47, 0.2);
}

.content:hover .sitename {
  color: #3EAF7C;
}

.info-box {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.img-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
}

.two-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.img-box img {
  cursor: auto;
  margin-right: 1rem;
  border-radius: 5px;
  max-height: 100%;
}

.sitename {
  color: #2C3E50;
  display: block;
  line-height: 3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 700;
}

.desc {
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.8rem;
  color: #495057;
  line-height: 1.875;
  margin-bottom: 2rem;
}

.foot {
  display: flex;
  justify-content: space-between;
}

.foot .tag span {
  background-color: #8154ef;
  font-size: .5rem;
  padding: 0.2rem;
  font-weight: 700;
  border-radius: 3px;
  margin-right: 0.2rem;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, .8);
}

.foot svg {
  width: 1.2em;
  height: 1.2em;
}</style>

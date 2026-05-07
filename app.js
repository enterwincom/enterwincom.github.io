const posts = [
  { title: "Hello Blog", file: "posts/hello.md" },
  { title: "JavaScript Guide", file: "posts/js-guide.md" }
];

const postList = document.getElementById("postList");
const content = document.getElementById("content");

// 리스트 생성
posts.forEach(post => {
  const li = document.createElement("li");
  li.textContent = post.title;
  li.onclick = () => loadPost(post.file);
  postList.appendChild(li);
});

// Markdown 로딩
async function loadPost(file) {
  const res = await fetch(file);
  const markdown = await res.text();

  content.innerHTML = marked.parse(markdown);
}

// 테마 토글
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

// 초기 테마
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}
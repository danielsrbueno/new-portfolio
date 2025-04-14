export default function defineTheme(theme: "light" | "dark") {
  const main = document.querySelector("#main") as HTMLDivElement | null
  if (!main || !theme) return
  if (theme === "light") main.classList.remove("dark")
  else main.classList.add("dark")
}
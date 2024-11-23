export default function randomColor() {
  const randomColors = [
    "bg-red-200",
    "bg-yellow-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-orange-200",
    "bg-cyan-200",
    "bg-lime-200",
    "bg-emerald-200",
    "bg-sky-200",
    "bg-violet-200",
  ]

  return randomColors[
    Math.floor(Math.random() * randomColors.length)
  ]
}

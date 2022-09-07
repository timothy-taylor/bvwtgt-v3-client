export default function Header({ h2, h3 }) {
  return (
    <>
      <h2 className="pt-8">{h2}</h2>
      <h3 className="max-w-md">{h3}</h3>
    </>
  )
}
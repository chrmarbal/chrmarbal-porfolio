export default function SectionKicker({ number, children }) {
  return (
    <div className="section-kicker">
      {number} <span>/ {children}</span>
    </div>
  );
}

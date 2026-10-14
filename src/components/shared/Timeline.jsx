export default function Timeline({ items, internshipLabel }) {
  return (
    <div>
      {items.map((item) => (
        <article className="timeline-item reveal" key={item.title}>
          <span className="timeline-date">{item.date}</span>
          <h4>{item.title}</h4>
          <p className="timeline-company">
            {item.place}
            {item.practice && <span className="practice">{internshipLabel}</span>}
          </p>
          <p className="timeline-description">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

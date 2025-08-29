export default function ServiceCard({ icon, title, desc, cta }) {
  return (
    <div className="card hover:shadow-lg transition">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 mb-3">{desc}</p>
          {cta}
        </div>
      </div>
    </div>
  );
}

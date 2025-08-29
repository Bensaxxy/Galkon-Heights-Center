import { Link } from "react-router-dom";
import { SERVICES } from "../utils/services";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      <section className="section bg-gradient-to-b from-white to-blue-50 border-b border-blue-100">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center items-center gap-4 lg:justify-start lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Your One‑Stop <span className="text-brand">Business Center</span>
            </h1>
            <p className="mt-3 text-gray-600">
              Printing, photocopying, laminating, binding, letterheads — plus
              computer training (3–6 months).
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/request" className="btn-primary">
                Make a Request
              </Link>
              <Link to="/training" className="btn-ghost">
                Want to Training?
              </Link>
            </div>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-3">Popular Services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="p-4 border rounded-xl hover:shadow-sm"
                >
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-gray-600">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-2xl font-bold mb-6">What we offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.name}
                desc={s.desc}
                icon={"📄"}
                cta={
                  <Link className="btn-primary" to={`/request?service=${s.id}`}>
                    Request {s.name}
                  </Link>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

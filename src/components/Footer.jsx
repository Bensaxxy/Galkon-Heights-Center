export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100 bg-white">
      <div className="container-page py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className=" flex items-center gap-2">
            <img src="/logo.png" width={25} />
            <h4 className="font-semibold mb-2">Galkon Heights Center</h4>
          </div>
          <p className="text-gray-600">
            Printing • Photocopy • Laminating • Binding • Letterheads • Training
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-600">+234 810 569 1875</p>
          <p className="text-gray-600">galkon2018@gmail.com</p>
          <p className="text-gray-600">Mon – Fri: 8:00 – 17:30</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Location</h4>
          <p className="text-gray-600">
            A2 (room oo1) Grand Floor, Block C, Near FRSC Office, Phase II,
            Federal Secretariat Complex, Abuja.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Galkon Heights Ltd. Business Center. All
        rights reserved.
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";

declare global {
  interface Window {
    handleData: (data: any) => void;
  }
}

type RSVP = {
  name: string;
  phone: string;
  guests: number;
  attending: string;
};

const Dashboard = () => {
  const [data, setData] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");

    window.handleData = (res: any) => {
      setData(res);
      setLoading(false);
    };

    script.src =
      "https://script.google.com/macros/s/AKfycbw601Z9Wu0cIUEr2SWeMCEex7IGZsvKQ8Z5hGYNcE2pUmCNHiv2pC6BrYdX0XoAcdaI/exec?callback=handleData";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const totalGuests = data.reduce((acc, item) => {
    const g = Number(item.guests);
    return acc + (isNaN(g) ? 0 : g);
  }, 0);

  const attending = data.filter((d) => d.attending === "Yes");
  const notAttending = data.filter((d) => d.attending === "No");

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#5a4a42] px-6 py-10">
      
      {/* Heading */}
      <h1 className="text-4xl text-center font-serif mb-12 tracking-wide">
        Wedding Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Total Guests */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8dfd8] text-center">
          <p className="text-sm uppercase tracking-wider text-[#a08b7d] mb-2">
            Total Guests
          </p>
          <h2 className="text-3xl font-semibold">{totalGuests}</h2>
        </div>

        {/* Attending */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8dfd8] text-center">
          <p className="text-sm uppercase tracking-wider text-[#a08b7d] mb-2">
            Attending
          </p>
          <h2 className="text-3xl font-semibold text-green-600">
            {attending.length}
          </h2>
        </div>

        {/* Not Attending */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8dfd8] text-center">
          <p className="text-sm uppercase tracking-wider text-[#a08b7d] mb-2">
            Not Attending
          </p>
          <h2 className="text-3xl font-semibold text-red-500">
            {notAttending.length}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8dfd8]">
        <h2 className="text-xl font-serif mb-6 text-center">
          Guest List
        </h2>

        {loading ? (
          <p className="text-center text-[#a08b7d]">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              
              <thead>
                <tr className="border-b border-[#e8dfd8] text-[#a08b7d] uppercase text-xs tracking-wider">
                  <th className="py-3 text-left">Name</th>
                  <th className="text-left">Phone</th>
                  <th className="text-left">Guests</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#f1e9e4] hover:bg-[#faf7f4] transition"
                  >
                    <td className="py-3">{item.name}</td>
                    <td>{item.phone || "-"}</td>
                    <td>{item.guests}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          item.attending === "Yes"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.attending}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
export default function Header() {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Welcome, User</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>
    );
  }
  
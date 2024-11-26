import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-4 font-bold text-lg">Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li className="px-4 py-2 hover:bg-blue-700">
            <Link href="/DashBoard">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <Link href="/DashBoard/clientReview">Client Review</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-700">
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

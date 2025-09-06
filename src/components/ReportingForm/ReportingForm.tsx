import ReportingItem from "../ReportingItem/ReportingItem";
import type { Report } from "../ReportingItem/ReportingItem";

const reports: Report[] = [
  {
    
    month: "Листопад",
    year: 2025,
    url: "https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=711242268#gid=711242268",
    id: 1,
  },
 
  {
    
    month: "Грудень",
    year: 2025,
    url: "https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=711242268#gid=711242268",
    id: 2,
  },
];

const handleEdit = (id: number) => {
  console.log(`Редагувати звіт з ID: ${id}`);
};
const handleDelete = (id: number) => {
  console.log(`Видалити звіт з ID: ${id}`);
}

export default function ReportingForm() {
  return (
    <div className="p-4 bg-gray-50 rounded-lg w-[946px]">
      
      <h2 className="text-lg font-semibold mb-7">Звітність "ІнХармоні.Юа"</h2>
      
      <div className=" bg-white shadow-md rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-white-100 ">
            <tr>
              <td colSpan={4} className="px-6  border-b rounded-b-lg border-black">
              <th className="w-24 font-medium">Місяць</th>
              <th className="w-24 px-4 font-medium">Рік</th>
              <th className="py-4 font-medium">Посилання на звіт</th>
              
              </td>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <ReportingItem 
               key={report.id}
               report={report} 
               onEdit={handleEdit}
               onDelete={handleDelete}
               />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 

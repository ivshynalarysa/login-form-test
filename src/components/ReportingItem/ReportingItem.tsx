export type Report = {
  month: string;
  year: number;
  url: string;
  id: number;
};

interface ReportingItemProps {
  report: Report;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ReportingItem({ report, onEdit, onDelete }: ReportingItemProps) {
  return (
    <tr className="hover:bg-gray-50 rounded-b-lg flex items-center " >
        <td colSpan={4} className="px-6 border-b rounded-b-lg border-black max-w-[946px] ">
      <td className="w-24">{report.month}</td>
      <td className="px-10 w-24">{report.year}</td>
      <td className="py-4  text-gray-600  whitespace-normal break-words max-w-[484px]">
        <a href={report.url} target="_blank" rel="noreferrer">
          {report.url}
        </a>
      </td>
      <td className="px-6   w-40">
        <div className="flex items-center gap-4">
          {/* Edit */}
          <button
            onClick={() => onEdit?.(report.id)}
            className="px-4 py-2 rounded-lg bg-gray-100 "
            aria-label="Редагувати"
          >
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_199302_37032)">
            <path d="M32 8C32 8 32 6 30 4C28 2 26.2 2 26.2 2L24 4.2V0H0V32H24V16L32 8ZM12 22.2L11.4 21.6L12 19.4L13.8 21.525L12 22.2ZM14.4 19L13.2 17.8L23.1278 7.88128C23.5278 8.08128 23.9278 8.48128 24.3278 8.88128L14.4 19ZM28.2 5L26.4 7C26 6.6 25.6 6.4 25.2 6L27 4.2C27.2 4.4 27.6 4.6 28.2 5ZM21 29H3V3H21V7L10.2 18L8 26.2L16.2 24L21 18.4375V29Z" fill="#1E1E1E" />
           </g>
          <defs>
          <clipPath id="clip0_199302_37032">
          <rect width="32" height="32" fill="white" />
          </clipPath>
          </defs>
          </svg>
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete?.(report.id)}
            className="px-4 py-2 rounded-lg bg-gray-100"
            aria-label="Видалити"
          >
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_199302_37034)">
           <path d="M32 0L26.6312 29.1537C26.33 30.7705 24.8594 32 23.0875 32H8.91251C7.14064 32 5.66999 30.7705 5.36877 29.1537L0 0H32ZM4.23477 3.36842L8.91251 28.6316H23.0875L27.7652 3.36842H4.23477ZM10.6844 25.2632V18.5263H17.7719V25.2632H10.6844ZM17.7719 17.1453L12.1373 11.7895L17.7719 6.43368L23.4064 11.7895L17.7719 17.1453Z" fill="#1E1E1E" />
           </g>
           <defs>
           <clipPath id="clip0_199302_37034">
           <rect width="32" height="32" fill="white" />
           </clipPath>
           </defs>
           </svg>
          </button>
        </div>
      </td>
        </td>
    </tr>
  );
}





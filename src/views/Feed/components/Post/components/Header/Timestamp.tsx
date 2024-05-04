import "./Timestamp.css";

const calculateDelta = (oldDate: number, newDate: number): string => {
  const delta = newDate - oldDate;
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);

  if (days > 30) {
    return `${months}m`;
  } else {
    return `${days}d`;
  }
};

export function Timestamp({ oldDate, newDate = Date.now() }: { oldDate: number; newDate?: number }) {
  const delta = calculateDelta(oldDate, newDate);

  return (
    <div className="post-header-timestamp">
      <span className="post-header-timestamp-dot"></span>
      {delta}
    </div>
  );
}

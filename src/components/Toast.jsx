import { CheckCircle2 } from 'lucide-react';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((msg, idx) => (
        <div className="toast-msg" key={idx}>
          <CheckCircle2 size={18} style={{ color: '#10b981' }} />
          <span>{msg}</span>
        </div>
      ))}
    </div>
  );
}

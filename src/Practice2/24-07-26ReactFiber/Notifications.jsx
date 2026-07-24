import { useState } from "react";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  function addNotification() {
    setNotifications((prev) => [
      ...prev,
      `Notification ${prev.length + 1}`,
    ]);
  }

  return (
    <>
      <button onClick={addNotification}>
        Add Notification
      </button>

      {notifications.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </>
  );
}
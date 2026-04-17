import { createContext, useContext, useCallback, useState } from "react";
import brand from "../styles/brand";

const ToastCtx = createContext();

const icons = { success: "✓", error: "✕", info: "ℹ" };
const colors = { success: brand.green, error: brand.red, info: brand.orange };

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((msg, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4200);
  }, []);

  return (
    <ToastCtx.Provider value={addToast}>
      {children}

      {/* Toast container */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 400,
          pointerEvents: "none",
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              padding: "14px 20px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: colors[t.type],
              color: "#fff",
              fontFamily: "var(--body)",
              fontSize: 14,
              fontWeight: 500,
              boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
              animation: "toastIn .35s cubic-bezier(.16,1,.3,1)",
              pointerEvents: "auto",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 800 }}>{icons[t.type]}</span>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  return useContext(ToastCtx);
}

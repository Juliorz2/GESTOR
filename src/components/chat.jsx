import React, { useState, useEffect, useRef } from "react";
import socket from "../socket";

function Chat() {
  const [mensaje, setMensaje] = useState("");
  const [chat, setChat] = useState([]);
  const chatBoxRef = useRef(null); // referencia al div del chat

  useEffect(() => {
    socket.on("chat-mensaje", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off("chat-mensaje");
    };
  }, []);

  // Hacer scroll automático al final
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chat]);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (mensaje.trim() === "") return;

    socket.emit("chat-mensaje", { mensaje });
    setMensaje("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", textAlign: "center" }}>
      <h2>Chat en tiempo real</h2>
      <div
        ref={chatBoxRef}
        style={{
          border: "1px solid #ccc",
          borderRadius: 16,
          padding: 10,
          height: 300,
          overflowY: "auto",
          marginBottom: 10,
          backgroundColor: "#f9f9f9",
          whiteSpace: "pre-wrap",
        }}
      >
        {chat.length === 0 ? (
          <p style={{}}>No hay mensajes aún.</p>
        ) : (
          chat.map((msg, i) => (
            <div key={i} style={{ margin: "5px 0" }}>
              <b>
                {msg.usuario === socket.id
                  ? "Tú"
                  : msg.usuario === "Sistema"
                  ? " Sistema"
                  : msg.usuario}
                :
              </b>{" "}
              {msg.mensaje}
            </div>
          ))
        )}
      </div>

      <form
        onSubmit={enviarMensaje}
        style={{ display: "flex", gap: "10px", marginTop: 10 }}
      >
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
          style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 20,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: 16,
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#4a90e2")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: 20,
            border: "none",
            backgroundColor: "#4a90e2",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#357abd")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4a90e2")}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;

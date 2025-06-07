import React, { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Producto from "./components/producto";
import "./App.css";
import socket from "./socket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./components/chat";

function App() {
  useEffect(() => {
    socket.on("nueva-notificacion", (data) => {
      toast.info(data.mensaje);
    });

    return () => {
      socket.off("nueva-notificacion");
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Chat />

        <Producto />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

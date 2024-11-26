import { useState } from "react";
import s from "./AuthModal.module.css";
import Login from "../../pages/login-page/LoginPage";
import Register from "../../pages/register-page/RegisterPage";
import { X } from "lucide-react";

interface AuthModalProps {
  closeModal: () => void
} 

function AuthModal({closeModal}:AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalContainer} onClick={(e) => e.stopPropagation()}>
       <X className={s.close_button} onClick={closeModal}/>
        <div className={s.tabSwitcher}>
          <button
            className={`${s.tabButton} ${activeTab === "login" ? s.active : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Вход
          </button>
          <button
            className={`${s.tabButton} ${activeTab === "register" ? s.active : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Регистрация
          </button>
        </div>
        
        <div className={s.content}>
          {activeTab === "login" && <Login closeModal={closeModal}/>}
          {activeTab === "register" && (
            <Register closeModal={closeModal}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;

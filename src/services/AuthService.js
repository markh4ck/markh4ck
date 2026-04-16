import CryptoJS from "crypto-js";

const ADMIN_PASSWORD_HASH = "1A2B3C44@aa"; // La contraseña real (para hashear localmente)
const STORAGE_KEY = "blogAdminAuth";

export const hashPassword = (password) => {
  return CryptoJS.SHA256(password).toString();
};

export const verifyPassword = (password) => {
  return hashPassword(password) === hashPassword(ADMIN_PASSWORD_HASH);
};

export const isAdminLoggedIn = () => {
  const storedHash = localStorage.getItem(STORAGE_KEY);
  if (!storedHash) return false;

  // Verificar que el hash guardado coincida con la contraseña correcta
  return storedHash === hashPassword(ADMIN_PASSWORD_HASH);
};

export const loginAdmin = (password) => {
  if (verifyPassword(password)) {
    const hash = hashPassword(ADMIN_PASSWORD_HASH);
    localStorage.setItem(STORAGE_KEY, hash);
    return true;
  }
  return false;
};

export const logoutAdmin = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const useLogout = () => {
  const logout = () => {
    dispatchEvent({ type: "LOGOUT" });
  };

  return { logout };
};

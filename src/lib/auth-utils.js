// Helper for password validation
export const validatePassword = (password) => {
  const requirements = [
    { text: "8-15 characters", fulfilled: password.length >= 8 && password.length <= 15 },
    { text: "At least 1 uppercase", fulfilled: /[A-Z]/.test(password) },
    { text: "At least 1 lowercase", fulfilled: /[a-z]/.test(password) },
    { text: "At least 1 number", fulfilled: /[0-9]/.test(password) },
    { text: "At least 1 special character", fulfilled: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ]
  return requirements
}

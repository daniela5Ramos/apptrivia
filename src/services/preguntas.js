import axios from "axios";

// Obtener todas las preguntas
const getAllPreguntas = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/preguntas");
    return response.data; // Devuelve todas las preguntas
  } catch (error) {
    console.error("Error al obtener todas las preguntas:", error);
    throw error;
  }
};

export default {
  getAllPreguntas,
};

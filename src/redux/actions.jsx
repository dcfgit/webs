import axios from "axios";
export const LOGIN = "LOGIN";
export const GET_ACCIONES_PANELES = "GET_ACCIONES_PANELES";
export const GET_ADRS = "GET_ADRS"
export const NEW_USER = 'NEW_USER'
export const GET_CEDEARS_PESOS = 'GET_CEDEARS_PESOS'
export const GET_CEDEARS_DOLARES = 'GET_CEDEARS_DOLARES'
export const GET_BONOS = 'GET_BONOS'
export const GET_GRAFICOS_CARRY_TRADE = "GET_GRAFICOS_CARRY_TRADE";
export const GET_ONS = 'GET_ONS';
export const GET_OPCIONES = 'GET_OPCIONES'
export const GET_FUTUROS = 'GET_FUTUROS'
export const GET_NOTICIAS = 'GET_NOTICIAS'
export const GET_NOTICIA = 'GET_NOTICIA'

 //const url = "http://localhost:8000";
 const url = "https://consulting-production-d00a.up.railway.app"

export function login(payload) {
  return async function (dispatch) {
    try {
      const info = await axios.post(`${url}/auth/login`, payload);

      if (info.data.usuario.rol === "ADMIN_ROLE") {
        window.location.href = "/monitores";
      } else if (info.data.usuario.rol === "USER_ROLE") {
        window.location.href = `/monitores`;
      }
      return dispatch({
        type: LOGIN,
        payload: info.data,
      });
    } catch (error) {
      alert("Error al iniciar sesion");
      console.log(error);
    }
  };
}

export function newUser(payload) {
  return async function (dispatch) {
    try {
      const info = await axios.post(`${url}/user/nuevo-usuario`, payload);
      window.location.href = `/monitores`;

      return dispatch({
        type: NEW_USER,
        payload: info.data,
      });
    } catch (error) {
      alert("Error al iniciar sesion");
      console.log(error);
    }
  };
}

export function getAccionesPaneles() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/acciones-paneles`, {
        headers,
      });
      return dispatch({
        type: GET_ACCIONES_PANELES,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAdrs() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/adrs-cotizaciones`, {
        headers,
      });
      return dispatch({
        type: GET_ADRS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function getCedearsPesos() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(
        `${url}/tool/cotizaciones-moneda?instrumento=cedears&pais=argentina&moneda=1`,
        {
          headers,
        }
      );
      return dispatch({
        type: GET_CEDEARS_PESOS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCedearsDolares() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(
        `${url}/tool/cotizaciones-moneda?instrumento=cedears&pais=argentina&moneda=2`,
        {
          headers,
        }
      );
      return dispatch({
        type: GET_CEDEARS_DOLARES,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getBonos() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/bonos`, {
        headers,
      });
      return dispatch({
        type: GET_BONOS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getGraficosCarryTrade() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/grafico-trade`, {
        headers,
      });
      return dispatch({
        type: GET_GRAFICOS_CARRY_TRADE,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOns() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(
        `${url}/tool/ons?pais=argentina`,
        {
          headers,
        }
      );
      return dispatch({
        type: GET_ONS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOpciones() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/opciones?pais=argentina`, {
        headers,
      });
      return dispatch({
        type: GET_OPCIONES,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function getFuturos() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/futuros`, {
        headers,
      });
      return dispatch({
        type: GET_FUTUROS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNoticias() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/noticias/get-noticias`, {
        headers,
      });
      return dispatch({
        type: GET_NOTICIAS,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getNoticia(id) {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token"); // Obtén el token almacenado en localStorage

      const headers = {
        "x-token": token,
      };
      const info = await axios.get(`${url}/tool/noticias/get-noticia-por-id?id=${id}`, {
        headers,
      });
      return dispatch({
        type: GET_NOTICIA,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
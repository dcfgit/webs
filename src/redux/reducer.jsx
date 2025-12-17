import {
  GET_ACCIONES_PANELES,
  GET_ADRS,
  GET_BONOS,
  GET_CEDEARS_DOLARES,
  GET_CEDEARS_PESOS,
  GET_FUTUROS,
  GET_GRAFICOS_CARRY_TRADE,
  GET_NOTICIA,
  GET_NOTICIAS,
  GET_ONS,
  GET_OPCIONES,
  LOGIN,
} from "./actions";

const initialState = {
  loggedUser: {},
  accionesPaneles: [],
  adrs: [],
  cedearsPesos: [],
  cedearsDolares: [],
  bonos: [],
  graficosCarryTrade: [],
  ons: [],
  opciones: [],
  futuros: [],
  noticias:[],
  noticia:{}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.usuario.uid);
      localStorage.setItem("rol", action.payload.usuario.rol);
      return {
        ...state,
        loggedUser: action.payload,
      };
    case GET_ACCIONES_PANELES:
      return {
        ...state,
        accionesPaneles: action.payload,
      };
    case GET_ADRS:
      return {
        ...state,
        adrs: action.payload,
      };
    case GET_CEDEARS_PESOS:
      return {
        ...state,
        cedearsPesos: action.payload,
      };
    case GET_CEDEARS_DOLARES:
      return {
        ...state,
        cedearsDolares: action.payload,
      };
    case GET_BONOS:
      return {
        ...state,
        bonos: action.payload,
      };
    case GET_GRAFICOS_CARRY_TRADE:
      return {
        ...state,
        graficosCarryTrade: action.payload,
      };
    case GET_ONS:
      return {
        ...state,
        ons: action.payload,
      };
    case GET_OPCIONES:
      return {
        ...state,
        opciones: action.payload,
      };
    case GET_FUTUROS:
      return {
        ...state,
        futuros: action.payload,
      };
    case GET_NOTICIAS:
      return {
        ...state,
        noticias: action.payload,
      };
    case GET_NOTICIA:
      return {
        ...state,
        noticia: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;

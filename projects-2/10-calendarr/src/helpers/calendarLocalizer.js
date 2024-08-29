import { parse, startOfWeek, getDay, format } from "date-fns"
import esEs from "date-fns/locale/es"
import { dateFnsLocalizer } from "react-big-calendar"

// cambiarlo a español
const locales = {
  
  'es': esEs,
  
}

// mandamos los atributos del componente de terceros
export const localizer = dateFnsLocalizer({
  
  format,
  
  parse,
  
  startOfWeek,
  
  getDay,
  
  locales,
  
})
  
  
  

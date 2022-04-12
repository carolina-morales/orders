import { Localization, Options } from "@material-table/core";
import axios from "axios";

export const AXIOS_ORDERS = axios.create({
  baseURL: 'https://eshop-deve.herokuapp.com/api/v2',
  headers: {
    'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
  }
});

export const MATERIAL_TABLE_OPTIONS: { options: Options<any>, localization: Localization } = {
  options: {
    grouping: true,
    padding: 'dense',
    actionsColumnIndex: -1,
    paginationType: 'normal',
    pageSizeOptions: [5, 10, 20, 50, 100],
    exportAllData: true
  },
  localization: {
    toolbar: {
      searchTooltip: 'Buscar',
      searchPlaceholder: 'Buscar',
    },
    header: {
      actions: 'Acciones'
    },
    body: {
      emptyDataSourceMessage: 'No se encontraron registros',
      deleteTooltip: 'Eliminar',
      addTooltip: 'Añadir',
      editTooltip: 'Editar',
      editRow: {
        cancelTooltip: 'Cancelar',
        saveTooltip: 'Aceptar'
      }
    },
    grouping: {
      groupedBy: 'Agrupados por:',
      placeholder: 'Arrastre aquí los encabezados de la tabla para agrupar los registros'
    },
    pagination: {
      lastTooltip: 'Último',
      firstTooltip: 'Inicio',
      nextTooltip: 'Siguiente',
      labelRowsSelect: 'filas',
      previousTooltip: 'Anterior',
      labelDisplayedRows: '{from}-{to} de {count}'
    }
  }
}
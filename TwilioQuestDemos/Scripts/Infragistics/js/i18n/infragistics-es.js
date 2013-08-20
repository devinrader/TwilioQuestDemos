﻿/*!@license
* Infragistics.Web.ClientUI data source localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.DataSourceLocale) {
	$.ig.DataSourceLocale = {};

	$.extend($.ig.DataSourceLocale, {

		locale: {
			invalidDataSource: "El origen de datos proporcionado no es válido. Es de tipo escalar.",
			unknownDataSource: "No se puede determinar el tipo de origen de datos. Especifique si son datos JSON o XML.",
			errorParsingArrays: "Se ha producido un error al analizar los datos de matriz y aplicar el esquema de datos definido: ",
			errorParsingJson: "Se ha producido un error al analizar los datos JSON y aplicar el esquema de datos definido: ",
			errorParsingXml: "Se ha producido un error al analizar los datos XML y aplicar el esquema de datos definido: ",
			errorParsingHtmlTable: "Se ha producido un error al extraer datos de la tabla HTML y aplicar el esquema: ",
			errorExpectedTbodyParameter: "Se esperaba un tbody o una tabla como parámetro.",
			errorTableWithIdNotFound: "No se ha encontrado la tabla HTML con el siguiente Id.: ",
			errorParsingHtmlTableNoSchema: "Se ha producido un error al analizar el DOM de la tabla: ",
			errorParsingJsonNoSchema: "Se ha producido un error al analizar/evaluar la cadena JSON: ",
			errorParsingXmlNoSchema: "Se ha producido un error al analizar la cadena XML: ",
			errorXmlSourceWithoutSchema: "El origen de datos proporcionado es un documento xml, pero no hay un esquema de datos definido ($.IgDataSchema) ",
			errorUnrecognizedFilterCondition: " La condición de filtro especificada no ha sido reconocida: ",
			errorRemoteRequest: "Error en la solicitud remota de recuperación de datos: ",
			errorSchemaMismatch: "Los datos de entrada no coinciden con el esquema, no se ha podido asignar el siguiente campo: ",
			errorSchemaFieldCountMismatch: "Los datos de entrada no coinciden con el esquema en términos de número de campos. ",
			errorUnrecognizedResponseType: "El tipo de respuesta no se ha establecido correctamente o no ha sido posible detectarlo automáticamente. Establezca settings.responseDataType y/o settings.responseContentType.",
			hierarchicalTablesNotSupported: "Tablas no admitidas para HierarchicalSchema",
			cannotBuildTemplate: "No se ha podido generar la plantilla jQuery. No hay registros presentes en el origen de datos y no hay columnas definidas.",
			unrecognizedCondition: "Condición de filtro no reconocida en la siguiente expresión: ",
			fieldMismatch: "La siguiente expresión contiene un campo o una condición de filtro no válidos: ",
			noSortingFields: "No se ha especificado ningún campo. Debe especificar al menos un campo de ordenación al llamar a sort().",
			filteringNoSchema: "No se ha especificado ningún esquema / campo. Debe especificar un esquema con definiciones y tipos de campo para poder filtrar el origen de datos."
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Chart) {
	$.ig.Chart = {};

	$.extend($.ig.Chart, {

		locale: {
			seriesName: "debe especificar la opción de nombre de la serie al establecer las opciones.",
			axisName: "debe especificar la opción de nombre del eje al establecer las opciones.",
			close: "Cerrar",
			overview: "Información general",
			zoomOut: "Alejar",
			zoomIn: "Acercar",
			resetZoom: "Restablecer zoom"
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI shared localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*jQuery must be defined before this. If it is not the $ variable is created*/
$ = $ || {};

$.ig = $.ig || {};

if (!$.ig.SharedLocale) {
	$.ig.SharedLocale = {};

	$.extend($.ig.SharedLocale, {

		locale: {
		    popoverOptionChangeNotSupported: "No se admite el cambio de la siguiente opción después de inicializar igPopover:"
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI templating localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Templating) {
	$.ig.Templating = {};

	$.extend($.ig.Templating, {
		locale: {
			undefinedArgument: 'Se ha producido un error al intentar recuperar las propiedades del origen de datos: '
		}
	});
}

/*!@license
* Infragistics.Web.ClientUI Combo localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Combo) {
	$.ig.Combo = {
		locale: {
			noMatchFoundText: 'No hay resultados',
			dropDownButtonTitle: 'Mostrar lista desplegable',
			clearButtonTitle: 'Borrar valor'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Dialog) {
	$.ig.Dialog = {
		locale: {
			closeButtonTitle: "Cerrar",
			minimizeButtonTitle: "Minimizar",
			maximizeButtonTitle: "Maximizar",
			pinButtonTitle: "Anclar",
			unpinButtonTitle: "Desanclar",
			restoreButtonTitle: "Restaurar"
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Editors localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Editor) {
	$.ig.Editor = {
		locale: {
			spinUpperTitle: 'Incrementar',
			spinLowerTitle: 'Reducir',
			buttonTitle: 'Mostrar lista',
			clearTitle: 'Borrar valor',
			datePickerButtonTitle: 'Mostrar calendario',
			updateModeUnsupportedValue: 'La opción updateMode admite dos valores posibles: "onChange" e "immediate"'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Grid localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "No se ha cargado ese widget: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns está habilitado, pero no hay registros en el origen de datos para determinar las columnas",
			optionChangeNotSupported: "No se admite el cambio de la siguiente opción después de crear igGrid.",
			optionChangeNotScrollingGrid: "No se puede cambiar la siguiente opción después de crear la cuadrícula porque la cuadrícula inicial no se desplaza y se necesita una re-representación total.",
			noPrimaryKeyDefined: "No se ha definido una clave principal para la cuadrícula. Para usar funciones como la edición de cuadrículas, debe definir una clave principal.",
			indexOutOfRange: "El índice de filas que ha especificado está fuera del intervalo.",
			noSuchColumnDefined: "La clave de columna especificada no coincide con ninguna de las columnas de cuadrícula definidas.",
			columnIndexOutOfRange: "El índice de columna especificado está fuera del intervalo.",
			recordNotFound: "No se ha encontrado el registro con el Id. especificado en la vista de datos.",
			columnNotFound: "No se ha encontrado una columna que coincide con la clave.",
			colPrefix: "Columna ",
			columnVirtualizationRequiresWidth: "La virtualización / columnVirtualization está establecida como Verdadero, pero no se ha podido deducir el ancho para las columnas de cuadrícula. Debe establecer uno de los siguientes parámetros: a) ancho de cuadrícula, b) defaultColumnWidth, c) ancho definido para cada columna",
			virtualizationRequiresHeight: "La virtualización está establecida como Verdadero; por tanto, también se debe establecer la altura de la cuadrícula.",
            colVirtualizationDenied: "columnVirtualization solo es aplicable a la virtualización fija",
			noColumnsButAutoGenerateTrue: "autoGenerateColumns está establecido como Falso, pero no hay columnas definidas en la cuadrícula. Establezca autoGenerateColumns como Verdadero o especifique las columnas manualmente",
			noPrimaryKey: "Se necesita una clave principal para definir el widget igHierarchicalGrid.",
			templatingEnabledButNoTemplate: "jQueryTemplating está establecido como Verdadero, pero no se ha definido ninguna rowTemplate.",
			expandTooltip: "Expandir fila",
			collapseTooltip: "Contraer fila",
			movingNotAllowedOrIncompatible: "No se ha podido desplazar la columna deseada. No se ha encontrado la columna o el resultado no era compatible con el diseño de columna."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Empieza por...",
			endsWithNullText: "Termina con...",
			containsNullText: "Contiene...",
			doesNotContainNullText: "No contiene...",
			equalsNullText: "Igual a...",
			doesNotEqualNullText: "No igual a...",
			greaterThanNullText: "Mayor de...",
			lessThanNullText: "Menor de...",
			greaterThanOrEqualToNullText: "Mayor o igual a...",
			lessThanOrEqualToNullText: "Menor o igual a...",
			onNullText: "En...",
			notOnNullText: "No en...",
			emptyNullText: "Vacío",
			notEmptyNullText: "No vacío",
			nullNullText: "Nulo",
			notNullNullText: "No nulo",
			startsWithLabel: "Empieza por",
			endsWithLabel: "Termina con",
			containsLabel: "Contiene",
			doesNotContainLabel: "No contiene",
			equalsLabel: "Igual a",
			doesNotEqualLabel: "Diferente de",
			greaterThanLabel: "Mayor de",
			lessThanLabel: "Menor de",
			greaterThanOrEqualToLabel: "Mayor o igual a",
			lessThanOrEqualToLabel: "Menor o igual a",
			trueLabel: "Verdadero",
			falseLabel: "Falso",
			afterLabel: "Después",
			beforeLabel: "Antes",
			todayLabel: "Hoy",
			yesterdayLabel: "Ayer",
			thisMonthLabel: "Este mes",
			lastMonthLabel: "El mes pasado",
			nextMonthLabel: "El mes siguiente",
			thisYearLabel: "Este año",
			lastYearLabel: "El año pasado",
			nextYearLabel: "El año siguiente",
			clearLabel: "Borrar filtro",
			noFilterLabel: "No",
			onLabel: "En",
			notOnLabel: "No en",
			advancedButtonLabel: "Avanzado",
			filterDialogCaptionLabel: "BÚSQUEDA AVANZADA",
			filterDialogConditionLabel1: "Mostrar registros coincidentes ",
			filterDialogConditionLabel2: " de los siguientes criterios",
			filterDialogOkLabel: "Buscar",
			filterDialogCancelLabel: "Cancelar",
			filterDialogAnyLabel: "CUALQUIERA",
			filterDialogAllLabel: "TODOS",
			filterDialogAddLabel: "Agregar",
			filterDialogErrorLabel: "Se ha superado el número máximo de filtros.",
			filterSummaryTitleLabel: "Resultados de la búsqueda",
			filterSummaryTemplate: "${matches} registros coincidentes",
			filterDialogClearAllLabel: "Borrar TODOS",
			tooltipTemplate: "${condition} filtro aplicado",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Ocultar filtro",
			featureChooserTextHide: "Mostrar filtro",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Filtro avanzado",
			virtualizationSimpleFilteringNotAllowed: "Cuando está habilitada la virtualización horizontal, no se admite el filtro simple (fila de filtro). Establezca el modo como 'avanzado' y/o no establezca advancedModeEditorsVisible",
			featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
			emptyGroupByAreaContent: "Arrastre una columna aquí o {0} para Agrupar por",
			emptyGroupByAreaContentSelectColumns: "seleccione columnas",
			emptyGroupByAreaContentSelectColumnsCaption: "seleccione columnas",
			expandTooltip: "Expandir fila agrupada",
			collapseTooltip: "Contraer fila agrupada",
			removeButtonTooltip: "Quitar columna agrupada",
			featureChooserText: "Desagrupar por",
			featureChooserTextHide: "Agrupar por",
			modalDialogCaptionButtonDesc: "Haga clic para ordenar de forma ascendente",
			modalDialogCaptionButtonAsc: "Haga clic para ordenar de forma descendente",
			modalDialogCaptionButtonUngroup: "Haga clic para desagrupar",
			modalDialogGroupByButtonText: "Agrupar por",
			modalDialogCaptionText: 'Agregar a Agrupar por',
			modalDialogDropDownLabel: 'Mostrando:',
			modalDialogClearAllButtonLabel: 'borrar todos',
			modalDialogRootLevelHierarchicalGrid: 'raíz',
			modalDialogDropDownButtonCaption: "Haga clic para mostrar/ocultar",
			modalDialogButtonApplyText: 'Aplicar',
			modalDialogButtonCancelText: 'Cancelar'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Selector de columnas",
			hiddenColumnIndicatorTooltipText: "Columna(s) oculta(s)",
			columnHideText: "Ocultar",
			columnChooserCaptionLabel: "Selector de columnas",
			columnChooserCheckboxesHeader: "ver",
			columnChooserColumnsHeader: "columna",
			columnChooserCloseButtonTooltip: "Cerrar",
			hideColumnIconTooltip: "Ocultar",
			featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado.",
			columnChooserShowText: "Mostrar",
			columnChooserHideText: "Ocultar",
			columnChooserResetButtonLabel: "restablecer",
			columnChooserButtonApplyText: 'Aplicar',
			columnChooserButtonCancelText: 'Cancelar'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Mostrar ",
			pageSizeDropDownTrailingLabel: "registros",
			//pageSizeDropDownTemplate: "Mostrar ${dropdown} registros",
			nextPageLabelText: "siguiente",
			prevPageLabelText: "anterior",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pág",
			currentPageDropDownTrailingLabel: "de ${count}",
			//currentPageDropDownTemplate: "Pág ${dropdown} de ${count}",
			currentPageDropDownTooltip: "Elegir índice de páginas",
			pageSizeDropDownTooltip: "Elegir número de registros por página",
			pagerRecordsLabelTooltip: "Intervalo de registros actuales",
			prevPageTooltip: "ir a la página anterior",
			nextPageTooltip: "ir a la página siguiente",
			firstPageTooltip: "ir a la primera página",
			lastPageTooltip: "ir a la última página",
			pageTooltipFormat: "página ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} de ${recordCount} registros"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection no se ha inicializado. Para evitar recibir este mensaje de error, habilite la función de Selección para la cuadrícula o bien establezca la propiedad requireSelection de la función Selectores de Filas como Falso."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'ordenado ${direction}',
			unsortedColumnTooltip: 'haga clic para ordenar la columna',
			ascending: 'ascendente',
			descending: 'descendente',
			modalDialogSortByButtonText: 'ordenar por',
			modalDialogResetButton: "restablecer",
			modalDialogCaptionButtonDesc: "Haga clic para ordenar de forma descendente",
			modalDialogCaptionButtonAsc: "Haga clic para ordenar de forma ascendente",
			modalDialogCaptionButtonUnsort: "Haga clic para quitar criterios de ordenación",
			featureChooserText: "Ordenar en múltiples",
			modalDialogCaptionText: "Ordenar múltiples",
			modalDialogButtonApplyText: 'Aplicar',
			modalDialogButtonCancelText: 'Cancelar',
			sortingHiddenColumnNotSupport: 'La ordenación de columnas ocultas no se admite'
			//modalDialogButtonSlideCaption: "Haga clic para mostrar/ocultar columnas ordenadas"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Ocultar resúmenes",
			featureChooserTextHide: "Mostrar resúmenes",
			dialogButtonOKText: 'Aceptar',
			dialogButtonCancelText: 'Cancelar',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Mostrar/ocultar resúmenes',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Recuento',
			defaultSummaryRowDisplayLabelMin: 'Mín.',
			defaultSummaryRowDisplayLabelMax: 'Máx.',
			defaultSummaryRowDisplayLabelSum: 'Suma',
			defaultSummaryRowDisplayLabelAvg: 'Prom.',
			defaultSummaryRowDisplayLabelCustom: 'Personalizado',
			calculateSummaryColumnKeyNotSpecified: "Especifique la clave de columna para calcular el resumen",
			featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Terminado',
			doneTooltip: 'Detener edición y actualizar',
			cancelLabel: 'Cancelar',
			cancelTooltip: 'Detener edición y no actualizar',
			addRowLabel: 'Agregar fila nueva',
			addRowTooltip: 'Haga clic para agregar una nueva fila',
			deleteRowLabel: '',
			deleteRowTooltip: 'Borrar fila',
			igEditorException: 'Para actualizar ui.igGrid, ui.igEditor debe estar cargado',
			igComboException: 'Para usar el tipo combinado para ui.igGrid, ui.igCombo debe estar cargado',
			igRatingException: 'Para usar igRating como editor para ui.igGrid, ui.igRating debe estar cargado',
			igValidatorException: 'Las opciones de validación definidas en igGridUpdating necesitan que ui.igValidator esté cargado',
			noPrimaryKeyException: 'Para admitir las operaciones de actualización después de borrar una fila, la aplicación debe definir "primaryKey" en las opciones de igGrid.',
			hiddenColumnValidationException: 'No se puede editar una fila que tiene una columna oculta con validación habilitada.',
			dataDirtyException: 'La cuadrícula tiene transacciones pendientes que pueden afectar a la representación de datos. Para evitar excepciones, la aplicación puede habilitar la opción "autoCommit" de igGrid o bien debe procesar el evento "dataDirty" de igGridUpdating y devolver Falso. Al procesar ese evento, la aplicación también puede efectuar "commit()" datos en igGrid.',
			rowEditDialogCaptionLabel: 'Editar datos de fila'
		}
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Aplicar',
            movingDialogButtonCancelText: 'Cancelar',
            movingDialogCaptionButtonDesc: 'Bajar',
            movingDialogCaptionButtonAsc: 'Subir',
            movingDialogCaptionText: 'Mover columnas',
            movingDialogDisplayText: 'Mover columnas',
            dropDownMoveLeftText: 'Mover a la izquierda',
            dropDownMoveRightText: 'Mover a la derecha',
            dropDownMoveFirstText: 'Mover primero',
            dropDownMoveLastText: 'Mover último',
            featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado.",
            movingToolTipMove: 'Mover'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Haga clic para fijar esta columna',
            headerUnfixButtonText: 'Haga clic para soltar esta columna'
        }
    });

}

/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Negrita',
			italicButtonTitle: 'Cursiva',
			underlineButtonTitle: 'Subrayado',
			strikethroughButtonTitle: 'Tachado',
			increaseFontSizeButtonTitle: 'Aumentar tamaño de fuente',
			decreaseFontSizeButtonTitle: 'Disminuir tamaño de fuente',
			alignTextLeftButtonTitle: 'Alinear texto a la izquierda',
			alignTextRightButtonTitle: 'Alinear texto a la derecha',
			alignTextCenterButtonTitle: 'Centrar',
			justifyButtonTitle: 'Justificar',
			bulletsButtonTitle: 'Viñetas',
			numberingButtonTitle: 'Numeración',
			decreaseIndentButtonTitle: 'Disminuir sangría',
			increaseIndentButtonTitle: 'Aumentar sangría',
			insertPictureButtonTitle: 'Insertar imagen',
			fontColorButtonTitle: 'Color de fuente',
			textHighlightButtonTitle: 'Color de resaltado de texto',
			insertLinkButtonTitle: 'Insertar hipervínculo',
			insertTableButtonTitle: 'Tabla',
			addRowButtonTitle: 'Agregar fila',
			removeRowButtonTitle: 'Quitar fila',
			addColumnButtonTitle: 'Agregar columna',
			removeColumnButtonTitle: 'Quitar columna',
			inserHRButtonTitle: 'Insertar regla horizontal',
			viewSourceButtonTitle: 'Mostrar origen',
			cutButtonTitle: 'Cortar',
			copyButtonTitle: 'Copiar',
			pasteButtonTitle: 'Pegar',
			undoButtonTitle: 'Deshacer',
			redoButtonTitle: 'Rehacer',
			imageUrlDialogText: 'Dirección URL de la imagen:',
			imageAlternativeTextDialogText: 'Texto alternativo:',
			imageWidthDialogText: 'Ancho de la imagen:',
			imageHeihgtDialogText: 'Alto de la imagen:',
			linkNavigateToUrlDialogText: 'Navegar a la dirección URL:',
			linkDisplayTextDialogText: 'Mostrar texto:',
			linkOpenInDialogText: 'Abrir en:',
			linkTargetNewWindowDialogText: 'Nueva ventana',
			linkTargetSameWindowDialogText: 'Misma ventana',
			linkTargetParentWindowDialogText: 'Ventana primaria',
			linkTargetTopmostWindowDialogText: 'Ventana de nivel superior',
			applyButtonTitle: 'Aplicar',
			cancelButtonTitle: 'Cancelar',
			collapseButtonTitle: 'Contraer',
			expandButtonTitle: 'Expandir',
			defaultToolbars: {
			    textToolbar: "text manipulation toolbar",
			    formattingToolbar: "text formatting toolbar",
			    insertObjectToolbar: "objects insertion toolbar",
			    copyPasteToolbar: "copy/paste toolbar"
			},
			fontNames: {
				win: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Lucida Console", value: "Lucida Console" },
						{ text: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
						{ text: "Palatino Linotype", value: "Palatino Linotype" },
						{ text: "Tahoma", value: "Tahoma" },
						{ text: "Trebuchet MS", value: "Trebuchet MS" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Wingdings", value: "Wingdings" },
						{ text: "MS Sans Serif", value: "MS Sans Serif" },
						{ text: "MS Serif", value: "MS Serif" }
					],
				mac: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Monaco", value: "Monaco" },
						{ text: "Lucida Grande", value: "Lucida Grande" },
						{ text: "Book Antiqua", value: "Book Antiqua" },
						{ text: "Geneva", value: "Geneva" },
						{ text: "Trebuchet MS", value: "Trebuchet" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Zapf Dingbats", value: "Zapf Dingbats" },
						{ text: "New York", value: "New York" }
					]
			},
			fontSizes: [
				{ text: "1", value: "1 (8pt)", style: "xx-small"},
				{ text: "2", value: "2 (9pt)", style: "x-small" },
				{ text: "3", value: "3 (10pt)", style: "small" },
				{ text: "4", value: "4 (12pt)", style: "medium" },
				{ text: "5", value: "5 (14pt)", style: "large" },
				{ text: "6", value: "6 (16pt)", style: "x-large" },
				{ text: "7", value: "7 (18pt)", style: "xx-large" }
			],
			formatsList: [
					{ text: "h1", value: "Heading 1" },
					{ text: "h2", value: "Heading 2" },
					{ text: "h3", value: "Heading 3" },
					{ text: "h4", value: "Heading 4" },
					{ text: "h5", value: "Heading 5" },
					{ text: "h6", value: "Heading 6" }
				]
		}

	});
}

/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotShared) {
    $.ig.PivotShared = {};

    $.extend($.ig.PivotShared, {
        locale: {
            invalidDataSource: "La fuente de datos pasada es cero o no se admite.",
            measureList: "Medidas",
            ok: "Aceptar",
            cancel: "Cancelar",
            addToMeasures: "Agregar a medidas",
            addToFilters: "Agregar a filtros",
            addToColumns: "Agregar a columnas",
            addToRows: "Agregar a filas"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotDataSelector) {
    $.ig.PivotDataSelector = {};

    $.extend($.ig.PivotDataSelector, {
        locale: {
            invalidBaseElement: " no se admite como elemento base. Use DIV en su lugar.",
            catalog: "Catálogo",
            cube: "Cubo",
            measureGroup: "Medir grupo",
            measureGroupAll: "(Todo)",
            rows: "Filas",
            columns: "Columnas",
            measures: "Medidas",
            filters: "Filtros",
            deferUpdate: "Aplazar actualización",
            updateLayout: "Actualizar diseño",
            selectAll: "Seleccionar todo"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.PivotGrid) {
    $.ig.PivotGrid = {};

    $.extend($.ig.PivotGrid, {
        locale: {
            filtersHeader: "Soltar campos de filtro aquí",
            measuresHeader: "Soltar elementos de datos aquí",
            rowsHeader: "Soltar campos de fila aquí",
            columnsHeader: "Soltar campos de columna aquí",
            disabledFiltersHeader: "Campos de filtro",
            disabledMeasuresHeader: "Elementos de datos",
            disabledRowsHeader: "Campos de fila",
            disabledColumnsHeader: "Campos de columna",
            noSuchAxis: "No hay tal eje"
        }
    });
}
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Splitter) {
	$.ig.Splitter = {};

	$.extend($.ig.Splitter, {
		locale: {
		    errorPanels: 'El número de paneles no puede ser superior a dos.'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.TileManager) {
	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
		    renderDataError: "Los datos no se han recuperado o analizado correctamente.",
		    columnWidthUnitError: "La anchura de columna proporcionada no es una unidad reconocida. Use px, % o proporcione un número: ",
		    columnHeightUnitError: "La altura de columna proporcionada no es una unidad reconocida. Use px, % o proporcione un número: "
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Tree localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Tree) {
	$.ig.Tree = {};

	$.extend($.ig.Tree, {
		locale: {
			invalidArgumentType: 'El tipo de argumento proporcionado no es válido.',
			errorOnRequest: 'Se ha producido un error al recuperar los datos: ',
			noDataSourceUrl: 'El control igTree requiere que se proporcione una dataSourceUrl para iniciar una solicitud de datos en esa dirección URL.',
			incorrectPath: 'No se ha encontrado un nodo en la ruta proporcionada: ',
			incorrectNodeObject: 'El argumento proporcionado no es un elemento nodo de jQuery.',
			setOptionError: 'Los cambios en el tiempo de ejecución no están permitidos para la siguiente opción: ',
			moveTo: '<strong>Mover a</strong> {0}',
			moveBetween: '<strong>Mover entre</strong> {0} y {1}',
			moveAfter: '<strong>Mover después de</strong> {0}',
			moveBefore: '<strong>Mover antes de</strong> {0}',
			copyTo: '<strong>Copiar en</strong> {0}',
			copyBetween: '<strong>Copiar entre</strong> {0} y {1}',
			copyAfter: '<strong>Copiar después de</strong> {0}',
			copyBefore: '<strong>Copiar antes de</strong> {0}',
			and: 'y'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI Upload localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Upload) {
	$.ig.Upload = {};

	$.extend($.ig.Upload, {

		locale: {
			labelUploadButton: "Cargar archivo",
			labelAddButton: "Agregar",
			labelClearAllButton: "Borrar cargados",
			// M.H. 13 May 2011 - fix bug 75042
			labelSummaryTemplate: "{0} de {1} cargados",
			labelSummaryProgressBarTemplate: "{0}/{1}",
			labelShowDetails: "Mostrar detalles",
			labelHideDetails: "Ocultar detalles",
			labelSummaryProgressButtonCancel: "Cancelar",
			// M.H. 1 June 2011 Fix bug #77532
			labelSummaryProgressButtonContinue: "Cargar",
			labelSummaryProgressButtonDone: "Terminado",
			labelProgressBarFileNameContinue: "...",

			//error messages
			errorMessageFileSizeExceeded: "Se ha excedido el tamaño máximo de archivo.",
			errorMessageGetFileStatus: "¡Imposible obtener el estado de archivo actual! Probablemente se ha cortado la conexión.",
			errorMessageCancelUpload: "¡Imposible enviar comando al servidor para cancelar la carga! Probablemente se ha cortado la conexión.",
			errorMessageNoSuchFile: "No se ha encontrado el archivo que ha solicitado. Probablemente el archivo es demasiado grande.",
			errorMessageOther: "Error interno al cargar el archivo. Código de error: {0}.",
			errorMessageValidatingFileExtension: "Error en la validación de extensión del archivo.",
			errorMessageAJAXRequestFileSize: "Error de AJAX al intentar obtener el tamaño del archivo.",
			errorMessageMaxUploadedFiles: "Se ha superado el número máximo de archivos que pueden cargarse.",
			errorMessageMaxSimultaneousFiles: "El valor de maxSimultaneousFilesUploads es incorrecto. Debe ser superior a 0 o nulo.",
			errorMessageTryToRemoveNonExistingFile: "Está intentando eliminar un archivo no existente con el Id. {0}.",
			errorMessageTryToStartNonExistingFile: "Está intentando ejecutar un archivo no existente con el Id. {0}.",

			// M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			// title attributes            
			titleUploadFileButtonInit: "Cargar archivo",
			titleAddFileButton: "Agregar",
			titleCancelUploadButton: "Cancelar",
			// M.H. 1 June 2011 Fix bug #77532
			titleSummaryProgressButtonContinue: "Cargar",
			titleClearUploaded: "Borrar cargados",
			titleShowDetailsButton: "Mostrar detalles",
			titleHideDetailsButton: "Ocultar detalles",
			titleSummaryProgressButtonCancel: "Cancelar",
			titleSummaryProgressButtonDone: "Terminado",
			// M.H. 1 June 2011 Fix bug #77532
			titleSingleUploadButtonContinue: "Cargar",
			titleClearAllButton: "Borrar cargados"
		}
	});

}


/*!@license
* Infragistics.Web.ClientUI Validator localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global $ */
$.ig = $.ig || {};

if (!$.ig.Validator) {
	$.ig.Validator = {
		locale: {
			defaultMessage: 'Corrija este campo',
			selectMessage: 'Seleccione un valor',
			rangeSelectMessage: 'Seleccione un número de elementos entre {0} como máximo y {1} como mínimo',
			minSelectMessage: 'Seleccione {0} elementos como mínimo',
			maxSelectMessage: 'No seleccione más de {0} elementos',
			rangeLengthMessage: 'Escriba un valor de entre {0} y {1} caracteres',
			minLengthMessage: 'Escriba {0} caracteres como mínimo',
			maxLengthMessage: 'No escriba más de {0} caracteres',
			requiredMessage: 'Este campo es obligatorio',
			maskMessage: 'Rellene todas las posiciones obligatorias',
			dateFieldsMessage: 'Rellene los campos de fecha',
			invalidDayMessage: 'Día del mes no válido. Escriba el día correcto',
			dateMessage: 'Escriba una fecha válida',
			numberMessage: 'Escriba un número válido',
			rangeMessage: 'Escriba un valor entre {0} y {1}',
			minMessage: 'Escriba un valor mayor o igual a {0}',
			maxMessage: 'Escriba un valor menor o igual a {0}'
		}
	};
}

/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.VideoPlayer) {
	$.ig.VideoPlayer = {};

	$.extend($.ig.VideoPlayer, {

		locale: {
			liveStream: "Vídeo en directo",
			live: "Directo",
			paused: "Pausado",
			playing: "Reproduciendo",
			play: 'Reproducir',
			volume: "Volumen",
			unsupportedVideoSource: "Los orígenes de vídeo actuales no contienen un formato compatible con su explorador.",
			missingVideoSource: "No hay orígenes de vídeo compatibles.",
			progressLabelLongFormat: "$currentTime$ / $duration$",
			progressLabelShortFormat: "$currentTime$",
			enterFullscreen: "Mostrar en pantalla completa",
			exitFullscreen: "Salir de pantalla completa",
			skipTo: "SALTAR A",
			unsupportedBrowser: "El explorador actual no admite vídeo HTML5. <br/>Intente actualizar a una de las siguientes versiones:",
			currentBrowser: "Explorador actual: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/",
			buffering: 'Almacenando en búfer...',
			adMessage: 'Anuncio: El vídeo se reanudará en $duration$ segundos.',
			adMessageLong: 'Anuncio: El vídeo se reanudará en $duration$.',
			adMessageNoDuration: 'Anuncio: El vídeo se reanudará después de la publicidad.',
			adNewWindowTip: 'Anuncio: Haga clic para abrir el contenido del anuncio en una ventana nueva.',
			nonDivException: 'El Reproductor de vídeo Infragistics HTML5 solo puede instanciarse en una etiqueta DIV.',
			relatedVideos: 'VÍDEOS RELACIONADOS',
			replayButton: 'Volver a reproducir',
			replayTooltip: 'Haga clic para volver a reproducir el último vídeo.'
		}
	});

}

/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 13.1.20131.2143
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.util) {
	$.ig.util = {};

	$.extend($.ig.util, {

		locale: {
			unsupportedBrowser: "El explorador actual no admite el elemento canvas de HTML5. <br/>Intente actualizar a una de las siguientes versiones:",
			currentBrowser: "Explorador actual: {0}",
			ie9: "Microsoft Internet Explorer V 9+",
			chrome8: "Google Chrome V 8+",
			firefox36: "Mozilla Firefox V 3.6+",
			safari5: "Apple Safari V 5+",
			opera11: "Opera V 11+",
			ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.com/chrome",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/safari/download/"
		}
	});

}



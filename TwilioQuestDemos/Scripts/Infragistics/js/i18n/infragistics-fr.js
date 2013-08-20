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
			invalidDataSource: "La source de données fournie est invalide. Il s'agit d'un scalaire.",
			unknownDataSource: "Impossible de déterminer le type de source de données. Veuillez préciser s'il s'agit de données JSON ou XML.",
			errorParsingArrays: "Une erreur s'est produite lors de l'analyse syntaxique des données de tableaux  et de l'application du schéma de données défini : ",
			errorParsingJson: "Une erreur s'est produite lors de l'analyse syntaxique des données JSON et de l'application du schéma de données défini : ",
			errorParsingXml: "Une erreur s'est produite lors de l'analyse syntaxique des données XML et de l'application du schéma de données défini : ",
			errorParsingHtmlTable: "Une erreur s'est produite lors de l'extraction des données du tableau HTML et lors de l'application du schéma : ",
			errorExpectedTbodyParameter: "Un corps ou un tableau était attendu comme paramètre.",
			errorTableWithIdNotFound: "Le tableau HTML avec l'ID suivant n'a pas été trouvé : ",
			errorParsingHtmlTableNoSchema: "Une erreur s'est produite lors de l'analyse syntaxique du tableau DOM : ",
			errorParsingJsonNoSchema: "Une erreur s'est produite lors de l'analyse syntaxique/l'évaluation de la chaîne JSON : ",
			errorParsingXmlNoSchema: "Une erreur s'est produite lors de l'analyse syntaxique de la chaîne XML : ",
			errorXmlSourceWithoutSchema: "La source de données fournie est un document xml, mais il n'existe pas de schéma de données défini ($.IgDataSchema) ",
			errorUnrecognizedFilterCondition: " La condition de filtre spécifiée n'a pas été reconnue : ",
			errorRemoteRequest: "La requête à distance pour récupérer les données a échoué : ",
			errorSchemaMismatch: "Les données entrées ne coïncident pas avec le schéma, le champ suivant n'a pas pu être cartographié : ",
			errorSchemaFieldCountMismatch: "Les données entrées ne coïncident pas avec le schéma en termes de nombre de champs. ",
			errorUnrecognizedResponseType: "Le type de réponse n'a pas été défini correctement ou il était impossible de le détecter automatiquement. Veuillez définir settings.responseDataType et/ou settings.responseContentType.",
			hierarchicalTablesNotSupported: "Les tableaux ne sont pas pris en charge pour HierarchicalSchema",
			cannotBuildTemplate: "Le modèle jQuery n'a pas pu être créé. Aucune archive présente dans la source de données et aucune colonne définie.",
			unrecognizedCondition: "Condition de filtrage non reconnue dans l'expression suivante : ",
			fieldMismatch: "L'expression suivante contient un champ ou une condition de filtrage invalide : ",
			noSortingFields: "Aucun champ spécifié. Spécifiez au moins un champ de tri pour utiliser l'option de tri ().",
			filteringNoSchema: "Aucun schéma/champ spécifié. Spécifiez un schéma avec des définitions et types de champs pour pouvoir filtrer la source de données."
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
			close: "Fermer",
			overview: "Aperçu",
			zoomOut: "Zoom arrière",
			zoomIn: "Zoom avant",
			resetZoom: "Réinitialiser zoom"
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
		    popoverOptionChangeNotSupported: "La modification de l'option suivante après l'initialisation de FinPopig n'est pas prise en charge :"
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
		    undefinedArgument: "Une erreur s'est produite pendant la récupération de la propriété de la source de données : "
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
			noMatchFoundText: 'Aucun résultat',
			dropDownButtonTitle: 'Afficher la liste déroulante',
			clearButtonTitle: 'Effacer la valeur'
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
			closeButtonTitle: "Fermer",
			minimizeButtonTitle: "Minimiser",
			maximizeButtonTitle: "Maximiser",
			pinButtonTitle: "Punaiser",
			unpinButtonTitle: "Dépunaiser",
			restoreButtonTitle: "Restaurer"
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
			spinUpperTitle: 'Augmenter',
			spinLowerTitle: 'Diminuer',
			buttonTitle: 'Afficher la liste',
			clearTitle: 'Effacer la valeur',
			datePickerButtonTitle: 'Afficher le calendrier',
			updateModeUnsupportedValue: 'L\'option updateMode prend en charge deux valeurs possibles - "onChange" et "immediate"'
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
			noSuchWidget: "Aucun widget similaire chargé : ",
			autoGenerateColumnsNoRecords: "L'option autoGenerateColumns est activée, mais il n'y a aucune archive dans la source de données permettant de déterminer les colonnes",
			optionChangeNotSupported: "La modification de l'option suivante après la création de igGrid n'est pas prise en charge :",
			optionChangeNotScrollingGrid: "L'option suivante ne peut pas être modifiée après la création de la grille, car votre grille initiale ne défile pas et le re-rendering complet est nécessaire :",
			noPrimaryKeyDefined: "Aucune clé principale n'est définie pour la grille. Pour utiliser les fonctions telles que Grid Editing, vous devez définir une clé principale.",
			indexOutOfRange: "L'index des lignes que vous avez spécifié est hors plage.",
			noSuchColumnDefined: "La clé de colonne spécifiée ne coïncide avec aucune des colonnes définies de la grille.",
			columnIndexOutOfRange: "L'index de colonne spécifié est hors plage.",
			recordNotFound: "Impossible de trouver l'archive avec l'id spécifié dans la vue des données :",
			columnNotFound: "Aucune colonne coïncidant avec la clé :",
			colPrefix: "Colonne ",
			columnVirtualizationRequiresWidth: "Virtualisation / columnVirtualization est défini sur vrai, mais aucune largeur n'a pu être déduite pour les colonnes de la grille. Choisissez l'un des réglages a) largeur grille, b) defaultColumnWidth, c) définir largeur pour chaque colonne",
			virtualizationRequiresHeight: "Virtualisation est définie sur vrai, ce qui nécessite de définir également la hauteur de la grille.",
            colVirtualizationDenied: "columnVirtualization est applicable à la virtualisation fixe uniquement",
			noColumnsButAutoGenerateTrue: "L'option autoGenerateColumns est définie sur faux, mais aucune colonne du tableau n'est définie. Définissez l'option autoGenerateColumns sur vrai ou spécifiez des colonnes manuellement",
			noPrimaryKey: "Le widget igHierarchicalGrid nécessite la définition d'une clé principale.",
			templatingEnabledButNoTemplate: "L'option jQueryTemplating est définie sur vrai, mais aucun rowTemplate n'est défini.",
			expandTooltip: "Étendre la ligne",
			collapseTooltip: "Réduire la ligne",
			movingNotAllowedOrIncompatible: "Impossible de déplacer la colonne demandée. La colonne n'a pas été trouvée ou le résultat n'était pas compatible avec la disposition des colonnes."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Commence par...",
			endsWithNullText: "Finit par...",
			containsNullText: "Contient...",
			doesNotContainNullText: "Ne contient pas...",
			equalsNullText: "Est égal à...",
			doesNotEqualNullText: "Est différent de...",
			greaterThanNullText: "Supérieur à...",
			lessThanNullText: "Inférieur à...",
			greaterThanOrEqualToNullText: "Supérieur ou égal à...",
			lessThanOrEqualToNullText: "Inférieur ou égal à...",
			onNullText: "Le...",
			notOnNullText: "Pas le...",
			emptyNullText: "Vide",
			notEmptyNullText: "Pas vide",
			nullNullText: "Nul",
			notNullNullText: "Pas nul",
			startsWithLabel: "Commence par",
			endsWithLabel: "Finit par",
			containsLabel: "Contient",
			doesNotContainLabel: "Ne contient pas",
			equalsLabel: "Est égal à",
			doesNotEqualLabel: "Est différent de",
			greaterThanLabel: "Supérieur à",
			lessThanLabel: "Inférieur à",
			greaterThanOrEqualToLabel: "Supérieur ou égal à",
			lessThanOrEqualToLabel: "Inférieur ou égal à",
			trueLabel: "Vrai",
			falseLabel: "Faux",
			afterLabel: "Après",
			beforeLabel: "Avant",
			todayLabel: "Aujourd'hui",
			yesterdayLabel: "Hier",
			thisMonthLabel: "Ce mois",
			lastMonthLabel: "Mois précédent",
			nextMonthLabel: "Mois suivant",
			thisYearLabel: "Cette année",
			lastYearLabel: "Année précédente",
			nextYearLabel: "Année suivante",
			clearLabel: "Effacer le filtre",
			noFilterLabel: "Non",
			onLabel: "Le",
			notOnLabel: "Pas le",
			advancedButtonLabel: "Avancé",
			filterDialogCaptionLabel: "RECHERCHE AVANCEE",
			filterDialogConditionLabel1: "Afficher les rangées concordantes ",
			filterDialogConditionLabel2: " avec les critères suivants",
			filterDialogOkLabel: "Chercher",
			filterDialogCancelLabel: "Annuler",
			filterDialogAnyLabel: "N'IMPORTE LEQUEL",
			filterDialogAllLabel: "TOUS",
			filterDialogAddLabel: "Ajouter",
			filterDialogErrorLabel: "Nombre de filtres maximum excédé.",
			filterSummaryTitleLabel: "Résultats de la recherche",
			filterSummaryTemplate: "${matches} rangées concordantes",
			filterDialogClearAllLabel: "Effacer tous",
			tooltipTemplate: "${condition} filtre appliqué",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Masquer le filtre",
			featureChooserTextHide: "Afficher le filtre",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Filtre avancé",
			virtualizationSimpleFilteringNotAllowed: "Le filtrage simple (filtre ligne) n'est pas pris en compte si la virtualisation horizontale est activée. Placez le mode sur 'avancé' et/ou n'activez pas advancedModeEditorsVisible",
			featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier ig.ui.grid.featurechooser.js ou utiliser le chargeur ou utiliser l'un des fichiers de script combiné."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
		    emptyGroupByAreaContent: "Glissez une colonne ici ou {0} pour créer des groupes",
			emptyGroupByAreaContentSelectColumns: "sélectionnez les colonnes",
			emptyGroupByAreaContentSelectColumnsCaption: "sélectionnez les colonnes",
			expandTooltip: "Etendre ligne groupée",
			collapseTooltip: "Réduire ligne groupée",
			removeButtonTooltip: "Supprimer colonne groupée",
			featureChooserText: "Dégrouper par",
			featureChooserTextHide: "Grouper par",
			modalDialogCaptionButtonDesc: "Trier dans l'ordre croissant",
			modalDialogCaptionButtonAsc: "Trier dans l'ordre décroissant",
			modalDialogCaptionButtonUngroup: "Cliquez pour dégrouper",
			modalDialogGroupByButtonText: "Grouper par",
			modalDialogCaptionText: 'Ajouter à Grouper par',
			modalDialogDropDownLabel: 'Affichage :',
			modalDialogClearAllButtonLabel: 'Effacer tous',
			modalDialogRootLevelHierarchicalGrid: 'racine',
			modalDialogDropDownButtonCaption: "Afficher/Masquer",
			modalDialogButtonApplyText: 'Appliquer',
			modalDialogButtonCancelText: 'Annuler'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Choix de colonnes",
			hiddenColumnIndicatorTooltipText: "Colonnes masquées",
			columnHideText: "Masquer",
			columnChooserCaptionLabel: "Choix de colonnes",
			columnChooserCheckboxesHeader: "vue",
			columnChooserColumnsHeader: "colonne",
			columnChooserCloseButtonTooltip: "Fermer",
			hideColumnIconTooltip: "Masquer",
			featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier ig.ui.grille.choixfonctionnalité.js ou utiliser l'un des fichiers de script combiné.",
			columnChooserShowText: "Afficher",
			columnChooserHideText: "Masquer",
			columnChooserResetButtonLabel: "Réinitialiser",
			columnChooserButtonApplyText: 'Appliquer',
			columnChooserButtonCancelText: 'Annuler'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Afficher ",
			pageSizeDropDownTrailingLabel: "rangées",
			//pageSizeDropDownTemplate: "Afficher les rangées ${dropdown}",
			nextPageLabelText: "suiv",
			prevPageLabelText: "préc",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pg",
			currentPageDropDownTrailingLabel: "de ${count}",
			//currentPageDropDownTemplate: "Pg ${dropdown} de ${count}",
			currentPageDropDownTooltip: "Choisir la page",
			pageSizeDropDownTooltip: "Choisir le nombre de rangées par page",
			pagerRecordsLabelTooltip: "Plage de rangées actuelle",
			prevPageTooltip: "Aller à la page précédente",
			nextPageTooltip: "Aller à la page suivante",
			firstPageTooltip: "Aller à la première page",
			lastPageTooltip: "Aller à la dernière page",
			pageTooltipFormat: "page ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} de ${recordCount} rangées"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection n'est pas initialisé. Pour éviter de recevoir ce message d'erreur, veuillez activer la fonctionnalité Sélection pour la grille ou définir la propriété requireSelection de la fonction de Sélectionneurs de lignes sur faux."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'trié ${direction}',
			unsortedColumnTooltip: 'Cliquez pour trier la colonne',
			ascending: "dans l'ordre croissant",
			descending: "dans l'ordre décroissant",
			modalDialogSortByButtonText: 'trier par',
			modalDialogResetButton: "réinitialiser",
			modalDialogCaptionButtonDesc: "Trier dans l'ordre décroissant",
			modalDialogCaptionButtonAsc: "Trier dans l'ordre croissant",
			modalDialogCaptionButtonUnsort: "Annuler le tri",
			featureChooserText: "Trier selon Multiple",
			modalDialogCaptionText: "Trier Multiple",
			modalDialogButtonApplyText: 'Appliquer',
			modalDialogButtonCancelText: 'Annuler',
			sortingHiddenColumnNotSupport: "Le tri de la colonne masquée n'est pas pris en charge"
			//modalDialogButtonSlideCaption: "Afficher/Masquer les colonnes triées"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Masquer les sommaires",
			featureChooserTextHide: "Afficher les sommaires",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'Annuler',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Afficher/Masquer les sommaires',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Nombre',
			defaultSummaryRowDisplayLabelMin: 'Min',
			defaultSummaryRowDisplayLabelMax: 'Max',
			defaultSummaryRowDisplayLabelSum: 'Total',
			defaultSummaryRowDisplayLabelAvg: 'Moy',
			defaultSummaryRowDisplayLabelCustom: 'Personnalisé',
			calculateSummaryColumnKeyNotSpecified: "Indiquez la clé de colonne pour calculer le sommaire",
			featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier g.ui.grid.featurechooser.js ou utiliser l'un des fichiers de script combiné."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Terminé',
			doneTooltip: "Arrêter l'édition et mettre à jour",
			cancelLabel: 'Annuler',
			cancelTooltip: "Arrêter l'édition et ne pas mettre à jour",
			addRowLabel: 'Ajouter une ligne',
			addRowTooltip: 'Cliquez pour ajouter une ligne',
			deleteRowLabel: '',
			deleteRowTooltip: 'Supprimer une ligne',
			igEditorException: 'La mise à jour de ui.igGrid nécessite de charger ui.igEditor',
			igComboException: 'Pour utiliser le type combo pour ui.igGrid, ui.igCombo doit être chargé',
			igRatingException: 'Pour utiliser le igRating comme éditeur pour ui.igGrid, ui.igRating doit être chargé',
			igValidatorException: 'Les options de validation définies dans igGridUpdating requièrent de charger ui.igValidator',
			noPrimaryKeyException: "Pour la prise en charge des opérations de mise à jour après la suppression d'une ligne, l'application doit définir la 'primaryKey' dans les options de igGrid.",
			hiddenColumnValidationException: "Impossible d'éditer une ligne contenant une colonne masquée avec la validation activée.",
			dataDirtyException: "La grille contient des transactions en cours qui peuvent affecter le rendu des données. Pour éviter l'exception, l'application peut activer l'option 'autoCommit' d'igGrid ou elle doit traiter l'événement 'dataDirty' d'igGridUpdating et retourner la mention faux. Tout en traitant cet événement, l'application peut aussi 'archiver()' les données dans igGrid.",
			rowEditDialogCaptionLabel: 'Editer les données de ligne'
		}
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Appliquer',
            movingDialogButtonCancelText: 'Annuler',
            movingDialogCaptionButtonDesc: 'Descendre',
            movingDialogCaptionButtonAsc: 'Monter',
            movingDialogCaptionText: 'Déplacer les colonnes',
            movingDialogDisplayText: 'Déplacer les colonnes',
            dropDownMoveLeftText: 'Déplacer vers la gauche',
            dropDownMoveRightText: 'Déplacer vers la droite',
            dropDownMoveFirstText: 'Déplacer en premier',
            dropDownMoveLastText: 'Déplacer en dernier',
            featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier ig.ui.grid.featurechooser.js ou utiliser le chargeur ou utiliser l'un des fichiers de script combiné.",
            movingToolTipMove: 'Déplacer'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Cliquer pour verrouiller cette colonne',
            headerUnfixButtonText: 'Cliquer pour déverrouiller cette colonne'
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
			boldButtonTitle: 'Gras',
			italicButtonTitle: 'Italique',
			underlineButtonTitle: 'Souligné',
			strikethroughButtonTitle: 'Barré',
			increaseFontSizeButtonTitle: 'Agrandir la police',
			decreaseFontSizeButtonTitle: 'Réduire la police',
			alignTextLeftButtonTitle: 'Aligner le texte à gauche',
			alignTextRightButtonTitle: 'Aligner le texte à droite',
			alignTextCenterButtonTitle: 'Centrer',
			justifyButtonTitle: 'Justifier',
			bulletsButtonTitle: 'Puces',
			numberingButtonTitle: 'Numérotation',
			decreaseIndentButtonTitle: 'Diminuer le retrait',
			increaseIndentButtonTitle: 'Augmenter le retrait',
			insertPictureButtonTitle: 'Insérer une image',
			fontColorButtonTitle: 'Couleur de police',
			textHighlightButtonTitle: 'Couleur de surbrillance du texte',
			insertLinkButtonTitle: 'Insérer un lien hypertexte',
			insertTableButtonTitle: 'Tableau',
			addRowButtonTitle: 'Ajouter une ligne',
			removeRowButtonTitle: 'Supprimer une ligne',
			addColumnButtonTitle: 'Ajouter une colonne',
			removeColumnButtonTitle: 'Supprimer une colonne',
			inserHRButtonTitle: 'Insérer une règle horizontale',
			viewSourceButtonTitle: 'Afficher la source',
			cutButtonTitle: 'Couper',
			copyButtonTitle: 'Copier',
			pasteButtonTitle: 'Coller',
			undoButtonTitle: 'Annuler',
			redoButtonTitle: 'Rétablir',
			imageUrlDialogText: 'URL image :',
			imageAlternativeTextDialogText: 'Texte alternatif :',
			imageWidthDialogText: "Largeur de l'image :",
			imageHeihgtDialogText: "Hauteur de l'image :",
			linkNavigateToUrlDialogText: "Naviguer vers l'URL :",
			linkDisplayTextDialogText: 'Afficher le texte :',
			linkOpenInDialogText: 'Ouvrir dans :',
			linkTargetNewWindowDialogText: 'Nouvelle fenêtre',
			linkTargetSameWindowDialogText: 'Même fenêtre',
			linkTargetParentWindowDialogText: 'Fenêtre parent',
			linkTargetTopmostWindowDialogText: 'Fenêtre supérieure',
			applyButtonTitle: 'Appliquer',
			cancelButtonTitle: 'Annuler',
			collapseButtonTitle: 'Réduire',
			expandButtonTitle: 'Etendre',
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
					{ text: "h1", value: "En-tête 1" },
					{ text: "h2", value: "En-tête 2" },
					{ text: "h3", value: "En-tête 3" },
					{ text: "h4", value: "En-tête 4" },
					{ text: "h5", value: "En-tête 5" },
					{ text: "h6", value: "En-tête 6" }
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
            invalidDataSource: "La source de données spécifiée est nulle ou n'est pas prise en charge.",
            measureList: "Mesures",
            ok: "OK",
            cancel: "Annuler",
            addToMeasures: "Ajouter aux Mesures",
            addToFilters: "Ajouter aux Filtres",
            addToColumns: "Ajouter aux Colonnes",
            addToRows: "Ajouter aux Lignes"
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
            invalidBaseElement: " n'est pas pris en charge comme élément de base. Utiliser plutôt DIV.",
            catalog: "Catalogue",
            cube: "Cube",
            measureGroup: "Groupe de mesures",
            measureGroupAll: "(Tous)",
            rows: "Lignes",
            columns: "Colonnes",
            measures: "Mesures",
            filters: "Filtres",
            deferUpdate: "Différer la mise à jour",
            updateLayout: "Mettre à jour la disposition",
            selectAll: "Sélectionner tout"
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
            filtersHeader: "Placer les champs de filtre ici",
            measuresHeader: "Placer les éléments de données ici",
            rowsHeader: "Placer les champs de ligne ici",
            columnsHeader: "Placer les champs de colonne ici",
            disabledFiltersHeader: "Champs de filtre",
            disabledMeasuresHeader: "Éléments de données",
            disabledRowsHeader: "Champs de ligne",
            disabledColumnsHeader: "Champs de colonne",
            noSuchAxis: "Aucun axe de ce type"
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
		    errorPanels: 'Le nombre de panneaux ne doit pas être supérieur à deux.'
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
		    renderDataError: "Échec de la récupération ou de l'analyse des données.",
		    columnWidthUnitError: "La largeur de colonne saisie n'est pas une unité reconnue. Utiliser px, % ou entrer un nombre : ",
		    columnHeightUnitError: "La hauteur de colonne saisie n'est pas une unité reconnue. Utiliser px, % ou entrer un nombre : "
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
			invalidArgumentType: "Type d'argument fourni invalide.",
			errorOnRequest: "Une erreur s'est produite pendant la récupération des données : ",
			noDataSourceUrl: 'La commande igTree requiert une dataSourceUrl pour initier une requête de données pour cette URL.',
			incorrectPath: 'Un nœud a été trouvé sur le chemin fourni : ',
			incorrectNodeObject: "L'argument fourni n'est pas un élément de nœud jQuery.",
			setOptionError: "Les modifications de temps d'exécution ne sont pas autorisées pour l'option suivante : ",
			moveTo: '<strong>Déplacer vers</strong> {0}',
			moveBetween: '<strong>Déplacer entre</strong> {0} et {1}',
			moveAfter: '<strong>Déplacer après</strong> {0}',
			moveBefore: '<strong>Déplacer avant</strong> {0}',
			copyTo: '<strong>Copier vers</strong> {0}',
			copyBetween: '<strong>Copier entre</strong> {0} et {1}',
			copyAfter: '<strong>Copier après</strong> {0}',
			copyBefore: '<strong>Copier avant</strong> {0}',
			and: 'et'
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
			labelUploadButton: "Charger le fichier",
			labelAddButton: "Ajouter",
			labelClearAllButton: "Effacer chargés",
			// M.H. 13 May 2011 - fix bug 75042
			labelSummaryTemplate: "{0} de {1} chargés",
			labelSummaryProgressBarTemplate: "{0}/{1}",
			labelShowDetails: "Afficher Détails",
			labelHideDetails: "Masquer Détails",
			labelSummaryProgressButtonCancel: "Annuler",
			// M.H. 1 June 2011 Fix bug #77532
			labelSummaryProgressButtonContinue: "Charger",
			labelSummaryProgressButtonDone: "Terminé",
			labelProgressBarFileNameContinue: "...",

			//error messages
			errorMessageFileSizeExceeded: "Taille de fichier maxi excédée.",
			errorMessageGetFileStatus: "Impossible d'obtenir votre statut de fichier actuel ! Connexion probablement perdue.",
			errorMessageCancelUpload: "Impossible d'envoyer au serveur l'ordre d'annuler le chargement ! Connexion probablement perdue.",
			errorMessageNoSuchFile: "Impossible de trouver le fichier demandé. Fichier probablement trop gros.",
			errorMessageOther: "Erreur interne lors du chargement du fichier. Code d'erreur : {0}.",
			errorMessageValidatingFileExtension: "Echec validation de l'extension du fichier.",
			errorMessageAJAXRequestFileSize: "Erreur AJAX lors de la détermination de la taille du fichier.",
			errorMessageMaxUploadedFiles: "Nombre maxi de fichiers chargés excédé.",
			errorMessageMaxSimultaneousFiles: "La valeur igTree est incorrecte. Elle doit être supérieure ou égale à 0.",
			errorMessageTryToRemoveNonExistingFile: "Vous essayez de supprimer un fichier qui n'existe pas avec l'id {0}.",
			errorMessageTryToStartNonExistingFile: "Vous essayez de démarrer un fichier qui n'existe pas avec l'id {0}.",

			// M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			// title attributes            
			titleUploadFileButtonInit: "Charger le fichier",
			titleAddFileButton: "Ajouter",
			titleCancelUploadButton: "Annuler",
			// M.H. 1 June 2011 Fix bug #77532
			titleSummaryProgressButtonContinue: "Charger",
			titleClearUploaded: "Effacer chargés",
			titleShowDetailsButton: "Afficher Détails",
			titleHideDetailsButton: "Masquer Détails",
			titleSummaryProgressButtonCancel: "Annuler",
			titleSummaryProgressButtonDone: "Terminé",
			// M.H. 1 June 2011 Fix bug #77532
			titleSingleUploadButtonContinue: "Charger",
			titleClearAllButton: "Effacer chargés"
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
			defaultMessage: 'Veuillez réparer ce champ',
			selectMessage: 'Veuillez sélectionner une valeur',
			rangeSelectMessage: 'Veuillez sélectionner au maximum {0} et au minimum {1} éléments',
			minSelectMessage: 'Veuillez sélectionner au moins {0} éléments',
			maxSelectMessage: 'Veuillez sélectionner au maximum {0} éléments',
			rangeLengthMessage: 'Veuillez entrer une valeur contenant {0} à {1} caractères',
			minLengthMessage: 'Veuillez entrer au moins {0} caractères',
			maxLengthMessage: 'Veuillez sélectionner au maximum {0} caractères',
			requiredMessage: 'Ce champ est obligatoire',
			maskMessage: 'Veuillez remplir tous les postes requis',
			dateFieldsMessage: 'Veuillez entrer des valeurs dans les champs de dates',
			invalidDayMessage: 'Jour du mois invalide. Veuillez entrer un jour correct',
			dateMessage: 'Veuillez entrer une date valide',
			numberMessage: 'Veuillez entrer un nombre valide',
			rangeMessage: 'Veuillez entrer une valeur entre {0} et {1}',
			minMessage: 'Veuillez entrer une valeur supérieure ou égale à {0}',
			maxMessage: 'Veuillez entrer une valeur inférieure ou égale à {0}'
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
			liveStream: "Vidéo en direct",
			live: "En direct",
			paused: "Pause",
			playing: "Lecture en cours",
			play: 'Lecture',
			volume: "Volume",
			unsupportedVideoSource: "Les sources de la vidéo actuelles ne contiennent pas un format pris en charge par votre navigateur.",
			missingVideoSource: "Source vidéo incompatible.",
			progressLabelLongFormat: "$currentTime$ / $duration$",
			progressLabelShortFormat: "$currentTime$",
			enterFullscreen: "Plein écran",
			exitFullscreen: "Quitter plein écran",
			skipTo: "PASSER A",
			unsupportedBrowser: "Le navigateur actuel ne prend pas en charge les vidéos HTML5. <br/>Essayez la mise à niveau vers l'une des versions suivantes :",
			currentBrowser: "Navigateur actuel : {0}",
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
			buffering: 'Mise en mémoire tampon...',
			adMessage: 'Publicité : La vidéo reprendra dans $duration$ secondes.',
			adMessageLong: 'Publicité : La vidéo reprendra dans $duration$.',
			adMessageNoDuration: 'Publicité : La vidéo reprendra après la publicité.',
			adNewWindowTip: 'Publicité : Cliquez pour ouvrir le contenu de la publicité dans une nouvelle fenêtre.',
			nonDivException: 'Le lecteur vidéo Infragistics HTML5 peut uniquement être instancié sur une balise DIV.',
			relatedVideos: 'VIDÉOS RELIÉES',
			replayButton: 'Rejouer',
			replayTooltip: 'Cliquer pour rejouer la dernière vidéo.'
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
			unsupportedBrowser: "Le navigateur actuel ne prend pas en charge l'élément canvas HTML5. <br/>Essayez la mise à niveau vers l'une des versions suivantes :",
			currentBrowser: "Navigateur actuel : {0}",
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



﻿/*!@license
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
            noSuchWidget: "Следният widget не е зареден: ",
            autoGenerateColumnsNoRecords: "autoGenerateColumns е позволено, но няма записи в източника на данни за да могат да бъдат генерирани колони",
            optionChangeNotSupported: "Промяната на следната опция след инициализация на igGrid не се поддържа:",
            optionChangeNotScrollingGrid: "Промяната на следната опция след инициализация на igGrid не се поддържа, защото първоначалната ви конфигурация не е включвала scrolling и грида се нуждае от повторно рендериране:",
            noPrimaryKeyDefined: "Нямате дефиниран primary key. За да използвате features като Grid Editing, ви трябва дефиниран primary key.",
            indexOutOfRange: "Индексът на ред, който сте въвели, е извън големината на колекцията.",
            noSuchColumnDefined: "Подаденият column key не отговаря на нито един о тези на дефинираните колони.",
            columnIndexOutOfRange: "Индексът на колоната, който сте въвели, е извън големината на колекцията.",
            recordNotFound: "Записът със следното id не може да бъде намерен в колекцията от данни:",
            columnNotFound: "Колоната със следния key не може да бъде намерена:",
            colPrefix: "Колона ",
            columnVirtualizationRequiresWidth: "Имате позволена virtualization / columnVirtualization, но няма широчина, която да може да бъде  инферирана за колоните на грида. Трябва да дефинирате a) широчина, b) опцията defaultColumnWidth, c) широчина за всяка колона",
            virtualizationRequiresHeight: "Имате позволена virtualization, което изисква височината на грида да бъде дефинирана.",
            colVirtualizationDenied: "columnVirtualization се отнася само за виртуализация със мод fixed.",
            noColumnsButAutoGenerateTrue: "Имате забранено autoGenerateColumns, но нямате дефинирани колони за грида. Моля разрешете autoGenerateColumns или дефинирайте колони.",
            noPrimaryKey: "igHierarchicalGrid widget изисква дефиниран primary key.",
            //templatingEnabledButNoTemplate: "You have jQueryTemplating set to true, but there is no rowTemplate defined.",
            expandTooltip: "Отвори реда",
            collapseTooltip: "Затвори реда",
            movingNotAllowedOrIncompatible: "Преместването на съответната колона не може да бъде извършено. Колоната не е намерена или резултатът не е съвместим с оформлението на колоните."
        }
    });

    $.ig.GridFiltering = $.ig.GridFiltering || {};

    $.extend($.ig.GridFiltering, {
        locale: {
            startsWithNullText: "Започва с...",
            endsWithNullText: "Завършва на...",
            containsNullText: "Съдържа...",
            doesNotContainNullText: "Не съдържа...",
            equalsNullText: "Равно на...",
            doesNotEqualNullText: "Не е равно на...",
            greaterThanNullText: "По-голямо от...",
            lessThanNullText: "По-малко от...",
            greaterThanOrEqualToNullText: "По-голямо или равно на...",
            lessThanOrEqualToNullText: "По-малко или равно на...",
            onNullText: "На...",
            notOnNullText: "Не на...",
            emptyNullText: "Празно",
            notEmptyNullText: "Не е празно",
            nullNullText: "Null",
            notNullNullText: "Не е null",
            startsWithLabel: "Започва с",
            endsWithLabel: "Завършва на",
            containsLabel: "Съдържа",
            doesNotContainLabel: "Не съдържа",
            equalsLabel: "Равно на",
            doesNotEqualLabel: "Не е равно на",
            greaterThanLabel: "По-голямо от",
            lessThanLabel: "По-малко от",
            greaterThanOrEqualToLabel: "По-голямо или равно на",
            lessThanOrEqualToLabel: "По-малко или равно на",
            trueLabel: "True",
            falseLabel: "False",
            afterLabel: "След",
            beforeLabel: "Преди",
            todayLabel: "Днес",
            yesterdayLabel: "Вчера",
            thisMonthLabel: "Този месец",
            lastMonthLabel: "Миналият месец",
            nextMonthLabel: "Следващият месец",
            thisYearLabel: "Тази година",
            lastYearLabel: "Миналата година",
            nextYearLabel: "Следващата година",
            clearLabel: "Изчисти филтърът",
            noFilterLabel: "Не",
            onLabel: "На",
            notOnLabel: "Не на",
            advancedButtonLabel: "Подробно",
            filterDialogCaptionLabel: "Подробно търсене",
            filterDialogConditionLabel1: "Покажи записите отговарящи ",
            filterDialogConditionLabel2: " на следния критерий",
            filterDialogOkLabel: "Търси",
            filterDialogCancelLabel: "Отказ",
            filterDialogAnyLabel: "Който и да е",
            filterDialogAllLabel: "Всички",
            filterDialogAddLabel: "Прибави",
            filterDialogErrorLabel: "Надхвърлен е максималният брой филтри.",
            filterSummaryTitleLabel: "Резултати от търсенето",
            filterSummaryTemplate: "${matches} отговарящи записи",
            filterDialogClearAllLabel: "Изчисти всички филтри",
            tooltipTemplate: "${condition} филтър приложен",
            // M.H. 13 Oct. 2011 Fix for bug #91007
            featureChooserText: "Скрий филтъра",
            featureChooserTextHide: "Покажи филтъра",
            // M.H. 17 Oct. 2011 Fix for bug #91007
            featureChooserTextAdvancedFilter: "Подробен филтър",
            virtualizationSimpleFilteringNotAllowed: "Когато е разрешен хоризонтален virtualization, простият филтър (filter row) не се поддържа. Моля прехвърлете в режим на подробно търсене (advanced mode) и/или забранете advancedModeEditorsVisible",
            featureChooserNotReferenced: "Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка моля реферирайте ig.ui.grid.featurechooser.js или използвайте някой от комбинираните скриптови файлове."
        }
    });

    $.ig.GridGroupBy = $.ig.GridGroupBy || {};

    $.extend($.ig.GridGroupBy, {
        locale: {
            emptyGroupByAreaContent: "Издърпайте колона до тук или {0} за да групирате",
            emptyGroupByAreaContentSelectColumns: "изберете колони",
            emptyGroupByAreaContentSelectColumnsCaption: "изберете колони",
            expandTooltip: "Отвори групирания ред",
            collapseTooltip: "Затвори групирания ред",
            removeButtonTooltip: "Премахни групирането по тази колона",
            featureChooserText: "Премахни групирането",
            featureChooserTextHide: "Групирай",
            modalDialogCaptionButtonDesc: "Натисни за сортиране в възходящ ред",
            modalDialogCaptionButtonAsc: "Натисни за сортиране в низходящ ред",
            modalDialogCaptionButtonUngroup: "Натисни за премахване на групирането",
            modalDialogGroupByButtonText: "Групирай",
            modalDialogCaptionText: 'Прибави към групирането',
            modalDialogDropDownLabel: 'Показване:',
            modalDialogClearAllButtonLabel: 'изчисти всички',
            modalDialogRootLevelHierarchicalGrid: 'Най-горно ниво',
            modalDialogDropDownButtonCaption: "Натисни за показване/скриване",
            modalDialogButtonApplyText: 'Приложи',
            modalDialogButtonCancelText: 'Отказ'
        }
    });

    $.ig.GridHiding = $.ig.GridHiding || {};

    $.extend($.ig.GridHiding, {
        locale: {
            columnChooserDisplayText: "Избиране на колони",
            hiddenColumnIndicatorTooltipText: "Скрита колона/колони",
            columnHideText: "Скрий",
            columnChooserCaptionLabel: "Избиране на колони",
            columnChooserCheckboxesHeader: "покажи",
            columnChooserColumnsHeader: "колона",
            columnChooserCloseButtonTooltip: "Затвори",
            hideColumnIconTooltip: "Скрий",
            featureChooserNotReferenced: "Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка моля реферирайте ig.ui.grid.featurechooser.js или използваите някой от комбинираните скриптови файлове.",
            columnChooserShowText: "Покажи",
            columnChooserHideText: "Скрий",
            columnChooserResetButtonLabel: "върни към начално състояние",
            columnChooserButtonApplyText: 'Приложи',
            columnChooserButtonCancelText: 'Отказ'
        }
    });

    $.ig.GridPaging = $.ig.GridPaging || {};

    $.extend($.ig.GridPaging, {

        locale: {
            pageSizeDropDownLabel: "Покажи ",
            pageSizeDropDownTrailingLabel: "записи",
            //pageSizeDropDownTemplate: "Show ${dropdown} records",
            nextPageLabelText: "следваща",
            prevPageLabelText: "предишна",
            firstPageLabelText: "",
            lastPageLabelText: "",
            currentPageDropDownLeadingLabel: "Страница",
            currentPageDropDownTrailingLabel: "от ${count}",
            //currentPageDropDownTemplate: "Pg ${dropdown} of ${count}",
            currentPageDropDownTooltip: "Избиране на страница",
            pageSizeDropDownTooltip: "Избиране на брой записи на страница",
            pagerRecordsLabelTooltip: "Граници на показаните записи",
            prevPageTooltip: "отиди на предишната страница",
            nextPageTooltip: "отиди на следващата страница",
            firstPageTooltip: "отиди на първата страница",
            lastPageTooltip: "отиди на последната страница",
            pageTooltipFormat: "страница ${index}",
            pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} от ${recordCount} записа"
        }
    });

    $.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

    $.extend($.ig.GridRowSelectors, {

        locale: {
            selectionNotLoaded: "igGridSelection не е инициализиран. За да не получавате тази грешка, моля добавете Selection feature за грида или променете requireSelection опцията за Row Selectors feature да бъде равна на false."
        }
    });

    $.ig.GridSorting = $.ig.GridSorting || {};

    $.extend($.ig.GridSorting, {
        locale: {
            sortedColumnTooltipFormat: 'сортирано ${direction}',
            unsortedColumnTooltip: 'натиснете за да сортирате',
            ascending: 'възходящ ред',
            descending: 'низходящ ред',
            modalDialogSortByButtonText: 'сортирай по',
            modalDialogResetButton: "върни към начално състояние",
            modalDialogCaptionButtonDesc: "Натиснете, за да сортирате в низходящ ред",
            modalDialogCaptionButtonAsc: "Натиснете, за да сортирате във възходящ ред",
            modalDialogCaptionButtonUnsort: "Натиснете, за да премахнете сортирането",
            featureChooserText: "Сортиране по множество колони",
            modalDialogCaptionText: "Сортиране по множество колони",
            modalDialogButtonApplyText: 'Приложи',
            modalDialogButtonCancelText: 'Отказ',
            sortingHiddenColumnNotSupport: 'Сортирането на скрити колони не се поддържа'
            //modalDialogButtonSlideCaption: "Click to show/hide sorted columns"
        }
    });

    $.ig.GridSummaries = $.ig.GridSummaries || {};

    $.extend($.ig.GridSummaries, {
        locale: {
            featureChooserText: "Скрий обобщените стойности",
            featureChooserTextHide: "Покажи обобщените стойности",
            dialogButtonOKText: 'OK',
            dialogButtonCancelText: 'Отказ',
            emptyCellText: '',
            summariesHeaderButtonTooltip: 'Покажи/Скрий обобщените стойности',
            // M.H. 13 Oct. 2011 Fix for bug 91008
            defaultSummaryRowDisplayLabelCount: 'Брой',
            defaultSummaryRowDisplayLabelMin: 'Минимум',
            defaultSummaryRowDisplayLabelMax: 'Максимум',
            defaultSummaryRowDisplayLabelSum: 'Сума',
            defaultSummaryRowDisplayLabelAvg: 'Осреднено',
            defaultSummaryRowDisplayLabelCustom: '',
            calculateSummaryColumnKeyNotSpecified: "Моля, задайте идентификатор на колона, за да изчислите обобщените стойности",
            featureChooserNotReferenced: "Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка, моля реферирайте ig.ui.grid.featurechooser.js или използваите някой от комбинираните скриптови файлове."
        }
    });

    $.ig.GridUpdating = $.ig.GridUpdating || {};

    $.extend($.ig.GridUpdating, {
        locale: {
            doneLabel: 'Готово',
            doneTooltip: 'Излез и запази промените',
            cancelLabel: 'Отказ',
            cancelTooltip: 'Излез без да запазваш промените',
            addRowLabel: 'Пробави нов ред',
            addRowTooltip: 'Натисни, за да започнеш прибавянето на нов ред',
            deleteRowLabel: '',
            deleteRowTooltip: 'Изтрий реда',
            igEditorException: 'Манипулирането на данни в ui.igGrid изисква ui.igEditor да бъде зареден',
            igComboException: 'За да използвате combo като едитор в ui.igGrid е нужно ui.igCombo да бъде зареден',
            igRatingException: 'За да използвате igRating като едитор в ui.igGrid е нужно ui.igRating да бъде зареден',
            igValidatorException: 'Опциите за валидация в igGridUpdating изискват ui.igValidator да бъде зареден',
            noPrimaryKeyException: 'Манипулационни операции върху данни след изтриването на ред се поддържат само ако имате дефиниран "primaryKey" в опциите на грида.',
            hiddenColumnValidationException: 'Ред със скрита колона не може да бъде променян ако имате включена валидация.',
            dataDirtyException: 'Гридът има неизчистени транзакции, което може да повлияе на рендерирането на данните. За да предотвратите грешки, можете да разрешите опцията "autoCommit" в грида, или да прихванете събитието "dataDirty" от igGridUpdating и да го отмените. Докато обработвате това събитие, приложението ви може също така да извършва "commit()" на данни в грида.',
            rowEditDialogCaptionLabel: 'Редактирай данните в реда'
        }
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Приложи',
            movingDialogButtonCancelText: 'Отказ',
            movingDialogCaptionButtonDesc: 'Премести надолу',
            movingDialogCaptionButtonAsc: 'Премести нагоре',
            movingDialogCaptionText: 'Премести колоните',
            movingDialogDisplayText: 'Премести колоните',
            dropDownMoveLeftText: 'Премести наляво',
            dropDownMoveRightText: 'Премести надясно',
            dropDownMoveFirstText: 'Премести в началото',
            dropDownMoveLastText: 'Премести в края',
            featureChooserNotReferenced: 'Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка, моля реферирайте ig.ui.grid.featurechooser.js или използваите някой от комбинираните скриптови файлове.',
            movingToolTipMove: 'Премести'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Щракни, за да фиксираш колоната',
            headerUnfixButtonText: 'Щракни, за да освободиш колоната'
        }
    });

}

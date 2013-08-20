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
			invalidDataSource: "指定したデータ ソースは無効です。スカラーです。",
			unknownDataSource: "データ ソース型を決定できません。JSON または XML データであるかどうかを指定してください。",
			errorParsingArrays: "配列データを解析して定義したデータ スキーマを適用したときにエラーが発生しました。 ",
			errorParsingJson: "JSON データを解析して定義したデータ スキーマを適用したときにエラーが発生しました。 ",
			errorParsingXml: "XML データを解析して定義したデータ スキーマを適用したときにエラーが発生しました。 ",
			errorParsingHtmlTable: "HTML テーブルからデータを展開してスキーマを適用したときにエラーが発生しました。 ",
			errorExpectedTbodyParameter: "パラメーターは tbody または table である必要があります。",
			errorTableWithIdNotFound: "この ID を持つ HTML テーブルが見つかりませんでした:  ",
			errorParsingHtmlTableNoSchema: "テーブルの DOM の分析でエラーが発生しました:  ",
			errorParsingJsonNoSchema: "JSON 文字列の分析または評価でエラーが発生しました: ",
			errorParsingXmlNoSchema: "XML 文字列の分析でエラーが発生しました: ",
			errorXmlSourceWithoutSchema: "指定したデータ ソースは XML ドキュメントですが、データ スキーマ ($.IgDataSchema) が定義されていません。 ",
			errorUnrecognizedFilterCondition: "渡されたフィルター条件は無効です。 ",
			errorRemoteRequest: "データを取得するリモート要求に失敗しました。 ",
			errorSchemaMismatch: "入力データがスキーマと一致しません。このフィールドをマップできませんでした:  ",
			errorSchemaFieldCountMismatch: "入力のデータがスキーマと一致しません。フィールド数が無効です。 ",
			errorUnrecognizedResponseType: "応答型が正しく設定されなかったか、自動的に検出できませんでした。settings.responseDataType または settings.responseContentType を設定してください。",
			hierarchicalTablesNotSupported: "HierarchicalSchema でテーブルをサポートしません。",
			cannotBuildTemplate: "jQuery テンプレートをビルドできませんでした。データ ソースでレコードがないし、列が定義されていません。",
			unrecognizedCondition: "この式で無効なフィルター条件があります:  ",
			fieldMismatch: "この式で無効なフィールドまたはフィルター条件があります:  ",
			noSortingFields: "フィールドが指定されていません。sort() を呼び出すときに、並べ替えるフィールドを 1 つ以上を指定する必要があります。",
			filteringNoSchema: "スキーマまたはフィールドが指定されていません。データ ソースをフィルターするには、フィールド定義および型を含むスキーマを指定する必要があります。"
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
			seriesName: "オプションを設定するときに、シリーズ名のオプションを指定する必要があります。",
			axisName: "オプションを設定するときに、軸名のオプションを指定する必要があります。",
			close: "閉じる",
			overview: "概要",
			zoomOut: "ズームアウト",
			zoomIn: "ズームイン",
			resetZoom: "ズームのリセット"
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
		    popoverOptionChangeNotSupported: "igPopover が初期化された後のこのオプションの変更はサポートされません:"
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
		    undefinedArgument: 'データ ソース プロパティを取得する際にエラーが発生しました: '
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
			noMatchFoundText: '結果はありません',
			dropDownButtonTitle: 'ドロップダウンの表示',
			clearButtonTitle: '値をクリア'
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
			closeButtonTitle: "閉じる",
			minimizeButtonTitle: "最小化",
			maximizeButtonTitle: "最大化",
			pinButtonTitle: "ピン固定",
			unpinButtonTitle: "ピン固定の解除",
			restoreButtonTitle: "元に戻す"
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
			spinUpperTitle: '増やす',
			spinLowerTitle: '減らす',
			buttonTitle: 'リストの表示',
			clearTitle: '値をクリア',
			datePickerButtonTitle: 'カレンダーの表示',
			updateModeUnsupportedValue: 'updateMode オプションは「onChange」および「immediate」の 2 つの値をサポートします。'
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
			noSuchWidget: "ウィジェットは読み込まれていません: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns が有効ですが、データ ソースに列を決定するレコードがありません。",
			optionChangeNotSupported: "igGrid が作成された後のこのオプションを変更はサポートされません: ",
			optionChangeNotScrollingGrid: "最初のグリッドのスクロールが無効で、すべて再描画する必要があるため、グリッドを作成した後にこのオプションは変更できません: ",
			noPrimaryKeyDefined: "グリッドのプライマリ キーがありません。グリッド編集などの機能を使用するためには、プライマリ キーを定義する必要があります。",
			indexOutOfRange: "指定した行インデックスは範囲外です。",
			noSuchColumnDefined: "指定した列キーは定義したグリッド列と一致しません。",
			columnIndexOutOfRange: "指定した列インデックスは範囲外です。",
			recordNotFound: "指定した ID のレコードがデータ ビューで見つかりませんでした。",
			columnNotFound: "このキーと一致する列が見つかりませんでした: ",
			colPrefix: "列 ",
			columnVirtualizationRequiresWidth: "仮想化または columnVirtualization を True に設定しましたが、グリッド列の幅が推論できません。グリッドの幅、defaultColumnWidth、または各列の幅を設定する必要があります。",
			virtualizationRequiresHeight: "仮想化を True に設定する場合、グリッドの高さも設定する必要があります。",
			colVirtualizationDenied: "columnVirtualization は固定仮想化にのみ適用できます。",
			noColumnsButAutoGenerateTrue: "autoGenerateColumns は False に設定されていますが、グリッドに列が定義されていません。autoGenerateColumns を True に設定するか、手動的に列を指定する必要があります。",
			noPrimaryKey: "igHierarchicalGrid ウィジェットで定義されたプライマリ キーが必要です。",
			templatingEnabledButNoTemplate: "jQueryTemplating は True に設定されていますが、rowTemplate が定義されていません。",
			expandTooltip: "行の展開",
			collapseTooltip: "行の縮小",
			movingNotAllowedOrIncompatible: "要求した列の移動を実行できません。列が見つからないか、結果が列レイアウトと互換性のない可能性があります。"
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {

		locale: {
			startsWithNullText: "～で始まる",
			endsWithNullText: "～で終わる",
			containsNullText: "含む",
			doesNotContainNullText: "含まない",
			equalsNullText: "等しい",
			doesNotEqualNullText: "等しくない",
			greaterThanNullText: "～より大きい",
			lessThanNullText: "～より小さい",
			greaterThanOrEqualToNullText: "以上",
			lessThanOrEqualToNullText: "以下",
			onNullText: "指定日",
			notOnNullText: "指定日以外",
			emptyNullText: "空",
			notEmptyNullText: "空以外",
			nullNullText: "null 値",
			notNullNullText: "null 値以外",
			startsWithLabel: "～で始まる",
			endsWithLabel: "～で終わる",
			containsLabel: "含む",
			doesNotContainLabel: "含まない",
			equalsLabel: "等しい",
			doesNotEqualLabel: "等しくない",
			greaterThanLabel: "～より大きい",
			lessThanLabel: "～より小さい",
			greaterThanOrEqualToLabel: "以上",
			lessThanOrEqualToLabel: "以下",
			trueLabel: "True",
			falseLabel: "False",
			afterLabel: "～の後",
			beforeLabel: "～の前",
			todayLabel: "今日",
			yesterdayLabel: "昨日",
			thisMonthLabel: "今月",
			lastMonthLabel: "先月",
			nextMonthLabel: "翌月",
			thisYearLabel: "今年",
			lastYearLabel: "昨年",
			nextYearLabel: "来年",
			clearLabel: "フィルターをクリア",
			noFilterLabel: "0",
			onLabel: "指定日",
			notOnLabel: "指定日以外",
			advancedButtonLabel: "詳細",
			filterDialogCaptionLabel: "詳細検索",
			filterDialogConditionLabel1: "以下の条件の",
			filterDialogConditionLabel2: "と一致するレコードを表示",
			filterDialogOkLabel: "OK",
			filterDialogCancelLabel: "キャンセル",
			filterDialogAnyLabel: "いずれか",
			filterDialogAllLabel: "すべて",
			filterDialogAddLabel: "追加",
			filterDialogErrorLabel: "最大フィルター数を超えました。",
			filterSummaryTitleLabel: "検索結果",
			filterSummaryTemplate: "一致するレコード: ${matches}",
			filterDialogClearAllLabel: "すべてクリア",
			tooltipTemplate: "${condition} フィルターを適用しています",
			featureChooserText: "フィルターの非表示",
			featureChooserTextHide: "フィルターの表示",
			featureChooserTextAdvancedFilter: "詳細フィルター",
			virtualizationSimpleFilteringNotAllowed: "水平方向の仮想化が有効な場合、簡易のフィルタリング (フィルター行) はサポートされません。モードを「advanced」に設定するか、advancedModeEditorsVisible を無効にしてください。",
			featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。"
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {

		locale: {
			emptyGroupByAreaContent: "グループ化するには、列をここへドラッグするか、{0}します。",
			emptyGroupByAreaContentSelectColumns: "列を選択",
			emptyGroupByAreaContentSelectColumnsCaption: "列を選択",
			expandTooltip: "グループ化された行を展開する",
			collapseTooltip: "グループ化された行を縮小する",
			removeButtonTooltip: "列のグループ化を解除する",
			featureChooserText: "グループ化の解除",
			featureChooserTextHide: "グループ化",
			modalDialogCaptionButtonDesc: "クリックして昇順に並べ替える",
			modalDialogCaptionButtonAsc: "クリックして降順に並べ替える",
			modalDialogCaptionButtonUngroup: "クリックしてグループ化を解除する",
			modalDialogGroupByButtonText: "グループ化",
			modalDialogCaptionText: 'グループ化に追加する',
			modalDialogDropDownLabel: '表示: ',
			modalDialogClearAllButtonLabel: 'すべてクリア',
			modalDialogRootLevelHierarchicalGrid: 'ルート',
			modalDialogDropDownButtonCaption: "クリックして表示状態を切り替える",
			modalDialogButtonApplyText: '適用',
			modalDialogButtonCancelText: 'キャンセル'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "列の選択",
			hiddenColumnIndicatorTooltipText: "非表示列",
			columnHideText: "非表示",
			columnChooserCaptionLabel: "列の選択",
			columnChooserCheckboxesHeader: "ビュー",
			columnChooserColumnsHeader: "列",
			columnChooserCloseButtonTooltip: "閉じる",
			hideColumnIconTooltip: "非表示",
			featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。",
			columnChooserShowText: "表示",
			columnChooserHideText: "非表示",
			columnChooserResetButtonLabel: "リセット",
			columnChooserButtonApplyText: '適用',
			columnChooserButtonCancelText: 'キャンセル'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "表示: ",
			pageSizeDropDownTrailingLabel: "レコード",
			//pageSizeDropDownTemplate: "${dropdown} レコードの表示",
			nextPageLabelText: "次へ",
			prevPageLabelText: "前へ",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "ページ",
			currentPageDropDownTrailingLabel: " / ${count}",
			//currentPageDropDownTemplate: "ページ ${dropdown} / ${count}",
			currentPageDropDownTooltip: "ページ インデックスの選択",
			pageSizeDropDownTooltip: "ページのレコード数の選択",
			pagerRecordsLabelTooltip: "現在のレコード範囲",
			prevPageTooltip: "前ページに移動",
			nextPageTooltip: "次ページに移動",
			firstPageTooltip: "最初のページに移動",
			lastPageTooltip: "最後のページに移動",
			pageTooltipFormat: "ページ ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} / ${recordCount} レコード"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection は初期化されていません。このエラー メッセージを回避するには、グリッドの選択機能を有効にするか、行セレクター機能の requireSelection プロパティを false に設定してください。"
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {

		locale: {
			sortedColumnTooltipFormat: '${direction}に並べ替え',
			unsortedColumnTooltip: '列を並べ替える',
			ascending: '昇順',
			descending: '降順',
			modalDialogSortByButtonText: '並べ替える',
			modalDialogResetButton: "リセット",
			modalDialogCaptionButtonDesc: "クリックして降順に並べ替える",
			modalDialogCaptionButtonAsc: "クリックして昇順に並べ替える",
			modalDialogCaptionButtonUnsort: "クリックして並べ替えを解除する",
			featureChooserText: "複数列の並べ替え",
			modalDialogCaptionText: "複数列の並べ替え",
			modalDialogButtonApplyText: '適用',
			modalDialogButtonCancelText: 'キャンセル',
			sortingHiddenColumnNotSupport: '非表示の列の並べ替えはサポートされません。'
			//modalDialogButtonSlideCaption: "クリックして並べ替えた列の表示状態を切り替える"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "集計の非表示",
			featureChooserTextHide: "集計の表示",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'キャンセル',
			emptyCellText: '',
			summariesHeaderButtonTooltip: '集計の表示/非表示',
			defaultSummaryRowDisplayLabelCount: 'カウント',
			defaultSummaryRowDisplayLabelMin: '最小値',
			defaultSummaryRowDisplayLabelMax: '最大値',
			defaultSummaryRowDisplayLabelSum: '合計',
			defaultSummaryRowDisplayLabelAvg: '平均',
			defaultSummaryRowDisplayLabelCustom: 'カスタム',
			calculateSummaryColumnKeyNotSpecified: "集計を計算するには、列キーを指定してください。",
			featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。"
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'OK',
			doneTooltip: '編集を終了して更新します',
			cancelLabel: 'キャンセル',
			cancelTooltip: '更新せずに編集を終了します',
			addRowLabel: '新規行の追加',
			addRowTooltip: 'クリックすると、新しい行を追加します',
			deleteRowLabel: '',
			deleteRowTooltip: '行の削除',
			igEditorException: 'ui.igGrid の更新は ui.igEditor を読み込む必要があります。',
			igComboException: 'ui.igGrid のコンボ タイプを使用するには、ui.igCombo を読み込む必要があります。',
			igRatingException: 'ui.igGrid で igRating をエディターとして使用するには、ui.igRating を読み込む必要があります。',
			igValidatorException: 'igGridUpdating で定義された検証オプションは ui.igValidator を読み込む必要があります。',
			noPrimaryKeyException: '行が削除された後に更新操作をサポートするには、アプリケーションの igGrid のオプションで primaryKey を定義する必要があります。',
			hiddenColumnValidationException: '検証が有効な非表示の列がある行は編集できません。',
			dataDirtyException: 'グリッドに保留中のトランザクションがあります。データのレンダリングに影響する場合があります。例外を回避するには、アプリケーションで igGrid の autoCommit オプションを有効にするか、igGridUpdating の dataDirty イベントを処理して false を返す必要があります。イベントを処理する際に、アプリケーションで igGrid のデータを commit() することができます。',
			rowEditDialogCaptionLabel: '行データの編集'
		}
	});

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: '適用',
            movingDialogButtonCancelText: 'キャンセル',
            movingDialogCaptionButtonDesc: '下へ移動',
            movingDialogCaptionButtonAsc: '上へ移動',
            movingDialogCaptionText: '列の移動',
            movingDialogDisplayText: '列の移動',
            dropDownMoveLeftText: '左へ移動',
            dropDownMoveRightText: '右へ移動',
            dropDownMoveFirstText: '最初へ移動',
            dropDownMoveLastText: '最後へ移動',
            featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。",
            movingToolTipMove: '移動'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'クリックしてこの列を固定',
            headerUnfixButtonText: 'クリックしてこの列の固定を解除'
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
			boldButtonTitle: '太字',
			italicButtonTitle: 'イタリック',
			underlineButtonTitle: '下線',
			strikethroughButtonTitle: '取り消し線',
			increaseFontSizeButtonTitle: 'フォント サイズを大きくする',
			decreaseFontSizeButtonTitle: 'フォント サイズを小さくする',
			alignTextLeftButtonTitle: '文字列を左に揃える',
			alignTextRightButtonTitle: '文字列を右に揃える',
			alignTextCenterButtonTitle: '中央揃え',
			justifyButtonTitle: '両端揃え',
			bulletsButtonTitle: '箇条書き',
			numberingButtonTitle: '段落番号',
			decreaseIndentButtonTitle: 'インデントを減らす',
			increaseIndentButtonTitle: 'インデントを増やす',
			insertPictureButtonTitle: '画像を挿入する',
			fontColorButtonTitle: 'フォント色',
			textHighlightButtonTitle: '強調表示色',
			insertLinkButtonTitle: 'ハイパーリンクを挿入する',
			insertTableButtonTitle: '表',
			addRowButtonTitle: '行を追加する',
			removeRowButtonTitle: '行を削除する',
			addColumnButtonTitle: '列を追加する',
			removeColumnButtonTitle: '列を削除する',
			inserHRButtonTitle: '横罫線を挿入する',
			viewSourceButtonTitle: 'ソースを表示する',
			cutButtonTitle: '切り取り',
			copyButtonTitle: 'コピー',
			pasteButtonTitle: '貼り付け',
			undoButtonTitle: '元に戻す',
			redoButtonTitle: 'やり直し',
			imageUrlDialogText: '画像 URL:',
			imageAlternativeTextDialogText: '代替テキスト:',
			imageWidthDialogText: '画像の幅:',
			imageHeihgtDialogText: '画像の高さ:',
			linkNavigateToUrlDialogText: 'URL:',
			linkDisplayTextDialogText: '表示テキスト:',
			linkOpenInDialogText: 'ウィンドウ オプション:',
			linkTargetNewWindowDialogText: '新しいウインドウで開く',
			linkTargetSameWindowDialogText: 'このウィンドウで開く',
			linkTargetParentWindowDialogText: '親ウィンドウで開く',
			linkTargetTopmostWindowDialogText: '最上位のウィンドウで開く',
			applyButtonTitle: '適用',
			cancelButtonTitle: 'キャンセル',
			collapseButtonTitle: '縮小:',
			expandButtonTitle: '展開:',
			defaultToolbars: {
			    textToolbar: "テキスト操作ツールバー",
			    formattingToolbar: "テキスト書式設定ツールバー",
			    insertObjectToolbar: "オブジェクト挿入ツールバー",
			    copyPasteToolbar: "コピー/貼り付けツールバー"
			},
			fontNames: {
				win: [
                    { text: "メイリオ", value: "Meiryo" },
                    { text: "MSゴシック", value: "MS Gothic" },
                    { text: "MS明朝", value: "MS Mincho" },
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
			}

			,
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
				{ text: "h1", value: "ヘッダー 1" },
				{ text: "h2", value: "ヘッダー 2" },
				{ text: "h3", value: "ヘッダー 3" },
				{ text: "h4", value: "ヘッダー 4" },
				{ text: "h5", value: "ヘッダー 5" },
				{ text: "h6", value: "ヘッダー 6" },
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
            invalidDataSource: "渡されたデータ ソースが null 値またはサポートされていません。",
            measureList: "メジャー",
            ok: "OK",
            cancel: "キャンセル",
            addToMeasures: "メジャーに追加",
            addToFilters: "フィルターに追加",
            addToColumns: "列に追加",
            addToRows: "行に追加"
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
            invalidBaseElement: " はベース要素としてサポートされていません。代わりに DIV を使用してください。",
            catalog: "カタログ",
            cube: "キューブ",
            measureGroup: "メジャー グループ",
            measureGroupAll: "(すべて)",
            rows: "行",
            columns: "列",
            measures: "メジャー",
            filters: "フィルター",
            deferUpdate: "更新を遅延する",
            updateLayout: "レイアウトの更新",
            selectAll: "すべて選択"
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
            filtersHeader: "フィルター フィールドをここにドロップ",
            measuresHeader: "データ項目をここにドロップ",
            rowsHeader: "行フィールドをここにドロップ",
            columnsHeader: "列フィールドをここにドロップ",
            disabledFiltersHeader: "フィルター フィールド",
            disabledMeasuresHeader: "データ項目",
            disabledRowsHeader: "行フィールド",
            disabledColumnsHeader: "列フィールド",
            noSuchAxis: "指定した軸はありません。"
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
		    errorPanels: 'パネルの最大数は 2 です。'
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
		    renderDataError: "データが正しく取得されないか、解析されませんでした。",
		    columnWidthUnitError: "指定した列幅は有効な単位ではありません。px、%、または数値を使用してください。",
		    columnHeightUnitError: "指定した列の高さは有効な単位ではありません。px、%、または数値を使用してください。"
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
			invalidArgumentType: '提供された引数のタイプは無効です。',
			errorOnRequest: 'データを取得するときにエラーが発生しました: ',
			noDataSourceUrl: 'igTree コントロールは、その URL にデータの要求を送信するために dataSourceUrl を提供する必要があります。',
			incorrectPath: '指定したパスにノードが見つかりませんでした: ',
			incorrectNodeObject: '指定した引数は jQuery ノード要素ではありません。',
			setOptionError: '次のオプションはランタイムで変更できません: ',
			moveTo: '{0} <strong>へ移動</strong>',
			moveBetween: '{0} および {1} <strong>の間へ移動</strong>',
			moveAfter: '{0} <strong>の後へ移動</strong>',
			moveBefore: '{0} <strong>の前へ移動</strong>',
			copyTo: '{0} <strong>へコピー</strong>',
			copyBetween: '{0} および {1} <strong>の間へコピー</strong>',
			copyAfter: '{0} <strong>の後へコピー</strong>',
			copyBefore: '{0} <strong>の前へコピー</strong>',
			and: 'および'
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
			labelUploadButton: "ファイルのアップロード",
			labelAddButton: "追加",
			labelClearAllButton: "すべてクリア",
			labelSummaryTemplate: "{0} / {1} ファイルがアップロードされました",
			labelSummaryProgressBarTemplate: "{0} / {1}",
			labelShowDetails: "詳細の表示",
			labelHideDetails: "詳細の非表示",
			labelSummaryProgressButtonCancel: "キャンセル",
			labelSummaryProgressButtonContinue: "アップロード",
			labelSummaryProgressButtonDone: "完了",
			labelProgressBarFileNameContinue: "...",

			//error messages
			errorMessageFileSizeExceeded: "最大ファイル サイズを超えています。",
			errorMessageGetFileStatus: "現在のファイルの状態を取得できませんでした。接続されていない可能性があります。",
			errorMessageCancelUpload: "サーバーにアップロードをキャンセルするコマンドを送信できませんでした。接続されていない可能性があります。",
			errorMessageNoSuchFile: "要求されたファイルが見つかりませんでした。ファイル サイズが大きすぎる可能性があります。",
			errorMessageOther: "ファイルのアップロードで内部エラーが発生しました。エラー コード : {0}。",
			errorMessageValidatingFileExtension: "ファイル拡張子の検証が失敗しました。",
			errorMessageAJAXRequestFileSize: "ファイル サイズの取得中に AJAX エラーが発生しました。",
			errorMessageMaxUploadedFiles: "アップロードするファイルの最大数を超えました。",
			errorMessageMaxSimultaneousFiles: "maxSimultaneousFilesUploads の値は無効です。0 より大きい値または null 値に設定する必要があります。",
			errorMessageTryToRemoveNonExistingFile: "削除する ID {0} のファイルが存在しません。",
			errorMessageTryToStartNonExistingFile: "開始する ID {0} のファイルが存在しません。",

			// title attributes
			titleUploadFileButtonInit: "ファイルのアップロード",
			titleAddFileButton: "追加",
			titleCancelUploadButton: "キャンセル",
			titleSummaryProgressButtonContinue: "アップロード",
			titleClearUploaded: "すべてクリア",
			titleShowDetailsButton: "詳細の表示",
			titleHideDetailsButton: "詳細の非表示",
			titleSummaryProgressButtonCancel: "キャンセル",
			titleSummaryProgressButtonDone: "完了",
			titleSingleUploadButtonContinue: "アップロード",
			titleClearAllButton: "すべてクリア"
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
			defaultMessage: "このフィールドは無効です。",
			selectMessage: "値を選択する必要があります。",
			rangeSelectMessage: "{1} ~ {0} 項目を選択する必要があります。",
			minSelectMessage: "{0} つ以上の項目を選択する必要があります。",
			maxSelectMessage: "{0} つ以下の項目を選択する必要があります。",
			rangeLengthMessage: "{0} ～ {1} 文字の値を入力する必要があります。",
			minLengthMessage: "{0} つ以上の文字を入力する必要があります。",
			maxLengthMessage: "{0} つ以下の文字を入力する必要があります。",
			requiredMessage: "このフィールドは必須フィールドです。",
			maskMessage: "すべての必須フィールドを入力する必要があります。",
			dateFieldsMessage: "日付フィールドで値を入力する必要があります。",
			invalidDayMessage: "月の日は無効です。有効な日を入力する必要があります。",
			dateMessage: "有効な日付を入力する必要があります。",
			numberMessage: "有効な数字を入力する必要があります。",
			rangeMessage: "{0} ~ {1} の値を入力する必要があります。",
			minMessage: "{0} 以上の値を入力する必要があります。",
			maxMessage: "{0} 以下の値を入力する必要があります。"
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
			liveStream: "ライブ ビデオ",
			live: "ライブ",
			paused: "一時停止",
			playing: "再生している",
			play: '再生',
			volume: "音量",
			unsupportedVideoSource: "現在のビデオ ソースにはブラウザーでサポートされる書式が含まれていません。",
			missingVideoSource: "互換性のあるビデオ ソースがありません。",
			progressLabelLongFormat: "$currentTime$ / $duration$",
			progressLabelShortFormat: "$currentTime$",
			enterFullscreen: "全画面表示の開始",
			exitFullscreen: "全画面表示の終了",
			skipTo: "指定の位置に移動",
			unsupportedBrowser: "現在のブラウザーは HTML5 ビデオをサポートしません。<br/>以下のバージョンにアップグレードしてください。",
			currentBrowser: "現在のブラウザー: {0}",
			ie9: "Microsoft Internet Explorer 9+",
			chrome8: "Google Chrome 8+",
			firefox36: "Mozilla Firefox 3.6+",
			safari5: "Apple Safari 5+",
			opera11: "Opera 11+",
			ieDownload: "http://www.microsoft.com/japan/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.co.jp/chrome/intl/ja/landing_ff.html?hl=ja",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/jp/safari/download/",
			buffering: '読み込んでいます',
			adMessage: '広告: ビデオは $duration$ 秒後に再開します。', // Use also $timeString$ for MM:SS format.
			adMessageLong: '広告: ビデオは $duration$ 後に再開します。',
			adMessageNoDuration: '広告: ビデオはコマーシャルの後に再開します。',
			adNewWindowTip: '広告: クリックすると、広告コンテンツを新しいウィンドウで開きます。',
			nonDivException: 'Infragistics HTML5 ビデオ プレーヤーは DIV タグのみにインスタンス化できます。',
			relatedVideos: '関連ビデオ',
			replayButton: '再生',
			replayTooltip: 'クリックすると、前回再生したビデオを再生します'
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
			unsupportedBrowser: "現在のブラウザーは HTML5 ビデオをサポートしません。<br/>以下のバージョンにアップグレードしてください。",
			currentBrowser: "現在のブラウザー: {0}",
			ie9: "Microsoft Internet Explorer 9+",
			chrome8: "Google Chrome 8+",
			firefox36: "Mozilla Firefox 3.6+",
			safari5: "Apple Safari 5+",
			opera11: "Opera 11+",
			ieDownload: "http://www.microsoft.com/japan/windows/internet-explorer/default.aspx",
			operaDownload: "http://www.opera.com/download/",
			chromeDownload: "http://www.google.co.jp/chrome/intl/ja/landing_ff.html?hl=ja",
			firefoxDownload: "http://www.mozilla.com/",
			safariDownload: "http://www.apple.com/jp/safari/download/"
		}
	});

}



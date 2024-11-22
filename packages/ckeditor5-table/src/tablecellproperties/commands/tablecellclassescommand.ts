/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module table/tablecellproperties/commands/tablecellverticalalignmentcommand
 */

import type { Editor } from 'ckeditor5/src/core.js';

import TableCellPropertyCommand from './tablecellpropertycommand.js';

/**
 * The table cell classes command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellClasses'` editor command.
 *
 * To change the vertical text alignment of selected cells, execute the command:
 *
 * ```ts
 * editor.execute( 'tableCellClasses', {
 *   value: 'top'
 * } );
 * ```
 */
export default class TableCellClassesCommand extends TableCellPropertyCommand {
	/**
	 * Creates a new `TableCellClassesCommand` instance.
	 *
	 * @param editor An editor in which this command will be used.
	 * @param defaultValue The default value for the "alignment" attribute.
	 */
	constructor( editor: Editor ) {
		super( editor, 'tableCellClasses', '' );
	}
}

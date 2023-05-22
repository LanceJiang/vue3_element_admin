import type { ElTable, ElTableColumn } from 'element-plus/lib/components/table'
export type OlSlots = {
	default?: (scope: Record<string, any>) => any | string
	header?: (scope: Record<string, any>) => any | string
}
export type OlColumnProps = {
	slots?: OlSlots
	children?: OlTableColumnProps[]
}
/* Column */
export type OlTableColumnProps = InstanceType<typeof ElTableColumn>['$props'] & OlColumnProps

export type OlOptions = {
	// 表格分页器 pageSizes (默认:[10, 20, 50, 100])
	pageSizes?: number[]
	// 表格分页器 layout (默认:'total, sizes, prev, pager, next, jumper')
	layout?: string
	// 表格分页器 背景 (默认:true)
	background?: boolean

	// 表格loading (默认:false)
	loading?: boolean
	// 是否多选类型 (默认:false)
	multipleSelect?: boolean
	// 多选类型|(currentRowKey当前行选中key)选中标记唯一key (默认:'id') 【table $prop属性之一】
	rowKey?: (row) => any | string
	// 根据 该值 查找当前页面数据是否包含当前数据 添加 高亮状态 (默认:'id')
	// currentRowKey?: string;
	// table 默认 column 对齐方式 (默认:'center')
	align?: string
	// table 默认 column 是否允许拖动 (默认:true)
	resizable?: boolean
	// table 默认 column 是否允许拖动 (默认:true)
	showOverflowTooltip?: boolean
	// 是否展示数据序列号 (默认:true)
	showIndex?: boolean
	// 展示数据序列号_label (默认:'序号')
	indexLabel?: string
	// table 默认 column 是否允许拖动 (默认:true)
	showPagination?: boolean
}
/* Table */
export type OlTableProps = InstanceType<typeof ElTable>['$props'] & OlOptions

export type SearchParams = {
	page: number
	size: number
	[any]: any
}

import { Slots } from 'vue'
import {LeFormItem, ObjectOpts, SlotOption} from '@/components/FormConfig/formConfig.types.ts'
export const getOptions = (options: any[], form: LeFormItem) => options.map((option) => {
	let value = option
	let label = option
	let disabled = false
	if (typeof option === 'object') {
		value = option[form.valueKey || 'value']
		label = option[form.labelKey || 'label']
		if (form.i18n) label = t(label)
		disabled = option.disabled
	}
	return {
		label,
		value,
		disabled
	}
})

/**
 *  自定义 Option 渲染
 */
export const renderOption = function (
	slots: Slots,
	slotOption: SlotOption<ObjectOpts>,
	option: ObjectOpts
) {
	if (slotOption) {
		let scopedSlots_option = slotOption
		if (typeof slotOption === 'string') {
			scopedSlots_option = slots[slotOption]
		}
		if (typeof scopedSlots_option === 'function') {
			/*const args = [
				option
			]*/
			return scopedSlots_option(option)
		}
	}
	return option.label
}
// (级联/LeSelect)自定义渲染
export const optionSlot = <T>(slots: Slots, slotOption: SlotOption<T>) => {
	let scopedSlots_option = slotOption
	if (typeof slotOption === 'string') {
		scopedSlots_option = slots[slotOption]
	}
	if (typeof scopedSlots_option === 'function') {
		return scopedSlots_option
	}
}
// 获取formItem label
export const get_formSlotLabel = (slots: Slots, slotOption: SlotOption<{ label: string }>) => {
	if (!slotOption) return
	let scopedSlots_option = slotOption
	if (typeof slotOption === 'string') {
		scopedSlots_option = slots[slotOption]
	}
	if (typeof scopedSlots_option === 'function') {
		return scopedSlots_option
	}
}

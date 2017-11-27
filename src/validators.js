export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';
export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';
export const noSpaces = value => 
	!value.includes(' ') ? undefined : 'Username cannot contain spaces';
export const isTrimmed = value => 
	value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const lengthy = length => value => {
	if(length.min && value.length < length.min) {
		return `Must be at least ${length.min} characters long`;
	}
	if(length.max && value.length > length.max) {
		return `The maximum length is ${length.max} characters`;
	}
}
export const matches = field => (value, allValues) => 
	field in allValues && value.trim() === allValues[field].trim() ? undefined : 'Does not match';
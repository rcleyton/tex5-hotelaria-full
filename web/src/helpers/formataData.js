export function formataData(data) {
	if (!data) return '';
	return Intl.DateTimeFormat('pt-br').format(new Date(data));
}

export function formataData(data) {
	return Intl.DateTimeFormat('pt-br').format(new Date(data));
}

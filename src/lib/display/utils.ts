export function int_to_text(number: number): string
{
	let result = number.toString();

	for (let i = result.length - 3; i > 0; i -= 3)
		result = result.slice(0, i) + ',' + result.slice(i);

	return result;
}


export function float_to_text(number: number): string
{
	if (number >= 1)
	{
		let text = number.toFixed(1);

		if (text.includes('.0'))
			return int_to_text(Math.round(number));

		return int_to_text(Math.floor(number)) + '.' + text.split('.')[1][0];
	}

	if (number == 0)
		return '0';

	const text = number.toString().split('.')[1];
	let nb_zeros = 0;

	for (let i = 0; i < text.length; i++)
		if (text[i] === '0')
			nb_zeros++;
		else
			break;

	let result = number.toFixed(Math.max(2, nb_zeros + 1));

	while (result[result.length - 1] === '0')
		result = result.slice(0, -1);

	return result;
}

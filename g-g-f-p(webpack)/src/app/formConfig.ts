interface conf {
  arrOfLangs: string[],
  arrOfTypes: string[]
}
export let formConfig: conf = {
	arrOfLangs: ['', 'JSON', 'JavaScript', 'Text', 'Markdown'],
	arrOfTypes: ['', 'application/json', 'application/javascript', 'text/plain']
}
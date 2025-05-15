export const getCharacters = async () => {
		try {
			const response = await fetch('https://swapi.tech/api/people')
			const data = await response.json()
			if (response.ok) {
				const charactersArray = await Promise.all(
					data.results.map(async (person) => {
						const detail = await fetch(person.url)
						const detailData = await detail.json()
						detailData.result["image"] = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${person.uid}.jpg`
						return detailData.result
					})
				)
				return charactersArray
			}
		} catch (error) {
			// setError(error)
			console.log(error)
		}
	}
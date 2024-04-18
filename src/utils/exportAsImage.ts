import html2canvas from "html2canvas"

const exportAsImage = async (el: HTMLDivElement, imageFileName: string) => {
	const canvas = await html2canvas(el)
	const image = canvas.toDataURL("image/png", 1.0)
	downloadImage(image, imageFileName)
}

const downloadImage = (blob: string, fileName: string) => {
	let fakeLink = window.document.createElement("a")
	fakeLink.style.setProperty("display", "none")
	fakeLink.download = fileName

	fakeLink.href = blob

	document.body.appendChild(fakeLink)
	fakeLink.click()
	document.body.removeChild(fakeLink)

	fakeLink.remove()
}

export default exportAsImage

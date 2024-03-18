const getImageUrl = (folderPath, fileName) => {
  return new URL(`${folderPath}${fileName}`, import.meta.url)
}

export default getImageUrl

export function toBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => resolve(fileReader.result);
    fileReader.onerror = reject;
    fileReader.readAsDataURL(file);
  });
}

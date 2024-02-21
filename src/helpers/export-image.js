import html2canvas from 'html2canvas';

// helper for exporting react components as jpeg/png
export const handleDownloadImage = async (printRef, extension) => {
  const element = printRef.current;
  const canvas = await html2canvas(element);

  const data = canvas.toDataURL(`image/${extension}`);
  const link = document.createElement('a');

  link.href = data;
  link.download = `image`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

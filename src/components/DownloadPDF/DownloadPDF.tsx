import { FC, useCallback, useState } from "react";
import { BsFilePdfFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { DownloadPDFButtonProps } from "../../types";
import jsPDF from "jspdf";

import "./DownloadPDF.css";
import classNames from "classnames";

const cv = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4",
  putOnlyUsedFonts: true,
  compress: true,
});

export const DownloadPDF: FC<DownloadPDFButtonProps> = ({ contentRef }) => {
  const [isPreparing, setIsPreparing] = useState<boolean>(false);

  const handleDownloadClick = useCallback(async () => {
    if (!contentRef.current) return;
    setIsPreparing(true);

    cv.html(contentRef.current, {
      image: { type: "jpeg", quality: 0.9 },
      html2canvas: {
        scale: 0.205,
        letterRendering: true,
        async: true,
      },
      autoPaging: true,
    }).then(() => {
      cv.save("cv.pdf");
      setIsPreparing(false);
    });
  }, [contentRef]);

  return (
    <button
      className={classNames("download-pdf", isPreparing ? "spin" : null)}
      title="Download as PDF"
      onClick={handleDownloadClick}
    >
      {!isPreparing ? <BsFilePdfFill /> : <ImSpinner9 />}
    </button>
  );
};

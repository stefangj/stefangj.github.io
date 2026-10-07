import { FC, useCallback, useState } from "react";
import { BsFilePdfFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { DownloadPDFButtonProps } from "../../types";
import jsPDF from "jspdf";

import "./DownloadPDF.css";
import classNames from "classnames";

export const DownloadPDF: FC<DownloadPDFButtonProps> = ({ contentRef }) => {
  const [isPreparing, setIsPreparing] = useState<boolean>(false);

  const addClickableLinks = useCallback((pdf: jsPDF, root: HTMLElement) => {
    const rootRect = root.getBoundingClientRect();
    const pageHeightMm = pdf.internal.pageSize.getHeight();

    Array.from(root.querySelectorAll("a[href]")).forEach((link) => {
      const range = document.createRange();
      range.selectNodeContents(link);
      const textRect = range.getBoundingClientRect();
      const rect = textRect.width > 0 ? textRect : link.getBoundingClientRect();

      const x = (rect.left - rootRect.left) * 0.264583;
      const y = pageHeightMm - (rect.bottom - rootRect.top) * 0.264583;
      const width = Math.max(rect.width, 1) * 0.264583;
      const height = Math.max(rect.height, 1) * 0.264583;

      pdf.link(x, y, width, height, {
        url: link.getAttribute("href") ?? "",
      });
    });
  }, []);

  const handleDownloadClick = useCallback(async () => {
    if (!contentRef.current) return;
    setIsPreparing(true);

    const cv = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
      compress: true,
    });

    cv.html(contentRef.current, {
      image: { type: "jpeg", quality: 0.9 },
      html2canvas: {
        scale: 0.205,
        letterRendering: true,
        async: true,
        backgroundColor: "#FFFFFF",
      },
      autoPaging: true,
      callback: () => {
        addClickableLinks(cv, contentRef.current!);
        cv.setProperties({ title: "Stefan Gjurcheski CV" });
      },
    }).then(() => {
      cv.save("CV Stefan Gjurcheski.pdf");
      setIsPreparing(false);
    });
  }, [addClickableLinks, contentRef]);

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

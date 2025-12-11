import React from 'react';
import './Preloader.css';

// Agar logoni src ichida import qilmoqchi bo'lsangiz, commentdan chiqarib import qiling:
// import logoSrc from '../../assets/logo.jpg';

export default function Preloader({ logo = '/logo.jpg', size = 150 }) {
  // size — loader o'lchami (px)
  const wrapperStyle = { width: `${size}px`, height: `${size}px` };

  return (
    <div className="preloader-overlay" role="status" aria-live="polite">
      <div className="loader-wrap" style={wrapperStyle}>
        <svg className="loader-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          {/* yupqa kulrang doira */}
          <circle className="ring" cx="60" cy="60" r="46" fill="none" />
          {/* arc elementni guruhlab, butun guruhni aylantiramiz */}
          <g className="arc-group">
            <circle
              className="arc"
              cx="60"
              cy="60"
              r="46"
              fill="none"
            />
          </g>
        </svg>

        {/* O'rtadagi logo. default public/logo.jpg ga qaraydi.
            Agar src ichida import qilsangiz, logo propga import qilingan o'zgaruvchini bering */}
        <img className="loader-logo" src={logo} alt="Logo" />
      </div>
    </div>
  );
}
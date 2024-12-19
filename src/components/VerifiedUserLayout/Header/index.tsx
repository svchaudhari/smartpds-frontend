import IndiaEmblemWithMinistry from '../../LogoComponents/IndiaEmblemWithMinistry';
import './VerifiedUserLayoutHeader.css';

const VerifiedUserLayoutHeader = () => {
  function resetFontSizeHandler() {}
  function increaseFontSizeHandler() {}
  function decreaseFontSizeHandler() {}
  return (
    <header className="verified-user-header-container">
      <div className="verified-user-header-content-container">
        <div className="India-logo-container">
          <IndiaEmblemWithMinistry />
        </div>
        <div className="text-size-and-language-container">
          <div>
            <button
              type="button"
              name="increase-text-size"
              onClick={increaseFontSizeHandler}
            >
              A+
            </button>
            <div className="border-div" />
            <button
              type="button"
              name="reset-font-size"
              onClick={resetFontSizeHandler}
            >
              A
            </button>
            <div className="border-div" />
            <button
              type="button"
              name="decrease-text-size"
              onClick={decreaseFontSizeHandler}
            >
              A-
            </button>
            <div className="border-div" />
            <label htmlFor="select-language">Select Language</label>
            <select name="select-language" id="select-language">
              <option value="english">English</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VerifiedUserLayoutHeader;

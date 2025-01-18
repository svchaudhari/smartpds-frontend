import { useLocation } from 'react-router';
import CustomButton from '../../CustomButton';
import IndiaEmblemWithMinistry from '../../LogoComponents/IndiaEmblemWithMinistry';
import './VerifiedUserLayoutHeader.css';
import { ArrowIcon, UserIcon, UserProfileIcon } from '../../LogoComponents';

const VerifiedUserLayoutHeader = () => {
  const rootElement = document.documentElement;

  const location = useLocation();
  const isHomePage = location?.pathname === '/dashboard';

  const MIN_FONT_SIZE = 12; // Minimum font size in px
  const MAX_FONT_SIZE = 24; // Maximum font size in px

  function resetFontSizeHandler() {
    // Reset to the normal text size
    rootElement.style.setProperty('--text-normal', '16px');
  }

  function increaseFontSizeHandler() {
    // Get current text-normal value
    const currentFontSize = parseFloat(
      getComputedStyle(rootElement).getPropertyValue('--text-normal')
    );

    // Increase font size if it's below the maximum limit
    if (currentFontSize >= MAX_FONT_SIZE) {
      return;
    }
    rootElement.style.setProperty(
      '--text-normal',
      `${currentFontSize * 1.25}px`
    );
  }

  function decreaseFontSizeHandler() {
    // Get current text-normal value
    const currentFontSize = parseFloat(
      getComputedStyle(rootElement).getPropertyValue('--text-normal')
    );
    if (currentFontSize <= MIN_FONT_SIZE) {
      return;
    }

    // Decrease font size if it's above the minimum limit
    if (currentFontSize > MIN_FONT_SIZE) {
      rootElement.style.setProperty(
        '--text-normal',
        `${currentFontSize * 0.8}px`
      );
    }
  }

  return (
    <header className="verified-user-header-container">
      <div className="verified-user-header-content-container">
        <div className="India-logo-container">
          <IndiaEmblemWithMinistry />
        </div>

        {isHomePage ? (
          <div className="verified-user-profile-container">
            {/* NIC Log */}
            <div className="w-16 h-10 border border-grey-500 border-solid"></div>
            {/* Select Role */}
            <div className="verified-user-profile-select-box">
              <div className="rounded-lg w-8 h-8 bg-white-400 rounded-full flex items-center justify-center">
                <UserIcon />
              </div>

              <div>
                <h4 className="font-xs">Select Role </h4>
                <h4 className="font-bold font-xs"> Inspector </h4>
              </div>
            </div>

            <div className="user-profile-with-count">
              <UserProfileIcon width={32} height={32} />
              <span>6</span>
            </div>
            <h4 className="font-bold">Karthick</h4>
            <div className="rotate-90">
              <ArrowIcon />
            </div>
          </div>
        ) : (
          <div className="text-size-and-language-container">
            <div>
              <CustomButton
                name="increase-text-size"
                onClick={increaseFontSizeHandler}
              >
                A+
              </CustomButton>
              <div className="border-div" />
              <CustomButton
                name="reset-font-size"
                onClick={resetFontSizeHandler}
              >
                A
              </CustomButton>
              <div className="border-div" />
              <CustomButton
                name="decrease-text-size"
                onClick={decreaseFontSizeHandler}
              >
                A-
              </CustomButton>
              <div className="border-div" />
              <label htmlFor="select-language">Select Language</label>
              <select name="select-language" id="select-language">
                <option value="english">English</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default VerifiedUserLayoutHeader;

import React, { useState } from 'react';
import './RationCardRegistrationSidebar.css';

const RationCardRegistrationSidebar = () => {
  const [counter, setCounter] = useState(1);
  const [completionPercentage, setCompletionPercentage] = useState(10);
  const clr = '#4FA394';
  return (
    <aside className="ration-card-registration-sidebar-container">
      <h2>
        <b>{counter}</b>/5 Complete
      </h2>
      <div className="completion-slider">
        <div
          className="completion-slider-completed"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      <ul className="nav-container">
        <li className="active">
          <div className="icon-container">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10.594a3.563 3.563 0 1 1 0-7.126 3.563 3.563 0 0 1 0 7.126zm0-5.938a2.375 2.375 0 1 0 0 4.75 2.375 2.375 0 0 0 0-4.75z"
                fill={clr}
              />
              <path
                d="M10 18.907a8.906 8.906 0 0 1-6.882-3.26l-.308-.38.308-.374a8.907 8.907 0 0 1 13.763 0l.31.374-.31.38A8.906 8.906 0 0 1 10 18.907zm-5.635-3.634a7.718 7.718 0 0 0 11.281 0 7.717 7.717 0 0 0-11.28 0z"
                fill={clr}
              />
              <path
                d="M10 18.906a8.906 8.906 0 1 1-.012-17.812A8.906 8.906 0 0 1 10 18.906zm0-16.625a7.719 7.719 0 1 0 0 15.438A7.719 7.719 0 0 0 10 2.28z"
                fill={clr}
              />
              <path
                d="M3.575 15.272s5.98 6.68 12.065.665l.784-.665S11.34 9.999 6.182 13.164l-2.607 2.108zM10 10a2.969 2.969 0 1 0 0-5.938A2.969 2.969 0 0 0 10 10z"
                fill={clr}
              />
            </svg>
          </div>
          <div className="title-container">HOF Details</div>
        </li>
        <li className="">
          <div className="icon-container">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.562 9.375a3.437 3.437 0 1 1 6.875 0 3.437 3.437 0 0 1-6.875 0zm9.857 4.467a.641.641 0 0 0-.849.188 6.836 6.836 0 0 1-.431.536 6.23 6.23 0 0 0-1.702-1.668.313.313 0 0 0-.378.025 4.672 4.672 0 0 1-6.114 0 .313.313 0 0 0-.383-.025 6.229 6.229 0 0 0-1.702 1.665 6.848 6.848 0 0 1-1.706-3.938h1.203a.64.64 0 0 0 .522-.256.625.625 0 0 0-.062-.811L2.942 7.683a.625.625 0 0 0-.884 0L.183 9.558a.625.625 0 0 0 .46 1.067h1.255A8.125 8.125 0 0 0 16.6 14.74a.626.626 0 0 0-.181-.898zm3.533-4.081a.625.625 0 0 0-.577-.386H18.1A8.125 8.125 0 0 0 3.4 5.26a.625.625 0 1 0 1.015.73 6.875 6.875 0 0 1 12.43 3.385h-1.22a.625.625 0 0 0-.442 1.067l1.875 1.875a.625.625 0 0 0 .884 0l1.875-1.875a.625.625 0 0 0 .135-.681z"
                fill="#9C9C9C"
              />
            </svg>
          </div>
          <div className="title-container">Member Details</div>
        </li>
        <li className="">
          <div className="icon-container">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.406 9.263c.16.381.473.965.7 1.31h.001l4.052 6.141c.197.298.5.486.84.486.341 0 .645-.188.841-.485l4.053-6.141c.228-.346.54-.93.7-1.31v-.001h.001c.022-.053.516-1.237.516-2.353C14.11 3.54 11.37.8 8 .8S1.89 3.54 1.89 6.91c0 1.108.488 2.284.515 2.351v.002zm10.179-.426-.001.002a8.55 8.55 0 0 1-.605 1.132L8 15.999 4.021 9.97a8.55 8.55 0 0 1-.605-1.132c-.01-.027-.431-1.05-.431-1.929A5.021 5.021 0 0 1 8 1.895a5.021 5.021 0 0 1 5.015 5.015c0 .438-.105.916-.214 1.293-.105.364-.211.62-.216.633z"
                fill="#9C9C9C"
                stroke="#9C9C9C"
                strokeWidth=".4"
              />
              <path
                d="M8 3.681a3.233 3.233 0 0 0-3.23 3.23c0 1.78 1.449 3.228 3.23 3.228 1.78 0 3.229-1.448 3.229-3.229 0-1.78-1.449-3.229-3.23-3.229zm0 5.563A2.337 2.337 0 0 1 5.666 6.91 2.337 2.337 0 0 1 8 4.577a2.337 2.337 0 0 1 2.333 2.333A2.337 2.337 0 0 1 8 9.244z"
                fill="#9C9C9C"
                stroke="#9C9C9C"
                strokeWidth=".2"
              />
            </svg>
          </div>
          <div className="title-container">Address Details</div>
        </li>
        <li className="">
          <div className="icon-container">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <mask
                id="5rtw4u0b3a"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <path fill="#D9D9D9" d="M0 0h20v20H0z" />
              </mask>
              <g mask="url(#5rtw4u0b3a)">
                <path
                  d="M11.666 10.834h4.167V9.167h-4.167v1.667zm0-2.5h4.167V6.667h-4.167v1.667zm-7.5 5h6.667v-.458c0-.625-.305-1.122-.917-1.49-.61-.368-1.416-.552-2.416-.552s-1.806.184-2.417.552c-.61.368-.917.865-.917 1.49v.458zM7.5 10.001c.458 0 .85-.164 1.177-.49.326-.326.49-.719.49-1.177 0-.458-.164-.85-.49-1.177a1.605 1.605 0 0 0-1.177-.49c-.458 0-.85.164-1.177.49-.327.326-.49.719-.49 1.177 0 .458.163.85.49 1.177.326.326.718.49 1.177.49zm-4.167 6.666c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 0 1-.49-1.176V5c0-.459.164-.851.49-1.177.326-.327.719-.49 1.177-.49h13.334c.458 0 .85.163 1.177.49.326.326.49.718.49 1.177v10c0 .458-.164.85-.49 1.177-.327.326-.72.49-1.178.49H3.333zm0-1.666h13.334V5H3.332v10z"
                  fill="#9C9C9C"
                />
              </g>
            </svg>
          </div>
          <div className="title-container">Other Details</div>
        </li>
        <li className="">
          <div className="icon-container">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#yn0ri2dcra)" fill="#9C9C9C" stroke="#9C9C9C">
                <path
                  d="m14.027 3.817-3.75-3.75A.57.57 0 0 0 9.875-.1H3.312c-.83 0-1.506.676-1.506 1.506v13.188c0 .83.676 1.506 1.506 1.506h9.376c.83 0 1.506-.676 1.506-1.506V4.219c0-.156-.065-.3-.167-.402zm-3.583-.536v-1.44l1.808 1.809h-1.44a.37.37 0 0 1-.368-.369zm2.243 11.681H3.313a.37.37 0 0 1-.37-.368V1.406a.37.37 0 0 1 .37-.368h5.993V3.28c0 .83.676 1.506 1.507 1.506h2.243v9.807a.37.37 0 0 1-.368.369z"
                  strokeWidth=".2"
                />
                <path
                  d="M5.188 6.64h5.625a.453.453 0 0 1 0 .907H5.186a.453.453 0 0 1 0-.906zM5.188 8.516h5.625a.453.453 0 0 1 0 .906H5.186a.453.453 0 0 1 0-.906zM5.188 10.39h5.625a.453.453 0 0 1 0 .907H5.186a.453.453 0 0 1 0-.906zM5.188 12.266h3.75a.453.453 0 0 1 0 .906h-3.75a.453.453 0 0 1 0-.906z"
                  strokeWidth=".031"
                />
              </g>
              <defs>
                <clipPath id="yn0ri2dcra">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="title-container">Additional Details</div>
        </li>
      </ul>
    </aside>
  );
};

export default RationCardRegistrationSidebar;

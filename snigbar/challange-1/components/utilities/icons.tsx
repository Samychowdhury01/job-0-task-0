"use client";
import { useTheme } from "next-themes";
import React from "react";

export function NewsIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
      className="w-6 h-6"
    >
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M22.002 24.867V4.719a1.41 1.41 0 00-1.406-1.407H4.66A1.41 1.41 0 003.252 4.72v20.625a2.35 2.35 0 002.344 2.343h19.219"
      ></path>
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M24.815 27.688a2.812 2.812 0 01-2.813-2.813V8h4.22a1.406 1.406 0 011.405 1.406v15.469a2.813 2.813 0 01-2.812 2.813z"
      ></path>
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M14.502 8h3.75m-3.75 3.75h3.75M7.002 15.5h11.25m-11.25 3.75h11.25M7.002 23h11.25"
      ></path>
      <path
        fill={resolvedTheme === "dark" ? "white" : "black"}
        d="M10.752 12.688h-3.75a.938.938 0 01-.937-.938V8a.937.937 0 01.937-.938h3.75A.938.938 0 0111.69 8v3.75a.937.937 0 01-.938.938z"
      ></path>
    </svg>
  );
}

export function UmbrellaIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
      className="w-6 h-6"
    >
      <g clipPath="url(#clip0_3_922)">
        <path
          fill={resolvedTheme === "dark" ? "white" : "black"}
          d="M30.034 16.792c-1.49-7.1-7.208-11.365-13.317-12.026v-.933c0-.921-.745-1.666-1.667-1.666s-1.667.745-1.667 1.666v.933C7.253 5.427 1.586 9.693.065 16.792c-.114.526.443 1.11.974.593 2.709-2.864 5.61-2.729 8.26 1.928.277.494.777.448 1.027 0 1.052-1.844 2.338-3.813 4.724-3.813 3.047 0 4.593 3.583 4.724 3.813.25.448.75.494 1.026 0 2.656-4.662 5.578-4.76 8.26-1.927.537.52 1.089-.068.974-.594zm-16.65 1.088v6.787a.834.834 0 01-1.62.276 1.662 1.662 0 00-2.126-1.016 1.664 1.664 0 00-1.015 2.125 4.168 4.168 0 003.927 2.776 4.172 4.172 0 004.166-4.166v-6.787c-.474-.411-1.03-.708-1.666-.708-.64.005-1.167.25-1.667.713z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_922">
          <path
            fill={resolvedTheme === "dark" ? "white" : "black"}
            d="M0 0H30V30H0z"
            transform="translate(.05 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function SettingIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
      className="w-6 h-6"
    >
      <g clipPath="url(#clip0_3_298)">
        <path
          fill={resolvedTheme === "dark" ? "white" : "black"}
          d="M18.093 17.637l1.75-3.024a.442.442 0 00-.1-.563l-1.85-1.45c.037-.275.062-.563.062-.85 0-.287-.025-.575-.063-.863l1.85-1.45a.442.442 0 00.1-.562l-1.75-3.025a.442.442 0 00-.537-.188l-2.175.875a6.428 6.428 0 00-1.475-.862l-.325-2.313A.455.455 0 0013.142 3h-3.5c-.212 0-.4.163-.437.375L8.88 5.688a6.704 6.704 0 00-1.475.862L5.23 5.675a.442.442 0 00-.537.188l-1.75 3.024a.442.442 0 00.1.563l1.85 1.45a6.326 6.326 0 00-.063.85c0 .287.025.575.063.863l-1.85 1.45a.442.442 0 00-.1.562l1.75 3.025a.442.442 0 00.537.188l2.175-.876c.45.35.938.638 1.475.863l.325 2.313c.038.2.225.362.438.362h3.5c.212 0 .4-.163.437-.375l.325-2.313a6.704 6.704 0 001.475-.862l2.175.875c.2.075.425 0 .538-.188zm-6.7-3.387a2.507 2.507 0 01-2.5-2.5c0-1.375 1.124-2.5 2.5-2.5 1.374 0 2.5 1.125 2.5 2.5s-1.126 2.5-2.5 2.5zm16.387 9.587l-1.2-.924a3.91 3.91 0 00.05-.55c0-.188-.012-.375-.05-.55l1.188-.925a.286.286 0 00.062-.363l-1.125-1.938c-.063-.125-.212-.162-.35-.125l-1.387.563a3.772 3.772 0 00-.95-.55L23.804 17a.27.27 0 00-.262-.25h-2.238c-.137 0-.262.1-.275.238l-.213 1.474c-.337.15-.662.326-.95.55l-1.387-.562a.288.288 0 00-.35.125l-1.125 1.938c-.063.124-.05.274.063.362l1.187.925a3.935 3.935 0 000 1.1l-1.188.925a.286.286 0 00-.062.363l1.125 1.937c.063.125.213.163.35.125l1.387-.563c.288.226.6.413.95.55l.213 1.476a.281.281 0 00.275.237h2.238c.137 0 .262-.1.274-.238l.213-1.474c.337-.15.662-.325.938-.55l1.4.562c.125.05.274 0 .35-.125l1.125-1.938c.075-.112.037-.262-.063-.35zm-5.363.2a1.688 1.688 0 11.002-3.376 1.688 1.688 0 01-.002 3.377z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_298">
          <path
            fill={resolvedTheme === "dark" ? "white" : "black"}
            d="M0 0H30V30H0z"
            transform="translate(.38 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function SunIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="35"
      fill="none"
      viewBox="0 0 45 35"
      className="w-8 h-8"
    >
      <path
        fill={resolvedTheme === "dark" ? "white" : "black"}
        d="M.1 26.667c0 1.5.366 2.883 1.1 4.15a8.096 8.096 0 003 3 8.061 8.061 0 004.116 1.1h18.05a8.121 8.121 0 004.134-1.1 8.14 8.14 0 003.016-3 8.152 8.152 0 001.117-4.15c0-1.1-.233-2.217-.7-3.334 1.267-1.533 1.9-3.383 1.9-5.5a8.784 8.784 0 00-.683-3.4 8.514 8.514 0 00-1.867-2.783A8.515 8.515 0 0030.5 9.783a8.49 8.49 0 00-3.4-.683c-2.467 0-4.617.967-6.467 2.9-1.283-.733-2.783-1.1-4.5-1.1-2.35 0-4.417.733-6.217 2.183-1.8 1.45-2.966 3.317-3.466 5.584-1.867.433-3.384 1.383-4.567 2.883C.7 23.05.1 24.75.1 26.667zm2.85 0c0-1.4.466-2.6 1.4-3.617.933-1.017 2.1-1.6 3.5-1.767l.833-.05c.2 0 .317-.1.317-.3l.116-.9c.234-1.8 1.017-3.316 2.35-4.516C12.8 14.3 14.366 13.7 16.15 13.7c1.833 0 3.433.617 4.783 1.833 1.367 1.217 2.117 2.717 2.283 4.517l.117.967c.033.183.15.283.35.283h2.683c1.467 0 2.734.533 3.8 1.6 1.067 1.067 1.6 2.317 1.6 3.783 0 1.517-.533 2.8-1.583 3.867-1.05 1.067-2.333 1.6-3.8 1.6H8.316c-1.466 0-2.716-.533-3.783-1.617-1.05-1.083-1.583-2.366-1.583-3.866zm11.166-20.45c0 .4.134.75.4 1.05l1.1 1.066c.417.317.767.45 1.067.417.35 0 .65-.15.917-.433.266-.284.4-.634.4-1.034s-.15-.733-.434-.983l-.983-1.1a1.48 1.48 0 00-1.017-.4c-.4 0-.75.133-1.033.417-.283.266-.417.6-.417 1zm8.9 7.383c1.15-1.117 2.517-1.667 4.084-1.667 1.65 0 3.05.567 4.2 1.717 1.15 1.15 1.733 2.533 1.733 4.183 0 1.034-.283 2.067-.85 3.067-1.617-1.6-3.55-2.4-5.817-2.4h-.533c-.417-1.817-1.35-3.45-2.817-4.9zm2.717-8.8c0 .433.133.767.383 1.033.25.267.584.384.984.384.433 0 .766-.134 1.033-.384.267-.266.383-.6.383-1.033V1.383c0-.4-.133-.716-.4-.983-.266-.267-.6-.383-1.016-.383-.4 0-.717.133-.984.383-.266.25-.383.583-.383.983V4.8zm9.2 3.817c0 .433.117.766.367 1.033.35.267.7.4 1.033.4.3 0 .633-.133.983-.4L39.7 7.267c.266-.3.4-.65.4-1.067 0-.4-.134-.733-.4-1-.267-.267-.6-.4-.984-.4-.4 0-.716.133-.966.4L35.3 7.583c-.25.317-.367.65-.367 1.034zM36.25 28.35c0 .4.133.75.416 1.05l1.084 1.05c.25.267.566.4.966.4s.734-.133 1-.417c.267-.283.4-.616.4-1.033 0-.367-.133-.7-.4-.967l-1.083-1.083a1.298 1.298 0 00-.95-.4c-.4 0-.733.133-1 .4-.283.267-.433.6-.433 1zm2.45-10.517c0 .384.15.7.433.967.267.267.617.4 1.017.4h3.4c.383 0 .7-.133.966-.383.267-.25.384-.584.384-.984s-.134-.733-.384-1a1.297 1.297 0 00-.966-.416h-3.4c-.4 0-.734.133-1.017.416-.3.284-.433.617-.433 1z"
      ></path>
    </svg>
  );
}

export function CodeIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      fill="none"
      viewBox="0 0 40 41"
      className="w-8 h-8"
    >
      <g clipPath="url(#clip0_3_316)">
        <path
          fill={resolvedTheme === "dark" ? "white" : "black"}
          d="M17.43 36.469l-3.812-1.106a.751.751 0 01-.512-.932l8.531-29.387a.751.751 0 01.931-.513l3.813 1.107c.4.112.625.53.512.93l-8.53 29.388a.749.749 0 01-.932.513zm-7.124-7.013l2.719-2.9a.75.75 0 00-.05-1.075l-5.663-4.98 5.663-4.982a.745.745 0 00.05-1.075l-2.72-2.9a.75.75 0 00-1.062-.031L.237 19.95a.745.745 0 000 1.094l9.006 8.444a.745.745 0 001.063-.032zm20.45.038l9.006-8.444a.745.745 0 000-1.094l-9.006-8.45a.757.757 0 00-1.063.032l-2.718 2.9a.75.75 0 00.05 1.075l5.662 4.987-5.662 4.981a.745.745 0 00-.05 1.075l2.718 2.9a.751.751 0 001.063.038z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_316">
          <path
            fill={resolvedTheme === "dark" ? "white" : "black"}
            d="M0 0H40V40H0z"
            transform="translate(0 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function BookIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
      className="w-6 h-6"
    >
      <g clipPath="url(#clip0_3_950)">
        <path
          fill={resolvedTheme === "dark" ? "white" : "black"}
          d="M25.535 7.4V2.375h-.225c-4.2.188-7.688 2.888-9.788 5.025l-.112.112-.113-.112C13.16 5.262 9.71 2.562 5.51 2.375h-.225V7.4H.41v8.662c0 2.1.075 4.2.225 5.925a6.962 6.962 0 006.487 6.376c2.663.15 5.475.262 8.288.262 2.812 0 5.625-.113 8.287-.3a6.963 6.963 0 006.488-6.375c.15-1.725.225-3.825.225-5.925V7.4h-4.875zm0 8.662c0 1.988-.075 3.938-.225 5.513-.113 1.012-.938 1.838-1.95 1.875-5.294.375-10.607.375-15.9 0-1.013-.037-1.875-.863-1.95-1.875-.15-1.575-.225-3.563-.225-5.512V7.4c3.525.15 7.05 3.938 8.1 5.4l2.025 2.813 2.025-2.813c1.05-1.5 4.575-5.25 8.1-5.4v8.662z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_950">
          <path
            fill={resolvedTheme === "dark" ? "white" : "black"}
            d="M0 0H30V30H0z"
            transform="translate(.41 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function VisionIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="27"
      fill="none"
      viewBox="0 0 46 27"
    >
      <path
        stroke={resolvedTheme === "dark" ? "white" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.167"
        d="M23 2.583c2.381 0 4.656.073 6.823.217 2.119.142 4.062.431 5.83.875 1.693.423 3.166 1.052 4.414 1.894a8.13 8.13 0 012.766 3.19c.68 1.368 1 3.083 1 5.137 0 2.096-.393 3.979-1.195 5.64-.782 1.622-1.846 2.908-3.203 3.85a7.7 7.7 0 01-4.5 1.374c-1.06 0-2.02-.141-2.879-.437-.852-.29-1.67-.672-2.437-1.142a38.455 38.455 0 01-2.177-1.448 18.953 18.953 0 00-2.086-1.312 4.95 4.95 0 00-2.354-.627c-.777 0-1.562.202-2.358.625-.659.354-1.354.791-2.084 1.312-.67.48-1.395.963-2.18 1.448-.767.47-1.583.853-2.434 1.142-.86.296-1.817.437-2.871.437a7.72 7.72 0 01-4.51-1.373c-1.357-.941-2.421-2.229-3.203-3.85-.802-1.662-1.195-3.541-1.195-5.643-.009-2.042.312-3.755.993-5.125a8.119 8.119 0 012.771-3.19c1.25-.84 2.723-1.467 4.417-1.89a33.518 33.518 0 015.833-.88A100.17 100.17 0 0123 2.582z"
      ></path>
    </svg>
  );
}

export function ApiIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="46"
      fill="none"
      viewBox="0 0 44 46"
      className="w-8 h-8"
    >
      <path
        fill={resolvedTheme === "dark" ? "white" : "black"}
        d="M42.087.766c-2.608.664-6.654 2.782-11.19 6.588A20.118 20.118 0 0021 4.75C9.782 4.75.687 13.844.687 25.063.688 36.28 9.783 45.374 21 45.374c11.218 0 20.313-9.095 20.313-20.313a20.24 20.24 0 00-5.738-14.141 15.172 15.172 0 00-1.66 2.676 17.203 17.203 0 014.38 11.466c0 9.537-7.758 17.295-17.294 17.295-3.003 0-5.954-.788-8.558-2.285 8.1-10.481 14.726-3.688 18-22.134.565-3.185 2.734-9.205 12.326-15.642.79-.53.238-1.766-.682-1.531zM9.77 38.188a17.252 17.252 0 01-6.065-13.126c0-9.537 7.759-17.294 17.295-17.294A16.992 16.992 0 0128.483 9.5C22.04 15.566 16.095 24.43 9.77 38.187z"
      ></path>
    </svg>
  );
}

export function PointerIcon() {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        fill={resolvedTheme === "dark" ? "white" : "black"}
        d="M43.75 25a18.75 18.75 0 10-37.499 0 18.75 18.75 0 0037.499 0zM0 25a25 25 0 1150 0 25 25 0 01-50 0zm25 7.813a7.813 7.813 0 100-15.626 7.813 7.813 0 000 15.625zm0-21.876a14.063 14.063 0 110 28.126 14.063 14.063 0 010-28.126zM21.875 25a3.125 3.125 0 116.25 0 3.125 3.125 0 01-6.25 0z"
      ></path>
    </svg>
  );
}

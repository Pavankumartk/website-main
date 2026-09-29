"use client";















import {







&#x20; useState,







&#x20; useRef,







&#x20; useEffect,







&#x20; useMemo,







&#x20; type FormEvent,







&#x20; type ReactNode,







} from "react";







import { createPortal } from "react-dom";







import { allCountries } from "country-telephone-data";







import {







&#x20; isValidPhoneNumber,







&#x20; type CountryCode,







} from "libphonenumber-js";







import styles from "./TalkToOurExpert.module.css";















interface RawCountry {







&#x20; name: string;







&#x20; iso2: string;







&#x20; dialCode: string;







}















interface TalkToOurExpertProps {







&#x20; isOpen?: boolean;







&#x20; onClose?: () => void;







&#x20; onPlayClick?: () => void;







}















interface FormState {







&#x20; fullName: string;







&#x20; email: string;







&#x20; countryIso2: string;







&#x20; phoneNumber: string;







&#x20; interest: string;







&#x20; query: string;







&#x20; consent: boolean;







}















interface TouchedState {







&#x20; fullName: boolean;







&#x20; email: boolean;







&#x20; phoneNumber: boolean;







&#x20; interest: boolean;







&#x20; query: boolean;







&#x20; consent: boolean;







}















const INTEREST_OPTIONS = [







&#x20; "LXP",







&#x20; "Content Management",







&#x20; "Course Management",







&#x20; "Assessments @ Analytics",







&#x20; "Interactive Learning",







&#x20; "Gamification",







&#x20; "Corporate L&D",







&#x20; "Higher Education",







&#x20; "Geenral  Enquiry",







&#x20; "Custom Requirement",







&#x20; "Other",







];















const NAME_PATTERN = /^[A-Za-z]+(?: [A-Za-z]+)\*$/;















const EMAIL_PATTERN =

&#x20; /^[A-Za-z0-9.!#$%&'\*+/=?^\_\`{|}\~-]+@[A-Za-z0-9]\(?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\\.[A-Za-z0-9]\(?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;















const COMMON_EMAIL_DOMAINS: Record\<string, string> = {







&#x20; gmail: "gmail.com",







&#x20; yahoo: "yahoo.com",







&#x20; outlook: "outlook.com",







&#x20; hotmail: "hotmail.com",







&#x20; icloud: "icloud.com",







};















function validateEmailAddress(value: string) {







&#x20; const normalized = value.trim().toLowerCase();















&#x20; if (!EMAIL_PATTERN.test(normalized)) {







&#x20;   return {







&#x20;     valid: false,







&#x20;     message: "Please enter a valid email address.",







&#x20;   };







&#x20; }















&#x20; const [, domain = ""] = normalized.split("@");







&#x20; const provider = domain.split(".")[0] ?? "";







&#x20; const requiredDomain = COMMON_EMAIL_DOMAINS[provider];















&#x20; if (requiredDomain && domain !== requiredDomain) {







&#x20;   return {







&#x20;     valid: false,







&#x20;     message: \`Please enter the complete email address. Did you mean ${requiredDomain}?\`,







&#x20;   };







&#x20; }















&#x20; return {







&#x20;   valid: true,







&#x20;   message: "",







&#x20; };







}















/\*







&#x20;\* Phone numbers are validated against the selected country.







&#x20;\* libphonenumber-js supplies the country-specific numbering rules,







&#x20;\* including valid lengths and prefixes. Do not apply a global







&#x20;\* 10-digit rule because countries use different numbering plans.







&#x20;\*/







const MAX_PHONE_DIGITS = 15;







const MAX_QUERY_LENGTH = 250;















const VIDEO_SRC = "/videos/TalkToOurExpert.mp4";















const getCountryFlagUrl = (iso2: string) =>



&#x20; \`https\://flagcdn.com/24x18/${iso2.toLowerCase()}.png\`;







const COUNTRIES = (







&#x20; allCountries as unknown as RawCountry[]







).filter(







&#x20; (country, index, list) =>







&#x20;   list.findIndex((entry) => entry.iso2 === country.iso2) === index







);























function IconBubble({ children }: { children: ReactNode }) {







&#x20; return (







&#x20;   \<span className={styles["tte-icon-bubble"]}>







&#x20;     {children}







&#x20;   \</span>







&#x20; );







}















function UserIcon() {







&#x20; return (







&#x20;   \<svg width="21" height="26" viewBox="0 0 21 26" fill="none">







&#x20;     \<g filter="url(#tteUserShadow)">







&#x20;       \<path







&#x20;         d="M14.6338 7.09509C14.6356 4.79391 12.7715 2.92696 10.4704 2.92515C8.16919 2.92334 6.30224 4.78736 6.30044 7.08854C6.29863 9.38971 8.16265 11.2567 10.4638 11.2585C12.765 11.2603 14.632 9.39625 14.6338 7.09509Z"







&#x20;         stroke="#FFFFFF"







&#x20;         strokeWidth="1.25"







&#x20;         strokeLinecap="round"







&#x20;         strokeLinejoin="round"







&#x20;       />







&#x20;       \<path







&#x20;         d="M16.292 17.0964C16.2945 13.8747 13.6849 11.261 10.4632 11.2585C7.24156 11.256 4.62783 13.8656 4.6253 17.0872"







&#x20;         stroke="#2D4CC8"







&#x20;         strokeWidth="1.25"







&#x20;         strokeLinecap="round"







&#x20;         strokeLinejoin="round"







&#x20;       />







&#x20;     \</g>















&#x20;     \<defs>







&#x20;       \<filter







&#x20;         id="tteUserShadow"







&#x20;         x="-3.54395"







&#x20;         y="0"







&#x20;         width="28.0156"







&#x20;         height="28.0156"







&#x20;         filterUnits="userSpaceOnUse"







&#x20;         colorInterpolationFilters="sRGB"







&#x20;       \>







&#x20;         \<feFlood floodOpacity="0" result="tteUserBg" />







&#x20;         \<feColorMatrix







&#x20;           in="SourceAlpha"







&#x20;           type="matrix"







&#x20;           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"







&#x20;           result="tteUserHardAlpha"







&#x20;         />







&#x20;         \<feOffset dy="4" />







&#x20;         \<feGaussianBlur stdDeviation="2" />







&#x20;         \<feComposite







&#x20;           in2="tteUserHardAlpha"







&#x20;           operator="out"







&#x20;         />







&#x20;         \<feColorMatrix







&#x20;           type="matrix"







&#x20;           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"







&#x20;         />







&#x20;         \<feBlend







&#x20;           mode="normal"







&#x20;           in2="tteUserBg"







&#x20;           result="tteUserShadowBlend"







&#x20;         />







&#x20;         \<feBlend







&#x20;           mode="normal"







&#x20;           in="SourceGraphic"







&#x20;           in2="tteUserShadowBlend"







&#x20;           result="shape"







&#x20;         />







&#x20;       \</filter>







&#x20;     \</defs>







&#x20;   \</svg>







&#x20; );







}















function MailIcon() {







&#x20; return (







&#x20;   \<svg width="26" height="26" viewBox="0 0 26 26" fill="none">







&#x20;     \<g filter="url(#tteMailShadow)">







&#x20;       \<path







&#x20;         d="M4.625 5L10.3858 8.26414C12.5097 9.4675 13.407 9.4675 15.5308 8.26414L21.2917 5"







&#x20;         stroke="#2D4CC8"







&#x20;         strokeWidth="1.25"







&#x20;         strokeLinejoin="round"







&#x20;       />















&#x20;       \<path







&#x20;         d="M4.63814 11.231C4.69262 13.7856 4.71986 15.0629 5.66247 16.0091C6.60507 16.9553 7.91694 16.9882 10.5407 17.0541C12.1577 17.0948 13.7589 17.0948 15.376 17.0541C17.9997 16.9882 19.3116 16.9553 20.2542 16.0091C21.1968 15.0629 21.2241 13.7856 21.2785 11.231C21.2961 10.4096 21.2961 9.59305 21.2785 8.77164C21.2241 6.21702 21.1968 4.93971 20.2542 3.99352C19.3116 3.04733 17.9997 3.01437 15.376 2.94844C13.7589 2.90781 12.1577 2.90781 10.5407 2.94844C7.91694 3.01435 6.60507 3.04731 5.66246 3.99351C4.71985 4.9397 4.69262 6.21701 4.63813 8.77164C4.62062 9.59305 4.62063 10.4096 4.63814 11.231Z"







&#x20;         stroke="#2D4CC8"







&#x20;         strokeWidth="1.25"







&#x20;         strokeLinejoin="round"







&#x20;       />







&#x20;     \</g>















&#x20;     \<defs>







&#x20;       \<filter







&#x20;         id="tteMailShadow"







&#x20;         x="-1.04102"







&#x20;         y="0"







&#x20;         width="28"







&#x20;         height="28"







&#x20;         filterUnits="userSpaceOnUse"







&#x20;         colorInterpolationFilters="sRGB"







&#x20;       \>







&#x20;         \<feFlood floodOpacity="0" result="tteMailBg" />







&#x20;         \<feColorMatrix







&#x20;           in="SourceAlpha"







&#x20;           type="matrix"







&#x20;           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"







&#x20;           result="tteMailHardAlpha"







&#x20;         />







&#x20;         \<feOffset dy="4" />







&#x20;         \<feGaussianBlur stdDeviation="2" />







&#x20;         \<feComposite







&#x20;           in2="tteMailHardAlpha"







&#x20;           operator="out"







&#x20;         />







&#x20;         \<feColorMatrix







&#x20;           type="matrix"







&#x20;           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"







&#x20;         />







&#x20;         \<feBlend







&#x20;           mode="normal"







&#x20;           in2="tteMailBg"







&#x20;           result="tteMailShadowBlend"







&#x20;         />







&#x20;         \<feBlend







&#x20;           mode="normal"







&#x20;           in="SourceGraphic"







&#x20;           in2="tteMailShadowBlend"







&#x20;           result="shape"







&#x20;         />







&#x20;       \</filter>







&#x20;     \</defs>







&#x20;   \</svg>







&#x20; );







}















function PhoneIcon() {







&#x20; return (







&#x20;   \<svg width="21" height="21" viewBox="0 0 21 21" fill="none">







&#x20;     \<path







&#x20;       d="M7.64387 4.76618L7.30891 4.01093C7.0899 3.51712 6.98039 3.2702 6.81648 3.08118C6.61106 2.84429 6.34319 2.66991 6.04344 2.57794C5.80425 2.50454 5.53414 2.50433 4.99394 2.5039C4.20369 2.50328 3.80856 2.50297 3.47675 2.65462C3.08589 2.83325 2.73273 3.22153 2.59182 3.62751C2.4722 3.97216 2.50611 4.32647 2.57392 5.03508C3.29577 12.5777 7.42744 16.7159 14.9689 17.4496C15.6774 17.5185 16.0317 17.553 16.3765 17.4339C16.7828 17.2936 17.1716 16.9411 17.3509 16.5505C17.503 16.219 17.5033 15.8238 17.5039 15.0335C17.5043 14.4934 17.5045 14.2233 17.4315 13.984C17.34 13.6841 17.1661 13.4159 16.9295 13.2101C16.7408 13.0459 16.494 12.936 16.0005 12.7162L15.2458 12.3801C14.7114 12.1421 14.4442 12.023 14.1726 11.997C13.9126 11.972 13.6505 12.0083 13.4071 12.1029C13.1528 12.2017 12.928 12.3888 12.4782 12.763C12.0305 13.1354 11.8067 13.3216 11.5333 13.4213C11.2909 13.5097 10.9706 13.5422 10.7154 13.5044C10.4275 13.4617 10.2072 13.3437 9.76648 13.1078C8.39539 12.3736 7.63954 11.6166 6.90757 10.2444C6.67231 9.80327 6.55468 9.58276 6.51248 9.29481C6.47507 9.03962 6.50811 8.71931 6.59682 8.47705C6.69688 8.20381 6.88347 7.98027 7.25663 7.53318C7.63151 7.08404 7.81896 6.85947 7.91816 6.60529C8.0131 6.36206 8.04979 6.09997 8.02527 5.84002C7.99964 5.56837 7.88105 5.30097 7.64387 4.76618Z"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function ClipboardIcon() {







&#x20; return (







&#x20;   \<svg width="20" height="20" viewBox="0 0 20 20" fill="none">







&#x20;     \<path







&#x20;       d="M10 9.16602H13.3333"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M10 13.334H13.3333"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M6.66699 9.16602H6.67533"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M6.66699 13.334H6.67533"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M12.0837 1.66602H7.91699C7.22663 1.66602 6.66699 2.22566 6.66699 2.91602C6.66699 3.60637 7.22663 4.16602 7.91699 4.16602H12.0837C12.774 4.16602 13.3337 3.60637 13.3337 2.91602C13.3337 2.22566 12.774 1.66602 12.0837 1.66602Z"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M13.333 2.91602C14.6276 2.95502 15.3997 3.09941 15.9341 3.63382C16.6663 4.36605 16.6663 5.54455 16.6663 7.90154V13.3323C16.6663 15.6893 16.6663 16.8678 15.9341 17.6C15.2018 18.3323 14.0233 18.3323 11.6663 18.3323H8.33301C5.97599 18.3323 4.79748 18.3323 4.06525 17.6C3.33302 16.8678 3.33302 15.6893 3.33301 13.3323L3.33302 7.90159C3.33302 5.54456 3.33301 4.36605 4.06524 3.63382C4.59965 3.09941 5.37177 2.95502 6.66626 2.91602"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function ArrowDownIcon({ open }: { open?: boolean }) {







&#x20; return (







&#x20;   \<svg







&#x20;     width="12"







&#x20;     height="7"







&#x20;     viewBox="0 0 12 7"







&#x20;     fill="none"







&#x20;     className={\`${styles["tte-chevron"]}${







&#x20;       open ? \` ${styles["tte-chevron-open"]}\` : ""







&#x20;     }\`}







&#x20;   \>







&#x20;     \<path







&#x20;       d="M10.625 0.625041C10.625 0.625041 6.94258 5.625 5.625 5.625C4.30733 5.625 0.625 0.625 0.625 0.625"







&#x20;       stroke="#141B34"







&#x20;       strokeWidth="1.25"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}























function HeadsetIcon() {







&#x20; return (







&#x20;   \<svg







&#x20;     width="24"







&#x20;     height="24"







&#x20;     viewBox="0 0 24 24"







&#x20;     fill="none"







&#x20;     aria-hidden="true"







&#x20;     focusable="false"







&#x20;   \>







&#x20;     \<defs>







&#x20;       \<linearGradient







&#x20;         id="tteHeadsetGradient"







&#x20;         x1="3"







&#x20;         y1="4"







&#x20;         x2="21"







&#x20;         y2="20"







&#x20;         gradientUnits="userSpaceOnUse"







&#x20;       \>







&#x20;         \<stop offset="0%" stopColor="#2D4CC8" />







&#x20;         \<stop offset="55%" stopColor="#5A42BD" />







&#x20;         \<stop offset="100%" stopColor="#B22686" />







&#x20;       \</linearGradient>







&#x20;     \</defs>















&#x20;     \<path







&#x20;       d="M4 13V11C4 6.582 7.582 3 12 3C16.418 3 20 6.582 20 11V13"







&#x20;       stroke="url(#tteHeadsetGradient)"







&#x20;       strokeWidth="1.8"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M4 12.5H5.25C6.216 12.5 7 13.284 7 14.25V17.75C7 18.716 6.216 19.5 5.25 19.5H4.75C3.784 19.5 3 18.716 3 17.75V13.5C3 12.948 3.448 12.5 4 12.5Z"







&#x20;       stroke="url(#tteHeadsetGradient)"







&#x20;       strokeWidth="1.8"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M20 12.5H18.75C17.784 12.5 17 13.284 17 14.25V17.75C17 18.716 17.784 19.5 18.75 19.5H19.25C20.216 19.5 21 18.716 21 17.75V13.5C21 12.948 20.552 12.5 20 12.5Z"







&#x20;       stroke="url(#tteHeadsetGradient)"







&#x20;       strokeWidth="1.8"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M17 19.5C16.4 21 14.9 21 13.5 21"







&#x20;       stroke="url(#tteHeadsetGradient)"







&#x20;       strokeWidth="1.8"







&#x20;       strokeLinecap="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function BotIcon() {







&#x20; return (







&#x20;   \<svg width="28" height="28" viewBox="0 0 28 28" fill="none">







&#x20;     \<path







&#x20;       d="M15.167 8.16602H12.8337C9.55659 8.16602 7.91804 8.16602 6.741 8.95249C6.23145 9.29297 5.79395 9.73047 5.45347 10.24C4.66699 11.4171 4.66699 13.0556 4.66699 16.3327C4.66699 19.6097 4.66699 21.2483 5.45347 22.4254C5.79395 22.9348 6.23145 23.3723 6.741 23.7129C7.91804 24.4993 9.55659 24.4994 12.8337 24.4994H15.167C18.444 24.4994 20.0826 24.4993 21.2597 23.7129C21.7692 23.3723 22.2067 22.9348 22.5472 22.4254C23.3337 21.2483 23.3337 19.6097 23.3337 16.3327C23.3337 13.0556 23.3337 11.4171 22.5472 10.24C22.2067 9.73047 21.7692 9.29297 21.2597 8.95249C20.0826 8.16602 18.444 8.16602 15.167 8.16602Z"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M4.66634 16.334H2.33301"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M11.667 19.834H16.3337"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M25.6663 16.334H23.333"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M17.5 12.834V15.1673"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M10.5 12.834V15.1673"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;     \<path







&#x20;       d="M13.9997 8.16667C13.9997 5.96678 13.9997 4.86683 13.3162 4.18342C12.6328 3.5 11.5329 3.5 9.33301 3.5"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.75"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function ResizeIcon() {







&#x20; return (







&#x20;   \<svg width="24" height="24" viewBox="0 0 24 24" fill="none">







&#x20;     \<path







&#x20;       d="M20 4L4 20M20 11L11 20M20 18L18 20"







&#x20;       stroke="#2F3547"







&#x20;       strokeWidth="1.5"







&#x20;       strokeLinecap="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function RadioCheckedIcon() {







&#x20; return (







&#x20;   \<svg width="16" height="16" viewBox="0 0 16 16" fill="none">







&#x20;     \<circle







&#x20;       cx="8"







&#x20;       cy="8"







&#x20;       r="7.3"







&#x20;       fill="#2D4CC8"







&#x20;       stroke="#2D4CC8"







&#x20;       strokeWidth="1.5"







&#x20;     />







&#x20;     \<path







&#x20;       d="M5.3 8.2L7.1 10L10.7 6.2"







&#x20;       stroke="#FFFFFF"







&#x20;       strokeWidth="1.5"







&#x20;       strokeLinecap="round"







&#x20;       strokeLinejoin="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function RadioEmptyIcon() {







&#x20; return (







&#x20;   \<svg width="16" height="16" viewBox="0 0 16 16" fill="none">







&#x20;     \<circle







&#x20;       cx="8"







&#x20;       cy="8"







&#x20;       r="6.7"







&#x20;       stroke="rgba(49, 52, 75, 0.2)"







&#x20;       strokeWidth="1.5"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















function CloseIcon() {







&#x20; return (







&#x20;   \<svg







&#x20;     width="20"







&#x20;     height="20"







&#x20;     viewBox="0 0 24 24"







&#x20;     fill="none"







&#x20;     aria-hidden="true"







&#x20;     focusable="false"







&#x20;   \>







&#x20;     \<path







&#x20;       d="M6 6L18 18M18 6L6 18"







&#x20;       stroke="#31344B"







&#x20;       strokeWidth="2"







&#x20;       strokeLinecap="round"







&#x20;     />







&#x20;   \</svg>







&#x20; );







}















export default function TalkToOurExpert({







&#x20; isOpen = false,







&#x20; onClose = () => {},







}: TalkToOurExpertProps = {}) {







&#x20; const dialogRef = useRef\<HTMLDivElement | null>(null);







&#x20; const previousActiveElement = useRef\<HTMLElement | null>(null);







&#x20; const countryDropdownRef = useRef\<HTMLDivElement | null>(null);







&#x20; const interestDropdownRef = useRef\<HTMLDivElement | null>(null);















&#x20; const [formData, setFormData] = useState\<FormState>({







&#x20;   fullName: "",







&#x20;   email: "",







&#x20;   countryIso2: "in",







&#x20;   phoneNumber: "",







&#x20;   interest: "LXP",







&#x20;   query: "",







&#x20;   consent: false,







&#x20; });















&#x20; const [touched, setTouched] = useState\<TouchedState>({







&#x20;   fullName: false,







&#x20;   email: false,







&#x20;   phoneNumber: false,







&#x20;   interest: false,







&#x20;   query: false,







&#x20;   consent: false,







&#x20; });















&#x20; const [countrySearch, setCountrySearch] = useState("");







&#x20; const [isCountryOpen, setIsCountryOpen] = useState(false);







&#x20; const [isInterestOpen, setIsInterestOpen] = useState(false);







&#x20; const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);







&#x20; const [submitted, setSubmitted] = useState(false);















&#x20; useEffect(() => {







&#x20;   if (!isOpen) {







&#x20;     setFormData({







&#x20;       fullName: "",







&#x20;       email: "",







&#x20;       countryIso2: "in",







&#x20;       phoneNumber: "",







&#x20;       interest: "LXP",







&#x20;       query: "",







&#x20;       consent: false,







&#x20;     });















&#x20;     setTouched({







&#x20;       fullName: false,







&#x20;       email: false,







&#x20;       phoneNumber: false,







&#x20;       interest: false,







&#x20;       query: false,







&#x20;       consent: false,







&#x20;     });















&#x20;     setSubmitted(false);







&#x20;     setCountrySearch("");







&#x20;     setIsCountryOpen(false);







&#x20;     setIsInterestOpen(false);







&#x20;     setIsPrivacyOpen(false);















&#x20;     return;







&#x20;   }















&#x20;   previousActiveElement.current =







&#x20;     document.activeElement as HTMLElement | null;















&#x20;   const previousOverflow = document.body.style.overflow;















&#x20;   document.body.style.overflow = "hidden";







&#x20;   document.body.classList.add("modal-open");















&#x20;   const handleKeyDown = (event: KeyboardEvent) => {







&#x20;     if (event.key === "Escape") {







&#x20;       onClose();







&#x20;     }







&#x20;   };















&#x20;   document.addEventListener("keydown", handleKeyDown);















&#x20;   requestAnimationFrame(() => {







&#x20;     dialogRef.current?.focus();







&#x20;   });















&#x20;   return () => {







&#x20;     document.removeEventListener("keydown", handleKeyDown);







&#x20;     document.body.style.overflow = previousOverflow;







&#x20;     document.body.classList.remove("modal-open");







&#x20;     previousActiveElement.current?.focus();







&#x20;   };







&#x20; }, [isOpen, onClose]);















&#x20; useEffect(() => {







&#x20;   function handleClickOutside(event: MouseEvent) {







&#x20;     if (







&#x20;       countryDropdownRef.current &&







&#x20;       !countryDropdownRef.current.contains(event.target as Node)







&#x20;     ) {







&#x20;       setIsCountryOpen(false);







&#x20;     }















&#x20;     if (







&#x20;       interestDropdownRef.current &&







&#x20;       !interestDropdownRef.current.contains(event.target as Node)







&#x20;     ) {







&#x20;       setIsInterestOpen(false);







&#x20;     }







&#x20;   }















&#x20;   document.addEventListener("mousedown", handleClickOutside);















&#x20;   return () =>







&#x20;     document.removeEventListener("mousedown", handleClickOutside);







&#x20; }, []);















&#x20; const selectedCountry = useMemo(







&#x20;   () =>







&#x20;     COUNTRIES.find(







&#x20;       (country) => country.iso2 === formData.countryIso2







&#x20;     ) ?? COUNTRIES[0],







&#x20;   [formData.countryIso2]







&#x20; );















&#x20; const filteredCountries = useMemo(() => {







&#x20;   const query = countrySearch.trim().toLowerCase();















&#x20;   if (!query) {







&#x20;     return COUNTRIES;







&#x20;   }















&#x20;   const normalizedQuery = query







&#x20;     .replace(/[()\s-]/g, "")







&#x20;     .replace(/^\\+/, "");















&#x20;   /\*







&#x20;    \* Exact ISO-code search gets highest priority.







&#x20;    \* Example: typing "IN" returns India directly instead of matching







&#x20;    \* every country name that happens to contain the letters "in".







&#x20;    \*/







&#x20;   const exactIsoMatch = COUNTRIES.filter(







&#x20;     (country) =>







&#x20;       country.iso2.toLowerCase() ===







&#x20;       query.replace(/[^a-z]/g, "")







&#x20;   );















&#x20;   if (exactIsoMatch.length > 0) {







&#x20;     return exactIsoMatch;







&#x20;   }















&#x20;   return COUNTRIES.filter((country) => {







&#x20;     const countryName = country.name.toLowerCase();







&#x20;     const iso2 = country.iso2.toLowerCase();







&#x20;     const dialCode = country.dialCode.replace(/^\\+/, "");







&#x20;     const shortLabel = \`${iso2}(+${dialCode})\`;















&#x20;     return (







&#x20;       countryName.includes(query) ||







&#x20;       iso2.startsWith(query) ||







&#x20;       dialCode.includes(normalizedQuery) ||







&#x20;       shortLabel.includes(query.replace(/\s/g, ""))







&#x20;     );







&#x20;   });







&#x20; }, [countrySearch]);















&#x20; const errors = useMemo(







&#x20;   () => ({







&#x20;     fullName: !NAME_PATTERN.test(formData.fullName.trim())







&#x20;       ? "Please enter a valid name using letters and spaces only."







&#x20;       : "",















&#x20;     email: validateEmailAddress(formData.email).message,















&#x20;     phoneNumber: (() => {







&#x20;       const phone = formData.phoneNumber.trim();















&#x20;       if (!phone) {







&#x20;         return \`Please enter a valid phone number for ${selectedCountry.name} (+${selectedCountry.dialCode}).\`;







&#x20;       }















&#x20;       const countryCode =







&#x20;         formData.countryIso2.toUpperCase() as CountryCode;















&#x20;       /\*







&#x20;        \* Validate the number against the selected country's numbering plan.







&#x20;        \* This handles country-specific length, prefixes, and number ranges.







&#x20;        \*/







&#x20;       const countryNumberIsValid = isValidPhoneNumber(







&#x20;         phone,







&#x20;         countryCode







&#x20;       );















&#x20;       if (!countryNumberIsValid) {







&#x20;         return \`Please enter a valid phone number for ${selectedCountry.name} (+${selectedCountry.dialCode}).\`;







&#x20;       }















&#x20;       return "";







&#x20;     })(),















&#x20;     query:







&#x20;       formData.query.trim().length === 0







&#x20;         ? "Please enter your query."







&#x20;         : "",















&#x20;     consent: !formData.consent







&#x20;       ? "Please accept the privacy policy to continue."







&#x20;       : "",







&#x20;   }),







&#x20;   [formData, selectedCountry]







&#x20; );















&#x20; const isFormValid =







&#x20;   !errors.fullName &&







&#x20;   !errors.email &&







&#x20;   !errors.phoneNumber &&







&#x20;   !errors.query &&







&#x20;   !errors.consent;















&#x20; const handleFieldChange = \<K extends keyof FormState>(







&#x20;   field: K,







&#x20;   value: FormState[K]







&#x20; ) => {







&#x20;   setFormData((prev) => ({







&#x20;     ...prev,







&#x20;     [field]: value,







&#x20;   }));







&#x20; };















&#x20; const handleBlur = (field: keyof TouchedState) => {







&#x20;   setTouched((prev) => ({







&#x20;     ...prev,







&#x20;     [field]: true,







&#x20;   }));







&#x20; };















&#x20; const openCountryDropdown = () => {







&#x20;   setIsInterestOpen(false);







&#x20;   setIsCountryOpen((open) => !open);







&#x20; };















&#x20; const openInterestDropdown = () => {







&#x20;   setIsCountryOpen(false);







&#x20;   setIsInterestOpen((open) => !open);







&#x20; };















&#x20; const handleSubmit = async (event: FormEvent\<HTMLFormElement>) => {







&#x20;   event.preventDefault();















&#x20;   setTouched({







&#x20;     fullName: true,







&#x20;     email: true,







&#x20;     phoneNumber: true,







&#x20;     interest: true,







&#x20;     query: true,







&#x20;     consent: true,







&#x20;   });















&#x20;   if (!isFormValid) {







&#x20;     return;







&#x20;   }















&#x20;   try {







&#x20;     const response = await fetch("http\\\\://localhost:4000/talk-to-expert", {







&#x20;       method: "POST",







&#x20;       headers: {







&#x20;         "Content-Type": "application/json",







&#x20;       },







&#x20;       body: JSON.stringify({







&#x20;         fullName: formData.fullName.trim(),







&#x20;         email: formData.email.trim(),







&#x20;         countryCode: formData.countryIso2.toUpperCase(),







&#x20;         phone: formData.phoneNumber.replace(/\D/g, ""),







&#x20;         interest: formData.interest,







&#x20;         query: formData.query.trim(),







&#x20;         consent: formData.consent,







&#x20;       }),







&#x20;     });















&#x20;     let responseData: unknown = null;















&#x20;     try {







&#x20;       responseData = await response.json();







&#x20;     } catch {







&#x20;       responseData = null;







&#x20;     }















&#x20;     if (!response.ok) {







&#x20;       let errorMessage = "Unable to submit your query.";















&#x20;       if (







&#x20;         responseData &&







&#x20;         typeof responseData === "object" &&







&#x20;         "message" in responseData







&#x20;       ) {







&#x20;         const message = responseData.message;















&#x20;         if (typeof message === "string") {







&#x20;           errorMessage = message;







&#x20;         } else if (Array.isArray(message)) {







&#x20;           errorMessage = message.join("\n");







&#x20;         }







&#x20;       }















&#x20;       throw new Error(errorMessage);







&#x20;     }















&#x20;     setSubmitted(true);







&#x20;   } catch (error) {







&#x20;     const errorMessage =







&#x20;       error instanceof Error







&#x20;         ? error.message







&#x20;         : "Unable to submit your query.";















&#x20;     window\.alert(errorMessage);







&#x20;   }







&#x20; };















&#x20; if (!isOpen) {







&#x20;   return null;







&#x20; }















&#x20; const modalContent = (







&#x20;   \<div







&#x20;     className={styles["tte-overlay"]}







&#x20;     onMouseDown={(event) => {







&#x20;       if (event.target === event.currentTarget) {







&#x20;         onClose();







&#x20;       }







&#x20;     }}







&#x20;   \>







&#x20;     \<div







&#x20;       className={styles["tte-dialog"]}







&#x20;       role="dialog"







&#x20;       aria-modal="true"







&#x20;       aria-labelledby="tte-title"







&#x20;       ref={dialogRef}







&#x20;       tabIndex={-1}







&#x20;     \>







&#x20;       \<button







&#x20;         type="button"







&#x20;         className={styles["tte-close"]}







&#x20;         onClick={onClose}







&#x20;         aria-label="Close talk to our expert form"







&#x20;       \>







&#x20;         \<CloseIcon />







&#x20;       \</button>















&#x20;       \<div className={styles["tte-card"]}>







&#x20;         \<div className={styles["tte-photo-panel"]}>







&#x20;           \<div className={styles["tte-photo-frame"]}>







&#x20;             \<div className={styles["tte-photo-inner"]}>







&#x20;               \<video







&#x20;                 src={VIDEO_SRC}







&#x20;                 autoPlay







&#x20;                 muted







&#x20;                 loop







&#x20;                 playsInline







&#x20;                 className={styles["tte-photo"]}







&#x20;                 aria-label="NeuroLXP learning expert wearing a headset, ready to help"







&#x20;               />







&#x20;             \</div>







&#x20;           \</div>







&#x20;         \</div>















&#x20;         \<div className={styles["tte-form-panel"]}>







&#x20;           \<div className={styles["tte-header"]}>







&#x20;             \<span







&#x20;               className={styles["tte-header-icon"]}







&#x20;               aria-hidden="true"







&#x20;             \>







&#x20;               \<HeadsetIcon />







&#x20;             \</span>















&#x20;             \<div className={styles["tte-header-copy"]}>







&#x20;               \<h2 id="tte-title" className={styles["tte-title"]}>







&#x20;                 Talk to our Expert







&#x20;               \</h2>















&#x20;               \<p className={styles["tte-subtitle"]}>







&#x20;                 \<span>Get personalized learning guidance\</span>







&#x20;               \</p>







&#x20;             \</div>







&#x20;           \</div>















&#x20;           \<div className={styles["tte-form-surface"]}>







&#x20;             {submitted ? (







&#x20;               \<div className={styles["tte-success"]} role="status">







&#x20;                 \<p className={styles["tte-success-title"]}>







&#x20;                   Thanks, {formData.fullName.split(" ")[0]}!







&#x20;                 \</p>















&#x20;                 \<p className={styles["tte-success-body"]}>







&#x20;                   Our expert has received your query and will reach out to







&#x20;                   you shortly.







&#x20;                 \</p>







&#x20;               \</div>







&#x20;             ) : (







&#x20;               \<form







&#x20;                 className={styles["tte-form"]}







&#x20;                 onSubmit={handleSubmit}







&#x20;                 noValidate







&#x20;               \>







&#x20;                 {/\* FULL NAME \*/}







&#x20;                 \<div className={styles["tte-field"]}>







&#x20;                   \<label







&#x20;                     className={styles["tte-label"]}







&#x20;                     htmlFor="tte-fullName"







&#x20;                   \>







&#x20;                     Full Name







&#x20;                   \</label>















&#x20;                   \<div







&#x20;                     className={\`${styles["tte-input-shell"]}${







&#x20;                       touched.fullName && errors.fullName







&#x20;                         ? \` ${styles["tte-input-shell-error"]}\`







&#x20;                         : ""







&#x20;                     }\`}







&#x20;                   \>







&#x20;                     \<IconBubble>







&#x20;                       \<UserIcon />







&#x20;                     \</IconBubble>















&#x20;                     \<input







&#x20;                       id="tte-fullName"







&#x20;                       type="text"







&#x20;                       className={styles["tte-input"]}







&#x20;                       placeholder="Enter your name"







&#x20;                       value={formData.fullName}







&#x20;                       spellCheck={false}







&#x20;                       autoCorrect="off"







&#x20;                       autoCapitalize="words"







&#x20;                       onChange={(event) =>







&#x20;                         handleFieldChange(







&#x20;                           "fullName",







&#x20;                           event.target.value.replace(







&#x20;                             /[^A-Za-z ]/g,







&#x20;                             ""







&#x20;                           )







&#x20;                         )







&#x20;                       }







&#x20;                       onBlur={() => handleBlur("fullName")}







&#x20;                       aria-invalid={







&#x20;                         touched.fullName && Boolean(errors.fullName)







&#x20;                       }







&#x20;                       aria-describedby={







&#x20;                         touched.fullName && errors.fullName







&#x20;                           ? "tte-fullName-error"







&#x20;                           : undefined







&#x20;                       }







&#x20;                     />







&#x20;                   \</div>















&#x20;                   {touched.fullName && errors.fullName && (







&#x20;                     \<span







&#x20;                       id="tte-fullName-error"







&#x20;                       className={styles["tte-error"]}







&#x20;                       role="alert"







&#x20;                     \>







&#x20;                       {errors.fullName}







&#x20;                     \</span>







&#x20;                   )}







&#x20;                 \</div>















&#x20;                 {/\* EMAIL \*/}







&#x20;                 \<div className={styles["tte-field"]}>







&#x20;                   \<label







&#x20;                     className={styles["tte-label"]}







&#x20;                     htmlFor="tte-email"







&#x20;                   \>







&#x20;                     Email Address







&#x20;                   \</label>















&#x20;                   \<div







&#x20;                     className={\`${styles["tte-input-shell"]}${







&#x20;                       touched.email && errors.email







&#x20;                         ? \` ${styles["tte-input-shell-error"]}\`







&#x20;                         : ""







&#x20;                     }\`}







&#x20;                   \>







&#x20;                     \<IconBubble>







&#x20;                       \<MailIcon />







&#x20;                     \</IconBubble>















&#x20;                     \<input







&#x20;                       id="tte-email"







&#x20;                       type="email"







&#x20;                       className={styles["tte-input"]}







&#x20;                       placeholder="Enter your email address"







&#x20;                       value={formData.email}







&#x20;                       onChange={(event) =>







&#x20;                         handleFieldChange(







&#x20;                           "email",







&#x20;                           event.target.value







&#x20;                         )







&#x20;                       }







&#x20;                       onBlur={() => handleBlur("email")}







&#x20;                       aria-invalid={







&#x20;                         touched.email && Boolean(errors.email)







&#x20;                       }







&#x20;                       aria-describedby={







&#x20;                         touched.email && errors.email







&#x20;                           ? "tte-email-error"







&#x20;                           : undefined







&#x20;                       }







&#x20;                     />







&#x20;                   \</div>















&#x20;                   {touched.email && errors.email && (







&#x20;                     \<span







&#x20;                       id="tte-email-error"







&#x20;                       className={styles["tte-error"]}







&#x20;                       role="alert"







&#x20;                     \>







&#x20;                       {errors.email}







&#x20;                     \</span>







&#x20;                   )}







&#x20;                 \</div>















&#x20;                 {/\* PHONE \*/}







&#x20;                 \<div className={styles["tte-field"]}>







&#x20;                   \<label







&#x20;                     className={styles["tte-label"]}







&#x20;                     htmlFor="tte-phone"







&#x20;                   \>







&#x20;                     Phone Number







&#x20;                   \</label>















&#x20;                   \<div className={styles["tte-phone-row"]}>







&#x20;                     \<div







&#x20;                       className={styles["tte-country-select"]}







&#x20;                       ref={countryDropdownRef}







&#x20;                     \>







&#x20;                       \<button







&#x20;                         type="button"







&#x20;                         className={styles["tte-country-trigger"]}







&#x20;                         onClick={openCountryDropdown}







&#x20;                         aria-haspopup="listbox"







&#x20;                         aria-expanded={isCountryOpen}







&#x20;                         aria-controls="tte-country-listbox"







&#x20;                       \>







&#x20;                         \<span className={styles["tte-country-code"]}>



&#x20;                           \<img



&#x20;                             className={styles["tte-country-flag"]}



&#x20;                             src={getCountryFlagUrl(selectedCountry.iso2)}



&#x20;                             width={24}



&#x20;                             height={18}



&#x20;                             alt=""



&#x20;                             aria-hidden="true"



&#x20;                           />



&#x20;                           \<span>+{selectedCountry.dialCode.replace(/^\\+/, "")}\</span>



&#x20;                         \</span>















&#x20;                         \<ArrowDownIcon open={isCountryOpen} />







&#x20;                       \</button>















&#x20;                       {isCountryOpen && (







&#x20;                         \<div







&#x20;                           id="tte-country-listbox"







&#x20;                           className={styles["tte-country-panel"]}







&#x20;                           role="listbox"







&#x20;                         \>







&#x20;                           \<input







&#x20;                             type="text"







&#x20;                             className={styles["tte-country-search"]}







&#x20;                             placeholder="Search country"







&#x20;                             value={countrySearch}







&#x20;                             onChange={(event) =>







&#x20;                               setCountrySearch(event.target.value)







&#x20;                             }







&#x20;                             autoFocus







&#x20;                           />















&#x20;                           \<ul className={styles["tte-country-list"]}>







&#x20;                             {filteredCountries.map((country) => (







&#x20;                               \<li key={country.iso2}>







&#x20;                                 \<button







&#x20;                                   type="button"







&#x20;                                   role="option"







&#x20;                                   aria-selected={







&#x20;                                     country.iso2 ===







&#x20;                                     formData.countryIso2







&#x20;                                   }







&#x20;                                   className={\`${styles["tte-country-option"]}${







&#x20;                                     country.iso2 ===







&#x20;                                     formData.countryIso2







&#x20;                                       ? \` ${styles["tte-country-option-active"]}\`







&#x20;                                       : ""







&#x20;                                   }\`}







&#x20;                                   onClick={() => {







&#x20;                                     handleFieldChange(







&#x20;                                       "countryIso2",







&#x20;                                       country.iso2







&#x20;                                     );







&#x20;                                     setIsCountryOpen(false);







&#x20;                                     setCountrySearch("");







&#x20;                                   }}







&#x20;                                 \>







&#x20;                                   \<span className={styles["tte-country-short-label"]}>



&#x20;                                     \<img



&#x20;                                       className={styles["tte-country-flag"]}



&#x20;                                       src={getCountryFlagUrl(country.iso2)}



&#x20;                                       width={24}



&#x20;                                       height={18}



&#x20;                                       alt=""



&#x20;                                       aria-hidden="true"



&#x20;                                     />



&#x20;                                     \<span>+{country.dialCode.replace(/^\\+/, "")}\</span>





&#x20;                                   \</span>







&#x20;                                 \</button>







&#x20;                               \</li>







&#x20;                             ))}















&#x20;                             {filteredCountries.length === 0 && (







&#x20;                               \<li







&#x20;                                 className={







&#x20;                                   styles["tte-country-empty"]







&#x20;                                 }







&#x20;                               \>







&#x20;                                 No countries match your search.







&#x20;                               \</li>







&#x20;                             )}







&#x20;                           \</ul>







&#x20;                         \</div>







&#x20;                       )}







&#x20;                     \</div>















&#x20;                     \<div







&#x20;                       className={\`${styles["tte-input-shell"]} ${







&#x20;                         styles["tte-input-shell-grow"]







&#x20;                       }${







&#x20;                         touched.phoneNumber && errors.phoneNumber







&#x20;                           ? \` ${styles["tte-input-shell-error"]}\`







&#x20;                           : ""







&#x20;                       }\`}







&#x20;                     \>







&#x20;                       \<IconBubble>







&#x20;                         \<PhoneIcon />







&#x20;                       \</IconBubble>















&#x20;                       \<input







&#x20;                         id="tte-phone"







&#x20;                         type="tel"







&#x20;                         inputMode="numeric"







&#x20;                         maxLength={MAX_PHONE_DIGITS}







&#x20;                         className={styles["tte-input"]}







&#x20;                         placeholder="XXXXXXXXXX"







&#x20;                         value={formData.phoneNumber}







&#x20;                         onChange={(event) => {







&#x20;                           handleFieldChange(







&#x20;                             "phoneNumber",







&#x20;                             event.target.value







&#x20;                               .replace(/[^0-9]/g, "")







&#x20;                               .slice(0, MAX_PHONE_DIGITS)







&#x20;                           );







&#x20;                           setTouched((prev) => ({







&#x20;                             ...prev,







&#x20;                             phoneNumber: true,







&#x20;                           }));







&#x20;                         }}







&#x20;                         onBlur={() => handleBlur("phoneNumber")}







&#x20;                         aria-invalid={







&#x20;                           touched.phoneNumber &&







&#x20;                           Boolean(errors.phoneNumber)







&#x20;                         }







&#x20;                         aria-describedby={







&#x20;                           touched.phoneNumber &&







&#x20;                           errors.phoneNumber







&#x20;                             ? "tte-phone-error"







&#x20;                             : undefined







&#x20;                         }







&#x20;                       />







&#x20;                     \</div>







&#x20;                   \</div>















&#x20;                   {touched.phoneNumber && errors.phoneNumber && (







&#x20;                     \<span







&#x20;                       id="tte-phone-error"







&#x20;                       className={styles["tte-error"]}







&#x20;                       role="alert"







&#x20;                     \>







&#x20;                       {errors.phoneNumber}







&#x20;                     \</span>







&#x20;                   )}







&#x20;                 \</div>















&#x20;                 {/\* INTEREST \*/}







&#x20;                 \<div







&#x20;                   className={styles["tte-field"]}







&#x20;                   ref={interestDropdownRef}







&#x20;                 \>







&#x20;                   \<span







&#x20;                     className={styles["tte-label"]}







&#x20;                     id="tte-interest-label"







&#x20;                   \>







&#x20;                     Select your Interest







&#x20;                   \</span>















&#x20;                   \<button







&#x20;                     type="button"







&#x20;                     className={\`${styles["tte-input-shell"]} ${styles["tte-interest-trigger"]}\`}







&#x20;                     onClick={openInterestDropdown}







&#x20;                     aria-haspopup="listbox"







&#x20;                     aria-expanded={isInterestOpen}







&#x20;                     aria-controls="tte-interest-listbox"







&#x20;                     aria-labelledby="tte-interest-label"







&#x20;                   \>







&#x20;                     \<IconBubble>







&#x20;                       \<ClipboardIcon />







&#x20;                     \</IconBubble>















&#x20;                     \<span className={styles["tte-interest-value"]}>







&#x20;                       {formData.interest}







&#x20;                     \</span>















&#x20;                     \<ArrowDownIcon open={isInterestOpen} />







&#x20;                   \</button>















&#x20;                   {isInterestOpen && (







&#x20;                     \<div







&#x20;                       id="tte-interest-listbox"







&#x20;                       className={styles["tte-interest-panel"]}







&#x20;                       role="listbox"







&#x20;                     \>







&#x20;                       {INTEREST_OPTIONS.map((option) => {







&#x20;                         const checked =







&#x20;                           option === formData.interest;















&#x20;                         return (







&#x20;                           \<button







&#x20;                             type="button"







&#x20;                             key={option}







&#x20;                             role="option"







&#x20;                             aria-selected={checked}







&#x20;                             className={







&#x20;                               styles["tte-interest-option"]







&#x20;                             }







&#x20;                             onClick={() => {







&#x20;                               handleFieldChange(







&#x20;                                 "interest",







&#x20;                                 option







&#x20;                               );















&#x20;                               setTouched((prev) => ({







&#x20;                                 ...prev,







&#x20;                                 interest: true,







&#x20;                               }));















&#x20;                               setIsInterestOpen(false);







&#x20;                             }}







&#x20;                           \>







&#x20;                             \<span







&#x20;                               className={







&#x20;                                 styles["tte-radio-bubble"]







&#x20;                               }







&#x20;                             \>







&#x20;                               {checked ? (







&#x20;                                 \<RadioCheckedIcon />







&#x20;                               ) : (







&#x20;                                 \<RadioEmptyIcon />







&#x20;                               )}







&#x20;                             \</span>















&#x20;                             \<span







&#x20;                               className={\`${







&#x20;                                 styles[







&#x20;                                   "tte-interest-option-label"







&#x20;                                 ]







&#x20;                               }${







&#x20;                                 checked







&#x20;                                   ? \` ${styles["tte-interest-option-label-active"]}\`







&#x20;                                   : ""







&#x20;                               }\`}







&#x20;                             \>







&#x20;                               {option}







&#x20;                             \</span>







&#x20;                           \</button>







&#x20;                         );







&#x20;                       })}







&#x20;                     \</div>







&#x20;                   )}







&#x20;                 \</div>















&#x20;                 {/\* QUERY \*/}







&#x20;                 \<div className={styles["tte-field"]}>







&#x20;                   \<div className={styles["tte-query-header"]}>







&#x20;                     \<label







&#x20;                       className={styles["tte-label"]}







&#x20;                       htmlFor="tte-query"







&#x20;                     \>







&#x20;                       Describe your query or question in detail







&#x20;                     \</label>















&#x20;                     \<span







&#x20;                       id="tte-query-count"







&#x20;                       className={styles["tte-query-count"]}







&#x20;                       aria-live="polite"







&#x20;                     \>







&#x20;                       {MAX_QUERY_LENGTH - formData.query.length}/{MAX_QUERY_LENGTH}&#x20;







&#x20;                     \</span>







&#x20;                   \</div>















&#x20;                   \<div







&#x20;                     className={\`${styles["tte-textarea-shell"]}${







&#x20;                       touched.query && errors.query







&#x20;                         ? \` ${styles["tte-textarea-error"]}\`







&#x20;                         : ""







&#x20;                     }\`}







&#x20;                   \>







&#x20;                     \<textarea







&#x20;                       id="tte-query"







&#x20;                       className={styles["tte-textarea"]}







&#x20;                       placeholder="Write your detailed query here......"







&#x20;                       value={formData.query}







&#x20;                       maxLength={MAX_QUERY_LENGTH}







&#x20;                       onChange={(event) =>







&#x20;                         handleFieldChange(







&#x20;                           "query",







&#x20;                           event.target.value







&#x20;                         )







&#x20;                       }







&#x20;                       onBlur={() => handleBlur("query")}







&#x20;                       aria-invalid={







&#x20;                         touched.query && Boolean(errors.query)







&#x20;                       }







&#x20;                       aria-describedby={







&#x20;                         touched.query && errors.query







&#x20;                           ? "tte-query-error"







&#x20;                           : "tte-query-count"







&#x20;                       }







&#x20;                     />















&#x20;                     \<span







&#x20;                       className={styles["tte-resize-icon"]}







&#x20;                       aria-hidden="true"







&#x20;                     \>







&#x20;                       \<ResizeIcon />







&#x20;                     \</span>







&#x20;                   \</div>















&#x20;                   {touched.query && errors.query && (







&#x20;                     \<div className={styles["tte-query-meta"]}>







&#x20;                       \<span







&#x20;                         id="tte-query-error"







&#x20;                         className={styles["tte-error"]}







&#x20;                         role="alert"







&#x20;                       \>







&#x20;                         {errors.query}







&#x20;                       \</span>







&#x20;                     \</div>







&#x20;                   )}















&#x20;                   {formData.query.length === MAX_QUERY_LENGTH && (







&#x20;                     \<div className={styles["tte-query-meta"]}>







&#x20;                       \<span







&#x20;                         className={styles["tte-query-limit-message"]}







&#x20;                         role="status"







&#x20;                         aria-live="polite"







&#x20;                       \>







&#x20;                         Maximum character limit reached.







&#x20;                       \</span>







&#x20;                     \</div>







&#x20;                   )}







&#x20;                 \</div>















&#x20;                 {/\* CONSENT \*/}







&#x20;                 \<div className={styles["tte-consent"]}>







&#x20;                   \<input







&#x20;                     type="checkbox"







&#x20;                     className={styles["tte-consent-checkbox"]}







&#x20;                     checked={formData.consent}







&#x20;                     onChange={(event) => {







&#x20;                       handleFieldChange("consent", event.target.checked);







&#x20;                       setTouched((prev) => ({







&#x20;                         ...prev,







&#x20;                         consent: true,







&#x20;                       }));







&#x20;                     }}







&#x20;                     aria-invalid={







&#x20;                       touched.consent &&







&#x20;                       Boolean(errors.consent)







&#x20;                     }







&#x20;                     aria-describedby={







&#x20;                       touched.consent && errors.consent







&#x20;                         ? "tte-consent-error"







&#x20;                         : undefined







&#x20;                     }







&#x20;                   />















&#x20;                   \<span







&#x20;                     className={styles["tte-consent-box"]}







&#x20;                     aria-hidden="true"







&#x20;                   \>







&#x20;                     {formData.consent && (







&#x20;                       \<svg







&#x20;                         className={styles["tte-consent-check"]}







&#x20;                         width="12"







&#x20;                         height="12"







&#x20;                         viewBox="0 0 16 16"







&#x20;                         fill="none"







&#x20;                       \>







&#x20;                         \<path







&#x20;                           d="M3.5 8.2L6.7 11.2L12.5 4.8"







&#x20;                           stroke="#2D4CC8"







&#x20;                           strokeWidth="2"







&#x20;                           strokeLinecap="round"







&#x20;                           strokeLinejoin="round"







&#x20;                         />







&#x20;                       \</svg>







&#x20;                     )}







&#x20;                   \</span>















&#x20;                   \<span className={styles["tte-consent-text"]}>







&#x20;                     I agree to be contacted for the platform demo







&#x20;                     and accept the{" "}







&#x20;                     \<button







&#x20;                       type="button"







&#x20;                       className={styles["tte-consent-link"]}







&#x20;                       onClick={() => setIsPrivacyOpen(true)}







&#x20;                       style={{







&#x20;                         border: 0,







&#x20;                         padding: 0,







&#x20;                         background: "transparent",







&#x20;                         font: "inherit",







&#x20;                         cursor: "pointer",







&#x20;                       }}







&#x20;                     \>







&#x20;                       Privacy Policy







&#x20;                     \</button>{" "}







&#x20;                     of{" "}







&#x20;                     \<strong>







&#x20;                       Prgeeq Global Solutions Private Limited.







&#x20;                     \</strong>







&#x20;                   \</span>







&#x20;                 \</div>















&#x20;                 {touched.consent && errors.consent && (







&#x20;                   \<span







&#x20;                     id="tte-consent-error"







&#x20;                     className={styles["tte-error"]}







&#x20;                     role="alert"







&#x20;                   \>







&#x20;                     {errors.consent}







&#x20;                   \</span>







&#x20;                 )}















&#x20;                 \<button







&#x20;                   type="submit"







&#x20;                   className={styles["tte-submit"]}







&#x20;                   disabled={!isFormValid}







&#x20;                 \>







&#x20;                   Submit Query







&#x20;                 \</button>







&#x20;               \</form>







&#x20;             )}







&#x20;           \</div>







&#x20;         \</div>







&#x20;       \</div>















&#x20;       {isPrivacyOpen && (







&#x20;         \<div







&#x20;           className={styles["tte-privacy-overlay"]}







&#x20;           role="dialog"







&#x20;           aria-modal="true"







&#x20;           aria-labelledby="tte-privacy-title"







&#x20;           onMouseDown={(event) => event.stopPropagation()}







&#x20;         \>







&#x20;           \<div className={styles["tte-privacy-card"]}>







&#x20;             \<div className={styles["tte-privacy-header"]}>







&#x20;               \<h2







&#x20;                 id="tte-privacy-title"







&#x20;                 className={styles["tte-privacy-title"]}







&#x20;               \>







&#x20;                 PRIVACY POLICY ACCEPTANCE







&#x20;               \</h2>







&#x20;             \</div>















&#x20;             \<div className={styles["tte-privacy-content"]}>







&#x20;               \<p>







&#x20;                 By accessing or using the Platform, I hereby provide my explicit,







&#x20;                 informed, and unconditional consent to{" "}







&#x20;                 \<strong>PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED\</strong> for the







&#x20;                 following:







&#x20;               \</p>















&#x20;               \<h3>1. ACKNOWLEDGMENT\</h3>







&#x20;               \<p>







&#x20;                 I have carefully read, fully understood, and voluntarily agree to







&#x20;                 be bound by the Terms and Conditions of{" "}







&#x20;                 \<strong>PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED\</strong>.







&#x20;               \</p>















&#x20;               \<h3>2. DATA COLLECTION AND USAGE CONSENT\</h3>







&#x20;               \<p>







&#x20;                 I confirm that I have read and understood the Privacy Policy and







&#x20;                 agree to its terms.







&#x20;               \</p>







&#x20;               \<ul>







&#x20;                 \<li>Identification details\</li>







&#x20;                 \<li>Contact information\</li>







&#x20;                 \<li>Usage data and activity logs\</li>







&#x20;                 \<li>Device and technical data\</li>







&#x20;               \</ul>















&#x20;               \<h3>3. DATA COLLECTION AND USAGE CONSENT\</h3>







&#x20;               \<p>







&#x20;                 I consent to the collection and processing of my personal data,







&#x20;                 including but not limited to:







&#x20;               \</p>







&#x20;               \<ul>







&#x20;                 \<li>Account management and authentication\</li>







&#x20;                 \<li>Service delivery and personalization\</li>







&#x20;                 \<li>Communication and notifications\</li>







&#x20;                 \<li>Legal and regulatory compliance\</li>







&#x20;                 \<li>Security monitoring and fraud prevention\</li>







&#x20;               \</ul>















&#x20;               \<h3>4. DATA SECURITY DISCLAIMER\</h3>







&#x20;               \<ul>







&#x20;                 \<li>







&#x20;                   The Company implements reasonable technical and organizational







&#x20;                   safeguards







&#x20;                 \</li>







&#x20;                 \<li>







&#x20;                   However, I acknowledge that no digital system is completely







&#x20;                   secure







&#x20;                 \</li>







&#x20;                 \<li>







&#x20;                   The Company shall not be liable for data breaches resulting from







&#x20;                   sophisticated cyber-attacks beyond reasonable control







&#x20;                 \</li>







&#x20;               \</ul>















&#x20;               \<h3>5. PAYMENT AND FRAUD PREVENTION DISCLAIMER\</h3>







&#x20;               \<ul>







&#x20;                 \<li>







&#x20;                   I understand that payment-related communications must be verified







&#x20;                   through official Company channels







&#x20;                 \</li>







&#x20;                 \<li>







&#x20;                   The Company does not accept responsibility for losses due to







&#x20;                   fraudulent payment requests or impersonation







&#x20;                 \</li>







&#x20;               \</ul>















&#x20;               \<h3>6. USER RIGHTS\</h3>







&#x20;               \<p>Subject to applicable laws, I understand I may:\</p>







&#x20;               \<ul>







&#x20;                 \<li>Access my data\</li>







&#x20;                 \<li>Request correction or deletion\</li>







&#x20;                 \<li>Withdraw consent where permissible\</li>







&#x20;               \</ul>















&#x20;               \<h3>7. THIRD-PARTY SERVICES\</h3>







&#x20;               \<p>







&#x20;                 I acknowledge that certain services may involve third-party







&#x20;                 providers, and the Company is not responsible for their independent







&#x20;                 practices.







&#x20;               \</p>















&#x20;               \<h3>8. CONSENT VALIDITY\</h3>







&#x20;               \<p>This consent:\</p>







&#x20;               \<ul>







&#x20;                 \<li>Is legally binding\</li>







&#x20;                 \<li>







&#x20;                   Remains valid until withdrawn (subject to legal obligations)







&#x20;                 \</li>







&#x20;                 \<li>Applies to all Platform interactions\</li>







&#x20;               \</ul>















&#x20;               \<p>







&#x20;                 \<strong>MANDATORY CONSENT ACTIONS (IMPLEMENTATION):\</strong>







&#x20;               \</p>







&#x20;               \<p>I agree to the Privacy Policy\</p>







&#x20;               \<p>I consent to data processing as described\</p>















&#x20;               \<p>







&#x20;                 \<strong>OPTIONAL CONSENTS:\</strong>







&#x20;               \</p>







&#x20;               \<p>I agree to receive marketing communications\</p>







&#x20;               \<p>I accept use of cookies and tracking technologies\</p>















&#x20;               \<p>







&#x20;                 \<strong>







&#x20;                   COMPANY DETAILS: PRGEEQ GLOBAL SOLUTIONS PRIVATE LIMITED







&#x20;                 \</strong>







&#x20;               \</p>







&#x20;               \<p>







&#x20;                 \<strong>Email: contact\\\\@prgeeq.com\</strong>







&#x20;               \</p>







&#x20;             \</div>















&#x20;             \<div className={styles["tte-privacy-footer"]}>







&#x20;               \<button







&#x20;                 type="button"







&#x20;                 className={styles["tte-privacy-accept"]}







&#x20;                 onClick={() => {







&#x20;                   handleFieldChange("consent", true);







&#x20;                   setTouched((prev) => ({ ...prev, consent: true }));







&#x20;                   setIsPrivacyOpen(false);







&#x20;                 }}







&#x20;               \>







&#x20;                 Close &amp; Accept







&#x20;               \</button>







&#x20;             \</div>







&#x20;           \</div>







&#x20;         \</div>







&#x20;       )}







&#x20;     \</div>







&#x20;   \</div>







&#x20; );















&#x20; /\*







&#x20;  \* IMPORTANT:







&#x20;  \* Render the modal directly under \<body>.







&#x20;  \* This prevents any parent transform/position/overflow from







&#x20;  \* affecting the viewport-centering calculation.







&#x20;  \*/







&#x20; return createPortal(modalContent, document.body);







}
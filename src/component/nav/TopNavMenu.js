import React from "react";
import SignUp from "../modal/SignUp";
import SignIn from "../modal/SignIn";
import Wallet from "../sidebar/Wallet";
import { Link } from "react-router-dom";
import MobileTopNav from "./MobileTopNav";
function TopNavMenu() {
  return (
    <div className="top-nav max-width">
      <div className="container">
        <div className="mobile-menu">
          <input type="checkbox" id="mobile-aside-toogle" hidden />
         
          <div className="mobile-menu-items">
          <label htmlFor="mobile-aside-toogle" className="tooble-bars">
            <svg
              height="1.5rem"
              width="1.5rem"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                data-name="Menu Button"
                className="cls-1"
                d="M2 13v-2h12v2Zm0-4V7h12v2Zm0-4V3h12v2Z"
              />
            </svg>
          </label>
            <MobileTopNav />
            <img src="/assets/media/logo/logo.svg" alt="Logo" className="mobile-menu-logo" />
            <svg
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              data-name="Line Color"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line-color mobile-menu-chat-icon"
            > 
              <path
                d="M18.81 16.23 20 21l-4.95-2.48A9.8 9.8 0 0 1 12 19c-5 0-9-3.58-9-8s4-8 9-8 9 3.58 9 8a7.5 7.5 0 0 1-2.19 5.23"
                style={{
                  fill: "none",
                  stroke: "#98a7b5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2
                }}
              />
            </svg>
          </div>
        </div>
        <div className="top-menu">
          <li className="nav-item">
            <Link className="nav-link" to={"/casino"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentcolor"
                >
                  <path
                    fillRule={"evenodd"}
                    clipPath={"evenodd"}
                    d="M7.43103 2.9834C7.80526 3.08767 8.14511 3.28347 8.39971 3.54142C8.70063 3.84636 15.3249 12.0899 15.4817 12.3546C15.668 12.669 15.7485 12.9325 15.7771 13.321L15.7993 13.6214L16.0887 13.4482C16.5527 13.1705 16.7576 12.9042 16.859 12.4471C16.8891 12.3111 16.9087 12.1248 16.9026 12.0332C16.8762 11.6434 16.9416 11.7603 13.9654 6.7868C12.1224 3.70694 11.1433 2.09447 11.0455 1.97814C10.9646 1.88187 10.8242 1.75186 10.7335 1.68925C10.5407 1.55626 10.1356 1.43312 9.89864 1.43553C9.53193 1.43923 9.44264 1.48053 8.2209 2.21174L7.09025 2.88843L7.43103 2.9834ZM3.21825 6.09687C0.724944 8.11524 0.541041 8.27015 0.413803 8.45861C0.113979 8.90277 0.0761168 9.47364 0.3163 9.92857C0.417208 10.1196 1.1039 10.9867 3.83291 14.3688C5.69809 16.6803 7.27315 18.6233 7.33302 18.6866C7.61863 18.9885 8.09309 19.1544 8.54034 19.1088C8.93714 19.0683 9.10124 18.9672 10.175 18.1007C14.5774 14.5482 14.6594 14.4804 14.7862 14.2908C15.0788 13.8535 15.1218 13.2727 14.8948 12.8244C14.7978 12.6329 14.2032 11.8815 11.3972 8.4048C9.53778 6.10096 7.96426 4.15936 7.90047 4.09017C7.59668 3.76056 7.13689 3.59077 6.66981 3.63571C6.19628 3.68131 6.24576 3.64599 3.21825 6.09687ZM11.6089 1.4892C11.664 1.55081 13.0002 3.75698 14.5781 6.39187C17.1681 10.7165 17.4548 11.2061 17.5264 11.4252C17.8618 12.452 17.4578 13.491 16.4847 14.1049C16.3405 14.1959 16.5594 14.1149 17.3793 13.774C18.7218 13.2158 18.8907 13.1169 19.1271 12.7499C19.3652 12.3805 19.4329 11.9069 19.3034 11.5171C19.2767 11.4368 18.3093 9.13244 17.1537 6.39623C15.4533 2.37023 15.0239 1.37891 14.9022 1.19889C14.6134 0.771735 14.093 0.53608 13.5586 0.590598C13.349 0.611985 13.1891 0.668421 12.4161 0.993739C11.9217 1.20179 11.5153 1.37319 11.5129 1.37464C11.5105 1.37607 11.5537 1.4276 11.6089 1.4892ZM1.75255 8.77673C1.72239 8.82769 1.69958 8.90779 1.70184 8.95476C1.70814 9.08592 1.97739 10.2867 2.01436 10.3485C2.07683 10.4529 2.2479 10.5278 2.38016 10.5087C2.65695 10.4687 2.73439 10.2807 2.64855 9.85719L2.593 9.58323L2.85844 9.70426C3.00444 9.77083 3.16605 9.82056 3.21759 9.81477C3.50353 9.78269 3.64876 9.49548 3.50255 9.25117C3.47162 9.1995 3.36644 9.12485 3.24577 9.06895C2.47865 8.7136 2.20637 8.59805 2.106 8.58519C1.97269 8.56817 1.8303 8.64529 1.75255 8.77673ZM7.0538 9.38662C6.90208 9.53837 6.75373 9.79779 6.7029 10.0002L6.65588 10.1874L6.40282 10.2132C5.64627 10.2903 5.12514 10.9686 5.24025 11.7263C5.25831 11.8451 5.31128 11.969 5.42602 12.1607C5.57029 12.4018 5.60783 12.4427 5.79737 12.5657C5.91333 12.641 6.0657 12.7198 6.13593 12.7409C6.32781 12.7985 8.2513 12.9998 8.42588 12.9806C8.64024 12.957 8.8002 12.8518 8.93 12.6488C9.03069 12.4915 9.04967 12.3842 9.15662 11.3669C9.27444 10.2462 9.27266 10.1074 9.13635 9.7723C8.94077 9.29148 8.29227 8.94811 7.75861 9.04274C7.52246 9.0846 7.19688 9.24344 7.0538 9.38662ZM12.532 12.4708C12.5089 12.5402 12.5165 12.6946 12.5515 12.867L12.6088 13.1495L12.3277 13.0302C11.93 12.8616 11.7395 12.9096 11.6674 13.1967C11.6352 13.3248 11.6411 13.3826 11.6955 13.4735C11.754 13.5713 11.8594 13.6317 12.4071 13.8813C13.0975 14.1959 13.2198 14.2211 13.3772 14.0817C13.5214 13.9541 13.5188 13.7927 13.361 13.0792C13.1989 12.346 13.1644 12.278 12.9348 12.2409C12.7587 12.2125 12.5848 12.3117 12.532 12.4708Z"
                    fill="currentcolor"
                  />
                </svg>
              </span>
              Casino{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sports"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    fillRule={"evenodd"}
                    clipPath={"evenodd"}
                    d="M7.00128 0.025284C6.45728 0.0760148 5.83169 0.207106 5.31315 0.379052L5.0306 0.472747L5.14405 0.529457C5.74555 0.830178 6.5059 1.27582 7.14248 1.70078L7.53277 1.96135L7.71934 1.79755C7.95216 1.59313 8.26551 1.24338 8.33734 1.10775C8.3823 1.02284 8.39355 0.921353 8.4027 0.518818L8.41377 0.0324642L8.18667 0.013268C7.90087 -0.0108812 7.32688 -0.00507835 7.00128 0.025284ZM9.16978 0.469758C9.16943 1.01086 9.09077 1.35243 8.90403 1.62388C8.85107 1.70084 8.66286 1.91337 8.48578 2.09616C8.30428 2.28352 8.17554 2.43882 8.19066 2.45213C8.20543 2.46511 8.3692 2.60154 8.55457 2.75531C8.73993 2.90909 8.94558 3.08194 9.01158 3.13941L9.1316 3.24395L9.52446 3.00612C10.0042 2.71578 10.7128 2.35114 11.0365 2.22805C11.3013 2.12738 11.8113 1.99013 12.2599 1.89881C12.42 1.86622 12.5555 1.83504 12.561 1.82953C12.5757 1.81481 12.2936 1.57983 12.0568 1.40961C11.2359 0.819511 10.3455 0.422632 9.25061 0.158896L9.17002 0.139494L9.16978 0.469758ZM3.8344 1.05801C2.76495 1.70746 1.88719 2.58683 1.24419 3.65302C1.04446 3.98425 0.837436 4.39063 0.858009 4.41117C0.866245 4.41941 0.984177 4.38588 1.1201 4.3367C1.6484 4.14553 2.28586 3.99284 3.65398 3.72969C4.90731 3.48864 5.18678 3.40649 5.84364 3.0861C6.21576 2.9046 6.88405 2.49914 6.88405 2.45491C6.88405 2.42408 6.15454 1.95156 5.71176 1.69556C5.29167 1.45269 4.26753 0.941341 4.15848 0.920005C4.10564 0.909689 4.01531 0.94814 3.8344 1.05801ZM13.1705 2.50585C12.5321 2.59207 11.6836 2.78573 11.2955 2.93376C10.9963 3.04789 10.5056 3.29908 10.0515 3.57061L9.69427 3.7842L9.83776 3.93332C10.0801 4.18518 10.3791 4.53969 10.5592 4.78883L10.7309 5.0263L10.9451 4.95825C11.4104 4.81048 11.7365 4.75937 12.218 4.75867C12.6404 4.75805 12.6887 4.76374 12.9067 4.8397C13.5124 5.0508 14.1986 5.55292 14.8416 6.25565C15.0732 6.50866 15.1224 6.55043 15.1085 6.48182C15.0992 6.43557 15.0767 6.30539 15.0587 6.19256C14.8693 5.01048 14.2918 3.74783 13.4885 2.75924C13.3661 2.60851 13.2642 2.48715 13.2621 2.48958C13.2601 2.49199 13.2188 2.49931 13.1705 2.50585ZM7.13316 3.20527C6.9075 3.35793 6.50526 3.59218 6.23929 3.72579C5.54656 4.07382 5.12022 4.20734 4.01965 4.42102C2.14319 4.78531 1.46417 4.96657 0.808715 5.27814C0.430856 5.45774 0.475462 5.40085 0.367582 5.84087C0.239216 6.36462 0.15739 7.22883 0.185818 7.76049C0.247246 8.90899 0.482495 9.84339 0.949565 10.7938C1.13675 11.1747 1.47718 11.7463 1.51684 11.7463C1.52841 11.7463 1.56156 11.6572 1.59052 11.5485C1.81542 10.7036 2.48975 9.48288 3.31844 8.42061C4.52529 6.8736 6.31543 5.21305 8.27459 3.82327L8.4747 3.68131L8.39006 3.59933C8.2724 3.4853 7.58107 2.92447 7.56038 2.92623C7.55109 2.92702 7.35883 3.05261 7.13316 3.20527ZM8.69814 4.45314C6.25488 6.19982 4.26524 8.17733 3.15892 9.95854C2.63684 10.7991 2.33501 11.5145 2.19269 12.2486L2.13449 12.5489L2.33319 12.7508C3.2598 13.692 4.41295 14.3693 5.69204 14.7236C6.13021 14.845 6.6127 14.9314 6.64696 14.8947C6.685 14.854 6.87409 14.4106 7.00409 14.0574C7.3469 13.1259 7.71559 11.7798 8.24713 9.51893C8.67291 7.70786 8.82835 7.17244 9.09244 6.60734C9.28183 6.20205 9.47367 5.92779 9.77539 5.631L10.0483 5.36252L9.91266 5.17674C9.69561 4.87953 9.09989 4.21432 9.05074 4.21432C9.04057 4.21432 8.8819 4.32179 8.69814 4.45314ZM11.9249 5.50808C11.6585 5.55207 11.2084 5.65491 11.1844 5.67733C11.172 5.68885 11.2648 5.90183 11.3907 6.15059C11.9158 7.18821 12.3196 8.36657 12.6113 9.71262C12.7893 10.5339 12.9415 11.553 12.9936 12.2738C13.0036 12.4108 13.0187 12.571 13.0272 12.6299L13.0427 12.7368L13.2103 12.5566C13.5906 12.1478 13.962 11.631 14.2455 11.1162C14.7697 10.1644 15.065 9.16402 15.1628 8.00922L15.1802 7.80369L14.8645 7.42308C14.1525 6.56447 13.4358 5.91481 12.936 5.67487C12.5682 5.4983 12.2761 5.45012 11.9249 5.50808ZM10.2857 6.16422C10.0108 6.42136 9.77542 6.83764 9.56918 7.4314C9.42871 7.83587 9.31802 8.26182 8.93541 9.87062C8.30408 12.5251 7.93325 13.8235 7.54631 14.7347C7.48834 14.8713 7.44089 14.9886 7.44089 14.9956C7.44089 15.0192 8.35809 14.9675 8.66989 14.9264C9.88561 14.766 11.0095 14.3216 12.0365 13.5951L12.3093 13.4021L12.2913 13.0065C12.1983 10.9637 11.7141 8.74932 10.9969 7.08643C10.8281 6.69512 10.4859 6.03137 10.4529 6.03137C10.439 6.03137 10.3638 6.09115 10.2857 6.16422Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              InPlay
            </Link>
          </li>
        </div>
        <div className="top-action">
          <SignIn />
          <SignUp />
          <Wallet />
        </div>
      </div>
    </div>
  );
}
export default TopNavMenu;
